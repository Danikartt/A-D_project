import type { Metadata } from 'next';
import { services } from '@/lib/data';
import { Droplets, Circle, Gauge, ScanLine, Wind, AlignCenter, PaintBucket, Zap, Settings, ClipboardCheck, Sun, Snowflake } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Catálogo completo de servicios de AutoTaller Novex: frenos, neumáticos, motor, carrocería y más.',
};

const iconMap: Record<string, React.ElementType> = {
  Droplets, Circle, Gauge, ScanLine, Wind, AlignCenter, PaintBucket, Zap, Settings, ClipboardCheck, Sun, Snowflake,
};

const categories = [
  { key: 'mantenimiento', label: 'Mantenimiento' },
  { key: 'frenos', label: 'Frenos' },
  { key: 'neumaticos', label: 'Neumáticos' },
  { key: 'motor', label: 'Motor' },
  { key: 'electrica', label: 'Eléctrica' },
  { key: 'carroceria', label: 'Carrocería' },
];

export default function ServiciosPage() {
  return (
    <main className="pt-24 pb-20 bg-novex-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-novex-red font-bold uppercase tracking-[0.3em] text-sm mb-3">■ Lo que hacemos</p>
          <h1 className="text-novex-white red-line" style={{ fontFamily: 'var(--font-display)' }}>
            NUESTROS SERVICIOS
          </h1>
          <p className="text-novex-gray-lt mt-6 text-lg max-w-2xl">
            Más de 12 especialidades para mantener tu vehículo en perfectas condiciones todo el año.
          </p>
        </div>

        {/* Category groups */}
        {categories.map((cat) => {
          const catServices = services.filter((s) => s.category === cat.key);
          if (!catServices.length) return null;
          return (
            <div key={cat.key} className="mb-16">
              <h2 className="text-novex-white text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-novex-red inline-block" />
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((s) => {
                  const Icon = iconMap[s.icon] ?? Droplets;
                  return (
                    <div
                      key={s.id}
                      className="group bg-novex-surface border border-novex-border rounded-xl p-6 flex gap-4 hover:border-novex-red transition-all duration-300"
                    >
                      <div className="w-11 h-11 shrink-0 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center group-hover:bg-novex-red group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="text-novex-white font-bold text-base mb-1">{s.name}</h3>
                        <p className="text-novex-gray-lt text-sm leading-relaxed flex-1">{s.description}</p>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-novex-border">
                          <span className="text-novex-red font-bold text-sm">{s.price}</span>
                          <span className="text-novex-gray-lt text-xs bg-novex-surface2 px-2 py-1 rounded">{s.duration}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="mt-8 text-center py-14 border border-novex-border rounded-2xl bg-novex-surface">
          <h2 className="text-novex-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>
            ¿NO ENCUENTRAS LO QUE BUSCAS?
          </h2>
          <p className="text-novex-gray-lt mb-8">Contáctanos y te asesoraremos sin compromiso.</p>
          <Link href="/contacto" className="px-10 py-4 bg-novex-red hover:bg-novex-red-dark text-white font-bold uppercase tracking-widest text-sm rounded transition-colors">
            Contactar ahora
          </Link>
        </div>
      </div>
    </main>
  );
}
