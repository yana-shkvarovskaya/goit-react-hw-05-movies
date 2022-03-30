import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import OneMovieView from 'views/OneMovieView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} exact="true" />
        <Route path="/movies" element={<MoviesView />} exact="true"/>
        <Route path="/movies/:movieId/*" element={<OneMovieView />} />
        
        
        

        {/* <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>  */}
      </Routes>
    </Container>
  );
}