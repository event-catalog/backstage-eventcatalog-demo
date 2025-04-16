import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { eventcatalog2Plugin, Eventcatalog2Page } from '../src/plugin';

createDevApp()
  .registerPlugin(eventcatalog2Plugin)
  .addPage({
    element: <Eventcatalog2Page />,
    title: 'Root Page',
    path: '/eventcatalog-2',
  })
  .render();
