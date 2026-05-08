'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  vehiculo: string;
  servicio: string;
  mensaje: string;
};

const INITIAL: FormData = { nombre: '', email: '', telefono: '', vehiculo: '', servicio: '', mensaje: '' };

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simula un envío (sin backend real)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  const inputClass = "w-full bg-novex-surface border border-novex-border rounded-lg px-4 py-3 text-novex-white text-sm placeholder:text-novex-gray-lt focus:outline-none focus:border-novex-red transition-colors";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-novex-white text-xl font-bold">¡Mensaje enviado!</h3>
        <p className="text-novex-gray-lt text-sm max-w-xs">
          Nos pondremos en contacto contigo en menos de 24 horas. ¡Gracias por confiar en Novex!
        </p>
        <button onClick={() => { setForm(INITIAL); setSent(false); }} className="mt-2 text-novex-red text-sm underline underline-offset-2">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre *" required className={inputClass} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required className={inputClass} />
        <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className={inputClass} />
        <input name="vehiculo" value={form.vehiculo} onChange={handleChange} placeholder="Vehículo (marca / modelo)" className={inputClass} />
      </div>
      <select name="servicio" value={form.servicio} onChange={handleChange} className={inputClass}>
        <option value="">Selecciona un servicio…</option>
        <option>Cambio de aceite</option>
        <option>Frenos y pastillas</option>
        <option>Cambio de neumáticos</option>
        <option>Diagnóstico motor</option>
        <option>Aire acondicionado</option>
        <option>Reparación carrocería</option>
        <option>Otro</option>
      </select>
      <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos qué necesitas… *" required rows={4} className={inputClass + ' resize-none'} />
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-novex-red hover:bg-novex-red-dark disabled:opacity-60 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-sm transition-colors"
      >
        <Send size={16} />
        {loading ? 'Enviando…' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
