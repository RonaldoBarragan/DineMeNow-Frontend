import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const roleMap = {
  ROLE_Admin: "admin",
  ROLE_ADMIN: "admin",
  ROLE_Admini: "admin",
  ROLE_ADMINI: "admin",
  ROLE_Empleado: "empleado",
  ROLE_EMPLEADO: "empleado",
  ROLE_Mesero: "empleado",
  ROLE_MESERO: "empleado",
  ROLE_Cliente: "cliente",
  ROLE_CLIENTE: "cliente",
  ROLE_Restaurante: "restaurante",
  ROLE_RESTAURANTE: "restaurante",
  ROL_ADMIN: "admin",
  ROL_CLIENTE: "cliente",
  ROL_EMPLEADO: "empleado",
  ROL_MESERO: "empleado",
  ROL_RESTAURANTE: "restaurante",
  ROL_RESTAURANTE: "restaurante",
};

export function normalizeRole(rawRole) {
  if (!rawRole) return null;
  if (typeof rawRole !== "string") {
    return rawRole?.nombre || rawRole?.name || null;
  }

  const cleaned = rawRole.trim();
  if (roleMap[cleaned]) return roleMap[cleaned];

  return cleaned
    .toLowerCase()
    .replace(/^role[_-]?/i, "")
    .replace(/^rol[_-]?/i, "");
}

function parseJwtPayload(token) {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;

  try {
    return JSON.parse(atob(parts[1]));
  } catch (_error) {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (!stored) {
      setIsLoading(false);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      const payload = parseJwtPayload(parsed.token);
      const now = Date.now() / 1000;

      if (payload?.exp && payload.exp <= now) {
        localStorage.removeItem("auth");
      } else {
        setUser(parsed);
      }
    } catch (_error) {
      localStorage.removeItem("auth");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (data) => {
    const rawRole = Array.isArray(data.roles)
      ? data.roles[0]
      : data.roles || data.role;

    const role = normalizeRole(rawRole);

    const userData = {
      username:
        data.user || data.correo || data.email || data.usuario || data.username || "",
      token: data.token || data.accessToken || data.jwt || null,
      role,
      nombreCompleto: data.nombreCompleto || data.name || data.nombre || "",
      id: data.id || data.userId || data.usuarioId || "",
    };

    setUser(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("rol");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
