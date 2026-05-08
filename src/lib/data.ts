// src/lib/data.ts
// Datos mock de AutoTaller Novex — sin base de datos

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'mantenimiento' | 'frenos' | 'neumaticos' | 'motor' | 'electrica' | 'carroceria';
  featured: boolean;
  icon: string;
};

export type CarouselImage = {
  id: string;
  src: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: 'aceite',
    name: 'Cambio de Aceite',
    description: 'Sustitución de aceite motor y filtro con análisis de fluidos incluido.',
    price: 'Desde 29 €',
    duration: '45 min',
    category: 'mantenimiento',
    featured: true,
    icon: 'Droplets',
  },
  {
    id: 'frenos',
    name: 'Frenos y Pastillas',
    description: 'Revisión, limpieza y sustitución de pastillas y discos de freno.',
    price: 'Desde 89 €',
    duration: '1-2 h',
    category: 'frenos',
    featured: true,
    icon: 'Circle',
  },
  {
    id: 'neumaticos',
    name: 'Cambio de Neumáticos',
    description: 'Montaje, desmontaje y equilibrado con control de presión TPMS.',
    price: 'Desde 15 €/ud',
    duration: '45 min',
    category: 'neumaticos',
    featured: true,
    icon: 'Gauge',
  },
  {
    id: 'diagnostico',
    name: 'Diagnóstico Motor',
    description: 'Lectura de códigos OBD-II y análisis completo de centralita.',
    price: 'Desde 49 €',
    duration: '1 h',
    category: 'motor',
    featured: true,
    icon: 'ScanLine',
  },
  {
    id: 'aireacondicionado',
    name: 'Aire Acondicionado',
    description: 'Recarga de gas, limpieza de filtro habitáculo y revisión del sistema.',
    price: 'Desde 59 €',
    duration: '1 h',
    category: 'mantenimiento',
    featured: false,
    icon: 'Wind',
  },
  {
    id: 'alineacion',
    name: 'Alineación y Equilibrado',
    description: 'Geometría de dirección con banco láser de última generación.',
    price: 'Desde 39 €',
    duration: '1 h',
    category: 'neumaticos',
    featured: false,
    icon: 'AlignCenter',
  },
  {
    id: 'carroceria',
    name: 'Reparación de Carrocería',
    description: 'Desabollado, pintura y acabados con cámara de secado.',
    price: 'Desde 150 €',
    duration: '1-3 días',
    category: 'carroceria',
    featured: false,
    icon: 'PaintBucket',
  },
  {
    id: 'electrica',
    name: 'Instalación Eléctrica',
    description: 'Diagnóstico y reparación del sistema eléctrico y electrónico.',
    price: 'Desde 69 €',
    duration: '1-2 h',
    category: 'electrica',
    featured: false,
    icon: 'Zap',
  },
  {
    id: 'correa',
    name: 'Correa de Distribución',
    description: 'Sustitución de correa, tensor y bomba de agua para máxima seguridad.',
    price: 'Desde 249 €',
    duration: '3-4 h',
    category: 'motor',
    featured: false,
    icon: 'Settings',
  },
  {
    id: 'itv',
    name: 'Preparación ITV',
    description: 'Revisión exhaustiva pre-ITV para garantizar el éxito en la inspección.',
    price: 'Desde 79 €',
    duration: '1-2 h',
    category: 'mantenimiento',
    featured: false,
    icon: 'ClipboardCheck',
  },
  {
    id: 'preveuno',
    name: 'Revisión Pre-Verano',
    description: 'Check-up de 20 puntos: AC, neumáticos, frenos, niveles y más.',
    price: 'Desde 39 €',
    duration: '1 h',
    category: 'mantenimiento',
    featured: false,
    icon: 'Sun',
  },
  {
    id: 'preinvierno',
    name: 'Revisión Pre-Invierno',
    description: 'Batería, anticongelante, neumáticos de invierno y sistema de calefacción.',
    price: 'Desde 39 €',
    duration: '1 h',
    category: 'mantenimiento',
    featured: false,
    icon: 'Snowflake',
  },
];

export const carouselImages: CarouselImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80',
    alt: 'Mecánico trabajando en un vehículo',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    alt: 'Taller mecánico profesional',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
    alt: 'Motor de automóvil de alta performance',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1600&q=80',
    alt: 'Diagnóstico electrónico de vehículo',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=80',
    alt: 'Neumáticos y llantas de automóvil',
  },
];

export const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '8.000+', label: 'Clientes satisfechos' },
  { value: '25+', label: 'Mecánicos certificados' },
  { value: '98%', label: 'Tasa de satisfacción' },
];

export const contactInfo = {
  address: 'Calle de la Mecánica, 47 — 28045 Madrid',
  phone: '+34 91 234 56 78',
  email: 'info@autotallernovex.es',
  hours: [
    { days: 'Lunes – Viernes', time: '08:00 – 19:00' },
    { days: 'Sábado', time: '09:00 – 14:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
};

export const featuredServices = services.filter((s) => s.featured);
