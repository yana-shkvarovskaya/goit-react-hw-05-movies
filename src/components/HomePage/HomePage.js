import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from '../Services/MovieDB';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const response = await FetchTrendingMovies();
        setList(response);
      } catch (error) {
        toast.error('Все пропало!', { position: 'top-center' });
      }
    }
    fetchPictures();
  }, []);

  return (
    <>
      <main>
        <h1 className="title">Trending today</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link className="text" to={`/movies/${item.id}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={2000} />
    </>
  );
}
