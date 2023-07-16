// Next.js API route support: https://nextjs.org/docs/basic-features/typescript#api-routes
import cookie from "cookie";

export default function handler(req, res) {
	res.setHeader(
		"Set-Cookie",
		cookie.serialize("app_token", req.body?.token, {
			httpOnly: true,
			maxAge: 60 * 60 * 24,
			sameSite: "lax",
			path: "/",
			// domain : '.'
			// secure : process.env.NODE_ENV === 'production',
		}),
	);
	// response
	res.status(200).json({ status: "success" });
}
