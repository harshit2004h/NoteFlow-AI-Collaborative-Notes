import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { GoogleGenAI } from '@google/genai';

interface Bindings {
	GOOGLE_API_KEY: string;
	AI: Ai;
}

const app = new Hono<{ Bindings: Bindings }>();

app.use(
	'/*',
	cors({
		origin: '*', // Allow requests from your Next.js app
		allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'], // Add Content-Type to the allowed headers to fix CORS
		allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	})
);

app.post('/chatToDocument', async (c) => {
	const ai = new GoogleGenAI({ apiKey: c.env.GOOGLE_API_KEY });
	const { documentData, question } = await c.req.json();

	// Create the prompt combining system instruction and user question
	const prompt = `You are an assistant helping the user to chat to a document. I am providing a JSON file of the markdown for the document. Using this, answer the user's question in the clearest way possible. The document is about ${documentData}

My Question is: ${question}`;

	try {
		const response = await ai.models.generateContent({
			model: 'gemini-2.5-flash',
			contents: prompt,
		});

		return c.json({ message: response.text });
	} catch (error) {
		console.error('Error generating content:', error);
		return c.json({ error: 'Failed to generate response' }, 500);
	}
});

app.post('/translateDocument', async (c) => {
	const { documentData, targetLang } = await c.req.json();

	// generate a summary of the document
	const summaryResponse = await c.env.AI.run('@cf/facebook/bart-large-cnn', {
		input_text: documentData,
		max_length: 1000,
	});

	// translate the summary to another language
	const response = await c.env.AI.run('@cf/meta/m2m100-1.2b', {
		text: summaryResponse.summary,
		source_lang: 'english', // defaults to english
		target_lang: targetLang,
	});

	return new Response(JSON.stringify(response));
});

export default app;
