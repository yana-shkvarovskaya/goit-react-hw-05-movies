import axios from 'axios';

export async function FetchTrendingMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=9cd0dda93c2009fed108da3042f91609'
  );
  return response.data.results;
}

export async function SearchMovie(query) {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9cd0dda93c2009fed108da3042f91609&language=en-US&page=1`
  );
  return search.data.results;
}

export const MovieDetails = async id => {
  const detail = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9cd0dda93c2009fed108da3042f91609&language=en-US`
  );
  return detail.data;
};

export async function MovieCredits(id) {
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9cd0dda93c2009fed108da3042f91609&language=en-US`
  );
  return credits.data.cast;
}

export async function MovieReview(id) {
  const review = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9cd0dda93c2009fed108da3042f91609`
  );
  return review.data.results;
}
