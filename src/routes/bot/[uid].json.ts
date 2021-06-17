import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// PATCH /bot/:uid.json
export const patch: RequestHandler<Locals, FormData> = async (request) => {
	return api(request, `bot/${request.locals.userid}/${request.params.uid}`, {
		text: request.body.get('text'),
		done: request.body.has('done') ? !!request.body.get('done') : undefined
	});
};

// DELETE /bot/:uid.json
export const del: RequestHandler<Locals> = async (request) => {
	return api(request, `bot/${request.locals.userid}/${request.params.uid}`);
};
