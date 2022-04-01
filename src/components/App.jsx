import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from './Navigation/Navigation'
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import Container from './Container/Container';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage/MovieDetailsPage.js'));


export const App = () => {
  return (
    <>
      <Container>
      <Suspense fallback={''}>
      <Navigation />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />

        <Route path="movies/:itemId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
        </Suspense>
        </Container>
    </>
  );
};
