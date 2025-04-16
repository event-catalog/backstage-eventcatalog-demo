import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const eventcatalog2Plugin = createPlugin({
  id: 'eventcatalog-2',
  routes: {
    root: rootRouteRef,
  },
});

export const Eventcatalog2Page = eventcatalog2Plugin.provide(
  createRoutableExtension({
    name: 'Eventcatalog2Page',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
