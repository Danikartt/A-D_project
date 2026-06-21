# Asistente Web para Pequeños Negocios

Una aplicación web full-stack diseñada para facilitar la gestión de clientes, presupuestos, toma de datos y citas en pequeños negocios. Integra un chatbot inteligente (Gemini) para automatizar la atención al cliente y reducir la carga administrativa del dueño del negocio.

## 🎯 Propósito

Muchos pequeños negocios no pueden permitirse contratar personal dedicado a la atención al cliente. Este proyecto automatiza esas tareas mediante un chatbot que:

- Responde consultas de clientes
- Genera presupuestos
- Recopila datos de clientes
- Gestiona y confirma citas

Permitiendo que el dueño del negocio se enfoque en las operaciones principales sin sacrificar la experiencia del cliente.

## 🚀 Características

- ✅ **Chatbot Inteligente**: Powered by Google Gemini, personalizable para el contexto del negocio
- ✅ **Gestión de Citas**: Sistema de confirmación y seguimiento de citas
- ✅ **Generación de Presupuestos**: Creación automática de propuestas personalizadas
- ✅ **Recopilación de Datos**: Formularios integrados para información de clientes
- ✅ **Interfaz Responsiva**: Accesible desde desktop y mobile
- ✅ **Desarrollo Colaborativo**: Arquitectura escalable para múltiples desarrolladores

## 🛠️ Stack Tecnológico

**Frontend:**
- React
- Next.js
- TailwindCSS (o framework CSS utilizado)

**Backend/Integración:**
- Node.js / Next.js API Routes
- Google Gemini API (chatbot)

**Base de Datos:**
- PostgreSQL (si se utiliza) / Firebase (si se utiliza)

**Control de Versiones:**
- Git / GitHub
- Flujo de trabajo con ramas independientes por desarrollador

## 📋 Requisitos Previos

- Node.js >= 16.x
- npm o yarn
- Cuenta de Google Cloud (para acceso a Gemini API)
- Git

## 🔧 Instalación y Setup

### 1. Clonar el repositorio

```bash
git clone https://github.com/[tu-usuario]/[nombre-repo].git
cd [nombre-repo]
```

### 2. Crear rama de trabajo personal

```bash
git checkout -b develop/[tu-nombre]
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_GEMINI_API_KEY=tu_api_key_aqui
DATABASE_URL=tu_url_base_datos_aqui
NEXT_PUBLIC_APP_NAME=Nombre del Negocio
```

**Nota:** Para obtener la API Key de Gemini:
1. Ir a [Google AI Studio](https://aistudio.google.com)
2. Crear un nuevo proyecto
3. Habilitar Gemini API
4. Generar API Key

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/
│   │   ├── chat/          # Endpoint del chatbot
│   │   ├── citas/         # Gestión de citas
│   │   └── presupuestos/  # Generación de presupuestos
│   ├── components/
│   ├── pages/
│   └── layout.js
├── public/
├── styles/
├── .env.local
├── next.config.js
└── package.json
```

## 💻 Flujo de Trabajo Colaborativo

Este proyecto usa un modelo de ramas independientes para cada desarrollador:

### Crear tu rama de trabajo

```bash
git checkout -b develop/[tu-nombre]
```

### Actualizar desde main

```bash
git fetch origin
git rebase origin/main
```

### Crear Pull Request

1. Push a tu rama: `git push origin develop/[tu-nombre]`
2. Abre un PR contra `main` o `develop`
3. Describe los cambios realizados
4. Espera revisión del otro colaborador
5. Merge después de aprobación

### Resolver Conflictos

Si hay conflictos al hacer rebase o merge:

```bash
# Resolver conflictos manualmente en los archivos
git add .
git rebase --continue
# o
git merge --continue
```

## 🤖 Configuración del Chatbot

El chatbot puede personalizarse para diferentes tipos de negocios. Ejemplo de configuración:

```javascript
// api/chat/route.js
const systemPrompt = `Eres un asistente de atención al cliente para [Nombre del Negocio].
Tu objetivo es:
- Responder preguntas sobre servicios/productos
- Asistir en la generación de presupuestos
- Agendar citas
- Recopilar información de clientes de manera natural y profesional.

Sé amable, profesional y eficiente.`;
```

## 📝 Primeros Pasos para Desarrolladores

1. **Lee esta documentación** completamente
2. **Crea tu rama** (`develop/[tu-nombre]`)
3. **Entiende la arquitectura actual** antes de modificar
4. **Haz commits pequeños y descriptivos**: `git commit -m "feat: agregar validación en formulario de citas"`
5. **Comunica cambios grandes** con el otro colaborador antes de implementarlos

## 🐛 Reporte de Bugs

Si encuentras un bug, crea un issue en GitHub con:
- Descripción clara del problema
- Pasos para reproducirlo
- Resultado esperado vs. actual
- Entorno (OS, navegador, versión de Node)

## 📚 Documentación Adicional

- [Documentación de Next.js](https://nextjs.org/docs)
- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Git Workflow Guide](https://git-scm.com/book/es/v2)

## 👥 Colaboradores

- [Nombre Colaborador 1]
- [Nombre Colaborador 2]

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto, abre un issue o contacta directamente a los colaboradores.

## 📄 Licencia

Este proyecto está bajo licencia [MIT / GPL / Licencia de tu elección]. Ver `LICENSE` para más detalles.

---

**Estado del Proyecto:** 🔨 En Desarrollo

Última actualización: 2026
