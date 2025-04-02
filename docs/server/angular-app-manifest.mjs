
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Home"
  },
  {
    "renderMode": 2,
    "route": "/Invoice"
  },
  {
    "renderMode": 2,
    "route": "/Routing"
  },
  {
    "renderMode": 2,
    "route": "/Demo"
  },
  {
    "renderMode": 2,
    "route": "/Contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 765, hash: '4616df7c8e0ffc2eaab1c15c508f1e2a5aaba450418a711ebcec0fba06c28467', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '1a77358d2665e7f4c397efa3eb2dc3480c3b6a99cd16fca772af772147ec8b76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 3419, hash: '2702ae8bb9132a9a71b61a35472f76e0090d727acc6fe50e01f717bc548d774f', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3419, hash: '2702ae8bb9132a9a71b61a35472f76e0090d727acc6fe50e01f717bc548d774f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Routing/index.html': {size: 3217, hash: '451d6e5c0d740194d063de02c1bc7dfa8ae882a08c98ad4a03036ddc1658b426', text: () => import('./assets-chunks/Routing_index_html.mjs').then(m => m.default)},
    'Demo/index.html': {size: 3209, hash: '3df3fecb3d040efb61761dae9866837ebf6364dfcc28c71292b637964a25094f', text: () => import('./assets-chunks/Demo_index_html.mjs').then(m => m.default)},
    'Invoice/index.html': {size: 3218, hash: '7394617feb266fabac40596caa418251759d55df8c295d47670d9715ea810bdb', text: () => import('./assets-chunks/Invoice_index_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 10732, hash: 'd593744190fdcb2aadc7a2bb11158ef73772b64170770e02aa1a7af9814e1ee7', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'styles-KWQ5UFZY.css': {size: 30837, hash: 'vdCoFJMbz8U', text: () => import('./assets-chunks/styles-KWQ5UFZY_css.mjs').then(m => m.default)}
  },
};
