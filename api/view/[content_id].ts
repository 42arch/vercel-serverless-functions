import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
	const { query: { content_id } } = request
	response.send(`test ${content_id}`)
}
