export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_CdcmUAis.mjs').then(n => n.g);

export { page };
