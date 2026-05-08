import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `Eres el asistente virtual de AutoTaller Novex, un taller mecánico profesional en Madrid. Tu objetivo es ayudar a los clientes de forma amable y profesional.

Puedes:
- Informar sobre los servicios del taller: cambio de aceite (desde 29€), frenos (desde 89€), neumáticos (desde 15€/ud), diagnóstico motor (desde 49€), aire acondicionado (desde 59€), alineación (desde 39€), carrocería (desde 150€), instalación eléctrica (desde 69€), correa distribución (desde 249€), preparación ITV (desde 79€) y revisiones de temporada (desde 39€).
- Ayudar a agendar una cita indicando que contacten por teléfono (+34 91 234 56 78) o usando el formulario de la web.
- Dar el horario: Lunes a Viernes 08:00-19:00, Sábados 09:00-14:00, Domingos cerrado.
- Dar la dirección: Calle de la Mecánica, 47 — 28045 Madrid.
- Dar consejos básicos de mantenimiento de vehículos.

Mantén un tono profesional, cordial y conciso. Responde siempre en español. Si no sabes algo, indícalo honestamente y ofrece el teléfono de contacto.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response('API key no configurada. Añade GEMINI_API_KEY en .env.local', { status: 500 });
    }

    const { messages } = await request.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Formato de mensajes inválido', { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert to Gemini format — exclude the last user message (sent separately)
    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(lastMessage.content);

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(new TextEncoder().encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('[/api/chat] Error:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
}
