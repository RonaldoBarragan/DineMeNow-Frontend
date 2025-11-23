
# [DineMeNow ] 🚀

Este proyecto es una aplicación web desarrollada como parte de la asignatura **[Desarrollo ]**. 
Está construido utilizando **Vite** + **React** y utiliza **React Bootstrap** para la maquetación y diseño.

## 🛠️ Tecnologías

* **Core:** React + JavaScript (Vite)
* **Estilos:** React Bootstrap (Bootstrap 5)
* **Enrutamiento:** React Router DOM 6
* **Control de Versiones:** Git & GitHub

---

## 📂 Estructura del Proyecto

La arquitectura de carpetas está diseñada para separar la lógica de las vistas y mantener el código modular.

```text
src/
├── assets/           # Recursos estáticos locales (imágenes, svgs)
│
├── components/       # "Piezas de Lego" reutilizables
│   ├── common/       # Componentes genéricos (Botones, Loaders, Cards simples)
│   └── layout/       # Estructura fija (Navbar, Footer, Sidebar)
│
├── pages/            # Vistas completas (Rutas de la aplicación)
│   ├── Home.jsx      # Página de inicio
│   ├── Login.jsx     # Página de inicio de sesión
│   └── ...           # (Cada página nueva va aquí)
│
├── routes/           # Configuración de rutas si se separan de App.jsx
│
├── services/         # Lógica de conexión a APIs o bases de datos simuladas
│
├── context/          # React Context estado global (usuarios logeados)
│
├── constants/        #Valores inmutables y configuraciones globales (colores, API).
├
├── App.jsx           # Componente principal (Define las Rutas y el Layout base)
├── main.jsx          # Punto de entrada (Importa estilos de Bootstrap)
└── index.css         # Estilos globales mínimos (Reset, fuentes, body color)

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
