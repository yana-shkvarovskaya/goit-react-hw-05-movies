import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
// import HomeView from 'views/HomeView';
// import MoviesView from 'views/MoviesView';
// import OneMovieView from 'views/OneMovieView';

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView'));
const OneMovieView = lazy(() => import('views/OneMovieView'));


export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<HomeView />} exact="true" />
        <Route path="/movies" element={<MoviesView />} exact="true"/>
        <Route path="/movies/:movieId/*" element={<OneMovieView />} />
      </Routes>
      </Suspense>
    </Container>
  );
}