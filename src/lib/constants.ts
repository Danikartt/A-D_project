/**
 * Constantes de la aplicación.
 * Centraliza valores mágicos para facilitar su mantenimiento.
 */

export const APP_NAME = 'A-D Project' as const;
export const APP_DESCRIPTION = 'Aplicación web moderna construida con Next.js 15, React 19 y TypeScript.';

/** Rutas de navegación */
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

/** Duración de animaciones en ms */
export const DURATION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 350,
  DRAMATIC: 600,
} as const;
