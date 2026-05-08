import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '5rem', lineHeight: 1 }}>
        404
      </p>
      <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-primary)' }}>
        Página no encontrada
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        style={{
          padding: '0.6rem 1.5rem',
          background: 'var(--accent-primary)',
          color: '#fff',
          borderRadius: '0.5rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
