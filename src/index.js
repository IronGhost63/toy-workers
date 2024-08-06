/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import NightTime from "./components/NightTime";

const validRoutes = {
	NightTime,
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL( request.url );
		const route = url.pathname;
		const method = request.method.toLowerCase();

		const routeFragment = route.split('/').shift();

		if ( !validRoutes.hasOwnProperty( routeFragment[0] ) ) {
			return new Response({
				body: 'Unknown route',
				status: 400,
			});
		}

		if ( !validRoutes[ routeFragment[0] ].hasOwnProperty( method )) {
			return new Response({
				body: 'Unsupported method',
				status: 400,
			});
		}

		return validRoutes[ routeFragment[0] ][ method ]( request );
	},
};
