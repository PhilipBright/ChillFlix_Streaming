import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Key, TMDB_BASE_URL } from "../utils/TMDB";
import axios from 'axios';

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const createArrayFromRawData = (array, moviesArray, genres) => {
  console.log(array);
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie?.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
    }
  });
};
const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`
   );
   createArrayFromRawData(results, genres, moviesArray)
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk('ChillFlix/trending', async ({ type }, thunkApi) => {
  const { ChillFlix: { genres } } = thunkApi.getState();
  return await getRawData(`${TMDB_BASE_URL}trending/${type}/week?api_key=${API_Key}`, genres, true);

  // console.log(data);
 
});

const ChillFlixSlice = createSlice({
  name: "ChillFlix",
  initialState,
  extraReducers: (builder) => {
   
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const getGenres = createAsyncThunk("ChillFlix/genres", async () => {
  const { data:{genres} } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_Key}`
  );
  return genres
});



const store = configureStore({
  reducer: {
    ChillFlix: ChillFlixSlice.reducer,
  },
});

export default store;
