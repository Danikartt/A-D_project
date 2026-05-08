/**
 * Tipos globales del proyecto.
 * Re-exporta todos los tipos desde un único punto de entrada.
 */

// ─── Tipos de UI ────────────────────────────────────────────────────────────

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ColorScheme = 'light' | 'dark' | 'system';

// ─── Tipos de respuesta API ──────────────────────────────────────────────────

export type ApiResponse<T> = {
  data: T;
  error: null;
} | {
  data: null;
  error: string;
};

// ─── Tipos de paginación ─────────────────────────────────────────────────────

export type PaginationParams = {
  page: number;
  limit: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
};

// ─── Tipos de navegación ─────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string | number;
};
