import type { Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

export async function api(request: Request<Locals>, resource: string, data?: {}) {
	// API immitation
	return {
		status: 200,
		body: {example: 1}
	};
}
