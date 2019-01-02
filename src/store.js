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
    airingToday: []
  },
  mutations: {
    setMovies: set('movies'),
    setPopularMovies: set('popularMovies'),
    setUpcomingMovies: set('upcomingMovies'),
    setOnTvMovies: set('onTvMovies'),
    setTvShows: set('shows'),
    setTopRatedTvShows: set('topRatedTvShows'),
    setOnTvShows: set('onTvShows'),
    setAiringToday: set('airingToday')
  },
  actions: {
    getMovies(context) {
      APIService.getMovies().then(res => {
        context.commit("setMovies", res.data.results.slice(0, 12))
      })
    },
    getPopularMovies(context) {
      APIService.getPopularMovies().then(res => {
        context.commit("setPopularMovies", res.data.results.slice(0, 12))
      })
    },
    getUpcomingMovies(context) {
      APIService.getUpcomingMovies().then(res => {
        context.commit("setUpcomingMovies", res.data.results.slice(0, 12))
      })
    },
    getOnTvMovies(context) {
      APIService.getOnTvMovies().then(res => {
        context.commit("setOnTvMovies", res.data.results.slice(0, 12))
      })
    },
    getTvShows(context) {
      APIService.getTvShows().then(res => {
        context.commit("setTvShows", res.data.results.slice(0, 12))
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