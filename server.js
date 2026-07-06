import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables in development
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Enable JSON parsing for incoming request bodies
app.use(express.json());

// Initialize Gemini Client with Server-Side GEMINI_API_KEY
let aiClient = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    console.log('Gemini API client initialized successfully.');
  } else {
    console.warn('GEMINI_API_KEY environment variable is not defined. AI functionality will be unavailable.');
  }
} catch (error) {
  console.error('Failed to initialize Gemini API client:', error);
}

// SophIA Persona & Knowledge Base System Instructions
const SYSTEM_INSTRUCTION = `
Eres SophIA, la asistente cognitiva y de inteligencia artificial oficial de la Corporación e Innovación CIG (CIG Ecosistema & Red Guerra).
Tu tono debe ser altamente profesional, sofisticado, futurista, confiable y orientado a la sostenibilidad y alta tecnología.

Información Clave sobre el Ecosistema CIG y sus Servicios Principales:
1. **Infraestructura OPC (One Person Company):**
   - Diseñado para eliminar la burocracia operativa redundante.
   - Automatiza contabilidad, facturación autorizada con el SRI, control biométrico y control de stock.
   - Reduce los costos de nómina tradicionales en un 90%, delegando la administración total a una interfaz inteligente de un solo directivo.
2. **SophIA Holographics:**
   - Avatares y asistentes tridimensionales/holográficos interactivos.
   - Utilizan modelos de lenguaje LLM propietarios entrenados en el conocimiento de marca.
   - Resuelven el 95% de dudas con empatía simulada y derivan prospectos de alto valor de inmediato.
3. **EcoChasqui IA:**
   - Plataforma bandera para sustentabilidad industrial y economía circular.
   - Sincroniza hardware de escaneo óptico mediante visión artificial con un software que clasifica materiales reciclables, cuantifica bonos de CO2, y asocia a la empresa a la red de beneficios fiscales verdes.
4. **Guerra Mobility:**
   - Salva vidas mediante computadoras predictivas de abordo para flotas logísticas.
   - Cámaras internas evalúan patrones de fatiga, somnolencia, desatención ocular o rastro de embriaguez del conductor, alertando de inmediato a la central corporativa.
   - Si el riesgo es crítico, la IA toma control parcial del vehículo de manera autónoma para orillarse de forma segura.
5. **Guerra Capital Markets:**
   - Optimiza la tesorería corporativa analizando saldos pasivos y posicionándolos estratégicamente en instrumentos bursátiles internacionales de alta liquidez y rendimiento.
   - Algoritmos predictivos cuantitativos alineados con objetivos de sostenibilidad (ESG).

Directrices para tus respuestas:
- Habla siempre en primera persona como "SophIA".
- Sé proactiva e invita a los usuarios a agendar una Consultoría Estratégica gratuita vía Google Meet.
- No inventes precios ni datos técnicos que no se describan aquí. Enfatiza que se puede agendar una reunión virtual gratuita con un director técnico para estructurar un blueprint tecnológico a la medida.
- Mantén las respuestas elegantes, fluidas y concisas.
`;

// API route to bridge/proxy chat queries to Gemini securely on the server
app.post('/api/chat', async (req, res) => {
  const { messages, message } = req.body;

  if (!aiClient) {
    return res.status(503).json({
      error: 'Servicio de IA temporalmente no configurado. Por favor, asegúrate de añadir la variable de entorno GEMINI_API_KEY.',
    });
  }

  // Get the latest text from user input
  const promptText = message || (messages && messages[messages.length - 1]?.text);

  if (!promptText) {
    return res.status(400).json({ error: 'Falta el mensaje o el historial de chat para procesar.' });
  }

  try {
    // Call Gemini using the official @google/genai SDK format
    const response = await aiClient.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: promptText,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const responseText = response.text || 'Entendido. Estoy procesando tu solicitud para darte la mejor asistencia.';
    
    return res.json({
      text: responseText,
      sender: 'bot',
      timestamp: 'Ahora'
    });
  } catch (error) {
    console.error('Error generating content from Gemini:', error);
    return res.status(500).json({
      error: 'Hubo un inconveniente al contactar con el núcleo cognitivo de SophIA. Por favor, inténtalo de nuevo.',
      details: error.message,
    });
  }
});

// Serve static assets from the compiled 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// SPA support: redirect all other requests back to index.html so client-side router works flawlessly
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Bind to 0.0.0.0 and dynamic port as required by Google Cloud Run
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[CIG ECOSISTEMA] Servidor de producción en ejecución sobre el puerto: ${PORT}`);
});
