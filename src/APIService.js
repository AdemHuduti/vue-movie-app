import axios from 'axios';

// Api key
const API_KEY = 'b6ae17c5481c2abdc5c03bc07d7186e7';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
const TV_SHOW_URL = 'https://api.themoviedb.org/3/tv/';

// Top rated movies
const URL = `${MOVIE_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`

// Popular movies
const POPULAR_MOVIES = `${MOVIE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`

// Upcoming movies
const UPCOMING_MOVIES = `${MOVIE_URL}upcoming?api_key=${API_KEY}&language=en-US&page=1`

// Upcoming movies
const ON_TV_MOVIES = `${MOVIE_URL}now_playing?api_key=${API_KEY}&language=en-US&page=1`


// TV SHOWS
// Popular tv-shows
const URL_TV = `${TV_SHOW_URL}popular?api_key=${API_KEY}&language=en-US&page=1`

// Top top rated tv-shows
const TOP_RATED_TV = `${TV_SHOW_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`

// On TV
const ON_TV = `${TV_SHOW_URL}on_the_air?api_key=${API_KEY}&language=en-US&page=1`

// Airing today
const AIRING_TODAY = `${TV_SHOW_URL}airing_today?api_key=${API_KEY}&language=en-US&page=1`

export default {
  getMovies() {
    return axios({
      method: "get",
      url: URL
    })
  },
  getPopularMovies() {
    return axios({
      method: "get",
      url: POPULAR_MOVIES
    })
  },
  getUpcomingMovies() {
    return axios({
      method: "get",
      url: UPCOMING_MOVIES
    })
  },
  getOnTvMovies() {
    return axios({
      method: "get",
      url: ON_TV_MOVIES
    })
  },

  getTvShows() {
    return axios({
      method: "get",
      url: URL_TV
    });
  },
  getTopRatedShows() {
    return axios({
      method: "get",
      url: TOP_RATED_TV
    })
  },
  getOnTvShows(){
    return axios({
      method: "get",
      url: ON_TV
    })
  },
  getAiringToday(){
    return axios({
      method: "get",
      url: AIRING_TODAY
    })
  }
}