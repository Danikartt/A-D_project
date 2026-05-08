import Link from 'next/link';
import { Droplets, Circle, Gauge, ScanLine } from 'lucide-react';
import { featuredServices, stats, carouselImages } from '@/lib/data';
import { Carousel } from '@/components/shared/carousel';

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={28} />,
  Circle: <Circle size={28} />,
  Gauge: <Gauge size={28} />,
  ScanLine: <ScanLine size={28} />,
};

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        {/* Diagonal red slash */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 hidden lg:block"
          style={{
            background: 'linear-gradient(to bottom, #dc2626, #b91c1c)',
            clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0% 100%)',
            opacity: 0.15,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <p className="text-novex-red font-bold uppercase tracking-[0.3em] text-sm mb-4">
            ■ Taller Mecánico Profesional en Madrid
          </p>
          <h1
            className="font-display text-novex-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            TU COCHE,<br />
            <span className="text-novex-red">NUESTRA</span><br />
            MISIÓN
          </h1>
          <p className="text-novex-gray-lt text-lg max-w-xl mb-10 leading-relaxed">
            Más de 15 años reparando, manteniendo y poniendo a punto vehículos con la máxima precisión. Confía en los mejores.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/servicios"
              className="px-8 py-4 bg-novex-red hover:bg-novex-red-dark text-white font-bold uppercase tracking-widest text-sm rounded transition-colors"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border-2 border-white/30 hover:border-novex-red text-white font-bold uppercase tracking-widest text-sm rounded transition-colors"
            >
              Pedir Cita
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-novex-red py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-white font-display text-4xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </p>
              <p className="text-white/70 text-sm mt-1 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED SERVICES ─────────────────────────────────── */}
      <section className="py-24 bg-novex-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <h2 className="text-novex-white red-line" style={{ fontFamily: 'var(--font-display)' }}>
              SERVICIOS DESTACADOS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div
                key={s.id}
                className="group bg-novex-surface border border-novex-border rounded-xl p-6 flex flex-col gap-4 hover:border-novex-red transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center group-hover:bg-novex-red group-hover:text-white transition-colors">
                  {iconMap[s.icon] ?? <Droplets size={28} />}
                </div>
                <div>
                  <h3 className="text-novex-white font-bold mb-1">{s.name}</h3>
                  <p className="text-novex-gray-lt text-sm leading-relaxed">{s.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-novex-border flex justify-between items-center">
                  <span className="text-novex-red font-bold text-sm">{s.price}</span>
                  <span className="text-novex-gray-lt text-xs">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3 border border-novex-red text-novex-red hover:bg-novex-red hover:text-white font-bold uppercase tracking-widest text-sm rounded transition-colors"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ──────────────────────────────────────────── */}
      <section className="bg-novex-surface">
        <Carousel images={carouselImages} />
      </section>

      {/* ── CTA CONTACTO ──────────────────────────────────────── */}
      <section className="py-24 bg-novex-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-novex-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            ¿NECESITAS UNA REVISIÓN?
          </h2>
          <p className="text-novex-gray-lt text-lg mb-10">
            Pide tu cita online o llámanos ahora. Presupuesto sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="px-10 py-4 bg-novex-red hover:bg-novex-red-dark text-white font-bold uppercase tracking-widest text-sm rounded transition-colors"
            >
              Pedir Cita Online
            </Link>
            <a
              href="tel:+34912345678"
              className="px-10 py-4 border-2 border-novex-gray text-novex-white hover:border-novex-red font-bold uppercase tracking-widest text-sm rounded transition-colors"
            >
              +34 91 234 56 78
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
