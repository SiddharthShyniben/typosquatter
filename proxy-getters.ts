import {closest} from './find-similar.ts';

export const proxyGet = (obj: any, prop: string): any => {
	if (!(prop in obj)) prop = closest(prop, Object.getOwnPropertyNames(obj));

	return typeof obj[prop] === 'object' ?
		new Proxy(obj[prop], {get: proxyGet}) :
		new Proxy({value: obj[prop]}, {get: primProxyGet});
};

export const primProxyGet = (obj: {value: any}, prop: string): any => {
	const prim = Reflect.get(obj, 'value');
	let value = prim[prop];

	if (!value) {
		prop = closest(prop, Object.getOwnPropertyNames(Object.getPrototypeOf('')));
		value = prim[prop];
	}

	if (typeof value === 'function') return value.bind(prim);

	return typeof value === 'object' ?
		new Proxy(value, {get: proxyGet}) :
		new Proxy({value}, {get: primProxyGet});
}
