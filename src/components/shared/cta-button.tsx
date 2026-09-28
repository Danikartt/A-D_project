'use client';

/**
 * Botón CTA con efecto hover — debe ser Client Component
 * porque usa event handlers del navegador.
 */
export function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '0.6rem 1.5rem',
        background: 'var(--accent-primary)',
        color: '#fff',
        borderRadius: '0.5rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-default)',
      }}
      onMouseOver={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = 'var(--accent-hover)')
      }
      onMouseOut={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = 'var(--accent-primary)')
      }
    >
      {children}
    </div>
  );
}
