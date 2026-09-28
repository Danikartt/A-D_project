'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: 'var(--error)', fontSize: '1.5rem', fontWeight: 700 }}>
        Algo salió mal
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '0.6rem 1.5rem',
          background: 'var(--accent-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
