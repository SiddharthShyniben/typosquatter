import {proxyGet, primProxyGet} from './proxy-getters.ts';

export default (obj: any) => new Proxy(obj, {get: typeof obj == 'object' ? proxyGet : primProxyGet});
