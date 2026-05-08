import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-novex-surface border-t border-novex-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={20} className="text-novex-red" />
            <span className="font-display text-2xl tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-novex-red">AUTO</span>TALLER <span className="text-novex-red">NOVEX</span>
            </span>
          </div>
          <p className="text-novex-gray-lt text-sm leading-relaxed">
            Más de 15 años cuidando tu vehículo con profesionalismo, honestidad y tecnología de vanguardia.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-novex-white font-bold uppercase tracking-widest text-sm mb-4">Navegación</h4>
          <ul className="space-y-2">
            {[['/', 'Inicio'], ['/servicios', 'Servicios'], ['/contacto', 'Contacto']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-novex-gray-lt hover:text-novex-red transition-colors text-sm">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-novex-white font-bold uppercase tracking-widest text-sm mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-novex-red mt-0.5 shrink-0" />
              <span className="text-novex-gray-lt text-sm">{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-novex-red shrink-0" />
              <a href={`tel:${contactInfo.phone}`} className="text-novex-gray-lt hover:text-novex-red transition-colors text-sm">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-novex-red shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="text-novex-gray-lt hover:text-novex-red transition-colors text-sm">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-novex-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-novex-gray-lt text-xs">
            © {new Date().getFullYear()} AutoTaller Novex. Todos los derechos reservados.
          </p>
          <p className="text-novex-gray-lt text-xs">Web ficticia — Proyecto de demostración</p>
        </div>
      </div>
    </footer>
  );
}
