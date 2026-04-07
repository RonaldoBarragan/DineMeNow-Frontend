# 📋 Ejemplo: Registro de Cliente

## 🎯 JSON EXACTO que se envía al backend

Este es el JSON que genera el formulario y lo procesa `registroUsuario()` en `ClientRegister.js`:

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "documento": {
    "tipo": "CC",
    "numero": "123456789"
  },
  "direccion": {
    "calle": "Carrera 5",
    "numero": "123",
    "ciudad": "Bogotá",
    "codigoPostal": "110111",
    "pais": "Colombia"
  },
  "correo": "juan@email.com",
  "telefono": "3001234567",
  "foto": "",
  "user": "juanperez",
  "password": "MiContraseña123"
}
```

## ✅ Lo que cambió

### Antes (INCORRECTO):
```javascript
{
  usuario: "juanperez",           // ❌ Debería ser "user"
  roles: [],                       // ❌ No se envía
  // ❌ Faltaba telefono
  // ❌ Faltaba direccion.numero
  direccion: {
    // ❌ Faltaba numero
    calle: "Carrera 5",
    ciudad: "Bogotá",
    pais: "Colombia"
  }
}
```

### Después (CORRECTO):
```javascript
{
  user: "juanperez",               // ✅ Cambio nombre correcto
  // ✅ NO se envía roles
  telefono: "3001234567",          // ✅ Agregado
  direccion: {
    numero: "123",                 // ✅ Agregado y obligatorio
    calle: "Carrera 5",
    ciudad: "Bogotá",
    codigoPostal: "110111",        // ✅ Agregado
    pais: "Colombia"
  }
}
```

## 📊 Flujo completo

1. **Usuario llena formulario** → `formulario.jsx`
2. **Al hacer submit** → Validación local de campos
3. **Se llama** → `registroUsuario(formData)`
4. **Servicio construye requestBody** → Exactamente el JSON anterior
5. **Se logea en consola** → Puedes ver el JSON EN CONSOLA
6. **Se envía POST** → `http://localhost:8080/api/clientes/registro`
7. **Backend responde** → Se logea la respuesta

## 🔍 Logs en consola

Abre DevTools (F12) → Consola para ver:

```
📤 Datos envíados: {nombre: "Juan", apellido: "Pérez", ...}
📤 Enviando registro al backend: {nombre: "Juan", apellido: "Pérez", ...}
✅ Registro exitoso: {id: "...", message: "Usuario registrado"}
```

o

```
❌ Error en registro: {message: "Email ya existe"}
```

## 🛠️ Campos OBLIGATORIOS según backend

- ✅ `nombre` - String
- ✅ `apellido` - String
- ✅ `documento.tipo` - String (CC, CE, PA)
- ✅ `documento.numero` - String
- ✅ `direccion.calle` - String
- ✅ `direccion.numero` - String (IMPORTANTE: era el que faltaba)
- ✅ `direccion.ciudad` - String
- ✅ `direccion.codigoPostal` - String
- ✅ `direccion.pais` - String
- ✅ `correo` - String (email)
- ✅ `telefono` - String (IMPORTANTE: ahora obligatorio)
- ✅ `user` - String (nombre de usuario) **← Se autocompleta con el email**
- ✅ `password` - String (write-only pero SÍ se envía)

## 🎨 Mejoras de UX/UI

### 📱 Disposición visual mejorada
- **Campos organizados en filas de 2 columnas** para mejor aprovechamiento del espacio
- **Responsive**: Se adapta automáticamente a móviles y desktop
- **Campos lógicos agrupados**: Nombre/Apellido, Calle/Número, Ciudad/Código Postal, etc.

### 🔄 Autocompletado inteligente
- **Campo "user" se autocompleta automáticamente** con el valor del email
- **Campo readonly** para evitar modificaciones manuales
- **Indicador visual** que explica el comportamiento

### 📋 Flujo de usuario mejorado
1. Usuario escribe su email → automáticamente se copia a "user"
2. Campos organizados lógicamente facilitan el llenado
3. Validación en tiempo real con mensajes claros
4. Diseño responsive funciona en todos los dispositivos

## ✨ Funcionalidades implementadas

✅ `useState` para manejar todos los campos
✅ `onChange` handlers para inputs simples, documento y dirección
✅ `onSubmit` con validación y error handling
✅ Mensajes de error por campo
✅ console.log del request ANTES de enviarlo
✅ Validación de contraseñas coinciden
✅ Indicador de carga durante el envío
✅ Manejo de errores del backend
✅ Mensaje de éxito visual
✅ **Campo "user" se autocompleta con el email**
✅ **Campos organizados en filas de 2 columnas para mejor UX**

---

Para testing rápido, copia este JSON y envíalo con Postman/curl:

```bash
curl -X POST http://localhost:8080/api/clientes/registro \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test",
    "apellido": "Usuario",
    "documento": {"tipo": "CC", "numero": "987654321"},
    "direccion": {"calle": "Calle 1", "numero": "100", "ciudad": "Bogotá", "codigoPostal": "110111", "pais": "Colombia"},
    "correo": "test@test.com",
    "telefono": "3009876543",
    "foto": "",
    "user": "testuser",
    "password": "Test123!"
  }'
```
