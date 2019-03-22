import Vue from 'vue';
import Vuex from 'vuex';
import APIService from './APIService';

Vue.use(Vuex);

const set = key => (state, val) => {
  state[key] = val
};

export default new Vuex.Store({
  state: {
    movies: [],
    popularMovies: [],
    upcomingMovies: [],
    onTvMovies: [],
    shows: [],
    topRatedTvShows: [],
    onTvShows: [],
    airingToday: [],
    movieIsLoading: false,
    showIsLoading: false,
  },
  mutations: {
    setMovies: set('movies'),
    setPopularMovies: set('popularMovies'),
    setUpcomingMovies: set('upcomingMovies'),
    setOnTvMovies: set('onTvMovies'),
    setTvShows: set('shows'),
    setTopRatedTvShows: set('topRatedTvShows'),
    setOnTvShows: set('onTvShows'),
    setAiringToday: set('airingToday'),
    setMovieLoading: set('movieIsLoading'),
    setShowsLoading: set('showIsLoading'),
  },
  actions: {
    getMovies(context) {
      context.commit("setMovieLoading", true);
      APIService.getMovies().then(res => {
        context.commit("setMovies", res.data.results.slice(0, 12))
        context.commit("setMovieLoading", false);
      })
    },
    getPopularMovies(context) {
      context.commit("setMovieLoading", true);
      APIService.getPopularMovies().then(res => {
        context.commit("setPopularMovies", res.data.results.slice(0, 12))
        context.commit("setMovieLoading", false);
      })
    },
    getUpcomingMovies(context) {
      context.commit("setMovieLoading", true);
      APIService.getUpcomingMovies().then(res => {
        context.commit("setUpcomingMovies", res.data.results.slice(0, 12))
        context.commit("setMovieLoading", false);
      })
    },
    getOnTvMovies(context) {
      context.commit("setMovieLoading", true);
      APIService.getOnTvMovies().then(res => {
        context.commit("setOnTvMovies", res.data.results.slice(0, 12))
        context.commit("setMovieLoading", false);
      })
    },
    // TV SHOWS
    getTvShows(context) {
      context.commit("setShowsLoading", true);
      APIService.getTvShows().then(res => {
        context.commit("setTvShows", res.data.results.slice(0, 12))
        context.commit("setShowsLoading", false);
      })
    },
    getPopularShows(context) {
      APIService.getTopRatedShows().then(res => {
        context.commit("setTopRatedTvShows", res.data.results.slice(0, 12))
      })
    },
    getOnTvShows(context) {
      APIService.getOnTvShows().then(res => {
        context.commit("setOnTvShows", res.data.results.slice(0, 12))
      })
    },
    getAiringTodayShows(context) {
      APIService.getAiringToday().then(res => {
        context.commit("setAiringToday", res.data.results.slice(0, 12))
      })
    }
  },
})