  import { createContext, useContext, useEffect, useState } from "react";

  // ─── Constantes ──────────────────────────────────────────────────────────────

  const AuthContext = createContext();

  // Mapeo directo enum Java → rol interno. Única fuente de verdad.
  const ROLE_MAP = {
    ROL_CLIENTE: "cliente",
    ROL_RESTAURANTE: "restaurante",
    ROL_CHEF: "chef",
    ROL_MESERO: "mesero",
    ROL_ADMIN: "admin"
  };

  // ─── Helpers puros (fuera del componente, no se recrean) ──────────────────────

  /**
   * Convierte el rol del backend (string o objeto) al rol interno.
   * Soporta: "ROL_CLIENTE", { nombre: "ROL_CLIENTE" }, "cliente"
   */
  export function normalizeRole(raw) {
    if (!raw) return null;

    const value = typeof raw === "string"
      ? raw.trim()
      : (raw?.nombre ?? raw?.name ?? "");

    // Mapa directo (caso más común del enum Java)
    if (ROLE_MAP[value]) return ROLE_MAP[value];

    // Fallback: ya viene normalizado ("cliente", "chef", etc.)
    const lower = value.toLowerCase();
    return Object.values(ROLE_MAP).includes(lower) ? lower : null;
  }

  /**
   * Decodifica el payload de un JWT sin verificar firma.
   * Retorna null si el token es inválido.
   */
  function decodeJwtPayload(token) {
    if (typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    try {
      return JSON.parse(atob(parts[1]));
    } catch {
      return null;
    }
  }

  /** Verifica si un token JWT ya expiró. */
  function isTokenExpired(token) {
    const payload = decodeJwtPayload(token);
    return payload?.exp ? payload.exp <= Date.now() / 1000 : false;
  }

  /** Normaliza la respuesta del backend al modelo interno de usuario. */
  function mapLoginResponse(data) {
    const rawRole = Array.isArray(data.roles) ? data.roles[0] : (data.roles ?? "");

    return {
      id: data.id ?? "",
      username: data.correo ?? "",                          // ClienteDto.correo
      nombre: data.nombre ?? "Administrador" ,
      token: data.token ?? null,
      role: normalizeRole(rawRole),
      role: normalizeRole(rawRole),
      mustChangePassword: data.mustChangePassword ?? false
    };
  }

  // ─── Provider ────────────────────────────────────────────────────────────────

  const STORAGE_KEY = "auth";

  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const updateUser = (newData) =>{
      setUser(prev =>{
        const updated = {...prev, ...newData};
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    };

    // Hidratación inicial desde localStorage
    useEffect(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.token && isTokenExpired(parsed.token)) {
            localStorage.removeItem(STORAGE_KEY);
          } else {
            setUser(parsed);
          }
        } catch {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
      setIsLoading(false);
    }, []);

    const login = (data) => {
      const userData = mapLoginResponse(data);
      setUser(userData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    };

    const logout = () => {
      setUser(null);
      localStorage.removeItem(STORAGE_KEY);
    };

    return (
      <AuthContext.Provider value={{ user, login, logout, isLoading, updateUser }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export const useAuth = () => useContext(AuthContext);