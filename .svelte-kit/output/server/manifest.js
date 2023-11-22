export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.1ccca55c.js","app":"_app/immutable/entry/app.48b9932a.js","imports":["_app/immutable/entry/start.1ccca55c.js","_app/immutable/chunks/scheduler.c300260d.js","_app/immutable/chunks/singletons.01aff40c.js","_app/immutable/chunks/index.b7cc8db5.js","_app/immutable/entry/app.48b9932a.js","_app/immutable/chunks/scheduler.c300260d.js","_app/immutable/chunks/index.35e2b7d2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login/phone",
				pattern: /^\/login\/phone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login/phone/otp",
				pattern: /^\/login\/phone\/otp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
