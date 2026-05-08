'use client';

import { useState, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

const INITIAL: Message = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente virtual de AutoTaller Novex. ¿En qué puedo ayudarte? Puedo informarte sobre nuestros servicios, precios o ayudarte a agendar una cita. 🔧',
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // Placeholder assistant message for streaming
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.body) throw new Error('No stream');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: fullText };
          return updated;
        });
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'assistant', content: 'Lo siento, ocurrió un error. Por favor llámanos al +34 91 234 56 78.' };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-novex-red hover:bg-novex-red-dark text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-novex-surface border border-novex-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-novex-red px-4 py-3 flex items-center gap-3">
            <Bot size={20} className="text-white" />
            <div>
              <p className="text-white font-bold text-sm">Asistente Novex</p>
              <p className="text-white/70 text-xs">Responde al instante</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed"
                  style={{
                    background: msg.role === 'user' ? '#dc2626' : '#1a1a1a',
                    color: '#f9fafb',
                    borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  }}
                >
                  {msg.content || <span className="opacity-50">Escribiendo…</span>}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-novex-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Escribe tu pregunta…"
              disabled={loading}
              className="flex-1 bg-novex-surface2 text-novex-white text-sm px-3 py-2 rounded-lg border border-novex-border outline-none placeholder:text-novex-gray-lt focus:border-novex-red transition-colors"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="w-9 h-9 bg-novex-red hover:bg-novex-red-dark disabled:opacity-40 text-white rounded-lg flex items-center justify-center transition-colors"
              aria-label="Enviar"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
