/** @type {import('next').NextConfig} */

const { REACT_APP_Bse_Url, REACT_APP_BACKEND_SERVER, NODE_ENV } = process.env;
// PWA
const withPWA = require("next-pwa")({
	dest: "public/pwa",
	register: true,
	skipWaiting: true,
	disable: NODE_ENV === "development",
});
const nextConfig = {
	output: "export",
	images: {
		loader: "custom",
		loaderFile: "./app/image.ts",
		experimental: {
			images: {
				unoptimized: true,
			},
		},
	},
};

// experimental:{
// images:{
//   unoptimized:true
// }
// }
module.exports = {
	distDir: "build",
};
module.exports = nextConfig;
// next configs
module.exports = withPWA({
	env: {
		REACT_APP_Bse_Url,
		REACT_APP_BACKEND_SERVER,
	},
	reactStrictMode: true,
	swcMinify: true,
	// extend modules
	output: "standalone",
	sassOptions: {
		includePaths: [require("path").join(__dirname, "styles")],
	},

	// async rewrites() {
	//   return [
	//     {
	//       source: '/api/:path*',
	//       destination: `${REACT_APP_BACKEND_SERVER}/:path*`,
	//     },
	//   ]
	// },
	// async redirects() {
	//   return [
	//     {
	//       source: '//assets/images/:path*',
	//       destination: `${REACT_APP_Bse_Url}/public/assets/images/:path*`,
	//       permanent: true,
	//     },
	//   ]
	// },
	// images: {
	//   remotePatterns: [
	//     {
	//       protocol: 'https',
	//       hostname: '',
	//       port: '',
	//       pathname: '/**',
	//     },
	//   ],
	// },
});
