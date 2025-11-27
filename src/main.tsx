import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from 'src/App';
import { fetchCharacter, fetchCharacters } from 'src/loaders/CharacterLoader';
import type { CharacterRouteParams } from 'src/types/types';
import { ConfigProvider } from 'src/context/ConfigProvider';

const Characters = lazy(() => import('src/pages/Characters'));
const CharacterDetails = lazy(() => import('src/pages/CharacterDetails'));

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        index: true,
        loader: fetchCharacters,
        element: <Characters />,
      },
      {
        path: 'character/:id',
        loader: async ({ params }) => {
          return fetchCharacter({ params } as CharacterRouteParams);
        },
        element: <CharacterDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
