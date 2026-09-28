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
- TailwindCSS

**Backend/Integración:**
- Node.js / Next.js API Routes
- Google Gemini API (chatbot)

**Base de Datos:**
- App de ejemplo, sin base de datos

**Control de Versiones:**
- Git / GitHub
- Flujo de trabajo con ramas independientes por desarrollador

## ✨ Funcionalidades

- 🚧 Chatbot con IA (Gemini), personalizable por negocio
- ✅ Recopilación de datos de clientes vía formularios integrados
- 🚧 Gestión y confirmación de citas
- 🚧 Generación automática de presupuestos
- ✅ Interfaz responsive (desktop y mobile)

## 📸 Capturas de pantalla

> [PENDIENTE]



## 🤖 El chatbot en acción

> [PENDIENTE - El comportamiento del chatbot se personaliza por negocio mediante un system prompt configurable, adaptando tono y objetivos (agendar citas, generar presupuestos, resolver dudas) al contexto de cada cliente.]



## 🚀 Instalación local

```bash
git clone https://github.com/Danikartt/[nombre-repo].git
cd [nombre-repo]
npm install
```

Crea un archivo `.env.local` en la raíz:

```env
GEMINI_API_KEY=tu_api_key_aqui
DATABASE_URL=tu_url_base_datos_aqui
APP_NAME=Nombre del Negocio
```

Para obtener la API Key de Gemini: [Google AI Studio](https://aistudio.google.com) → crear proyecto → habilitar Gemini API → generar clave.

Arranca el servidor de desarrollo:

```bash
npm run dev
```

Disponible en `http://localhost:3000`.


## 📁 Estructura del proyecto

├── app/
│ ├── api/
│ │ └── chat/ 
│ |  └── route.ts # Endpoint del chatbot
│ ├── contacto/ 
| |    └── page.tsx # Pagina de contacto
│ ├── servicios/ 
| |    └── page.tsx # Pagina de servicios
│ ├── error.tsx
| ├── global.css
| ├── layout.tsx
| ├── loading.tsx
| ├── not-found.tsx
| └── page.tsx
| 
├── components/
| ├── layout/
| | ├── header.tsx
| | └── footer.tsx
| ├── shared/
| | ├── carousel.tsx
| | ├── chatbot.tsx
| | ├── contact-form.tsx
| | └── cta-button.tsx
| └── ui/
|   ├── button.tsx
|   └── input.tsx
├── lib/
|   ├── constants.ts
|   ├── data.tsx
|   └── utils.tsx
├── stores/
|   └── ui-store.ts
├── types/
|   └── index.ts
└── package.json



## 🧪 Testing

> [PENDIENTE ]



## 👥 Colaboradores

- [Danikartt](https://github.com/Danikartt)
- [AlexanderVC0123](https://github.com/AlexanderVC0123)

## 📄 Licencia

[Sin licencia]


**Estado del proyecto:** 🔨 En desarrollo activo