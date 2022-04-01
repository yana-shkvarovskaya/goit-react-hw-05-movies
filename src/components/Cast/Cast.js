import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieCredits } from 'components/Services/MovieDB';
import { ActorImg, ActorContainer } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);

  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -5);

  useEffect(() => {
    async function FetchActors() {
      try {
        const findActors = await MovieCredits(id);
        setActors(findActors);
      } catch (error) {
        console.log(error);
      }
    }
    FetchActors();
  }, [id]);

  return (
    <>
      {actors !== [] && (
        <ActorContainer>
          {actors.map(({ id, profile_path, original_name, character }) => (
            <li key={id} className="gallery__item">
              {profile_path ? (
                <ActorImg
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="No image"
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  src="http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png"
                  alt="No image"
                  height={300}
                  width={200}
                />
              )}
              <div>
                <p className="gallery__item--name">Name: {original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ActorContainer>
      )}
    </>
  );
};
