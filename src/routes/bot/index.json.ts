import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// GET /bot.json
export const get: RequestHandler<Locals> = async (request) => {
	const response = await api(request, `bot/${request.locals.userid}`);

	if (response.status === 404) {
		return { body: [] };
	}

	return response;
};

// POST /bot.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
	const response = await api(request, `bot/${request.locals.userid}`, {
		text: request.body.get('text')
	});

	return response;
};
