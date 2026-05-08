import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { ContactForm } from '@/components/shared/contact-form';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con AutoTaller Novex. Formulario, teléfono, email y localización en Madrid.',
};

export default function ContactoPage() {
  return (
    <main className="pt-24 pb-20 bg-novex-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-novex-red font-bold uppercase tracking-[0.3em] text-sm mb-3">■ Estamos aquí</p>
          <h1 className="text-novex-white red-line" style={{ fontFamily: 'var(--font-display)' }}>
            CONTACTO
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-novex-surface border border-novex-border rounded-2xl p-8">
            <h2 className="text-novex-white font-bold text-lg mb-6 uppercase tracking-widest">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Info card */}
            <div className="bg-novex-surface border border-novex-border rounded-2xl p-8 space-y-6">
              <h2 className="text-novex-white font-bold text-lg uppercase tracking-widest">Información</h2>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-novex-white font-semibold text-sm mb-0.5">Dirección</p>
                  <p className="text-novex-gray-lt text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-novex-white font-semibold text-sm mb-0.5">Teléfono</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-novex-gray-lt hover:text-novex-red text-sm transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-novex-white font-semibold text-sm mb-0.5">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-novex-gray-lt hover:text-novex-red text-sm transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-novex-red/10 text-novex-red rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-novex-white font-semibold text-sm mb-2">Horario</p>
                  <ul className="space-y-1">
                    {contactInfo.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6 text-sm">
                        <span className="text-novex-gray-lt">{h.days}</span>
                        <span className="text-novex-white font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-novex-border h-64">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7100%2C40.3980%2C-3.6700%2C40.4180&layer=mapnik&marker=40.4080%2C-3.6900"
                width="100%"
                height="100%"
                title="Ubicación AutoTaller Novex"
                loading="lazy"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
