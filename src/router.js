import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
import SearchMovie from './components/SearchMovie';
import SearchTvShows from './components/SearchTvShows';
import TopRatedMovies from './movies/TopRatedMovies';
import PopularMovies from './movies/PopularMovies';
import UpcomingMovies from './movies/UpcomingMovies';
import OnTvMovies from './movies/OnTvMovies';
import PopularTvShows from './tvshows/PopularTvShows';
import TopRatedTvShows from './tvshows/TopRatedTvShows';
import OnTvShows from './tvshows/OnTvShows';
import AiringToday from './tvshows/AiringToday';
import SingleMovie from './components/SingleMovie';
import SingleShow from './components/SingleShow';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Main
    },
    {
      path: "/TopRatedMovies",
      name: "TopRatedMovies",
      component: TopRatedMovies
    },
    {
      path: "/PopularMovies",
      name: "PopularMovies",
      component: PopularMovies
    },
    {
      path: "/UpcomingMovies",
      name: "UpcomingMovies",
      component: UpcomingMovies
    },
    {
      path: "/OnTvMovies",
      name: "OnTvMovies",
      component: OnTvMovies
    },
    {
      path: "/tvshows",
      name: "tvshows",
      component: PopularTvShows
    },
    {
      path: "/topRatedTvShows",
      name: "topratedtvshows",
      component: TopRatedTvShows
    },
    {
      path: "/OnTvShows",
      name: "OnTvShows",
      component: OnTvShows
    },
    {
      path: "/AiringToday",
      name: "AiringToday",
      component: AiringToday
    },
    {
      path: "/SearchMovie",
      name: "SearchMovie",
      component: SearchMovie
    },
    {
      path: "/SearchTvShows",
      name: "SearchTvShows",
      component: SearchTvShows
    },
    {
      path: "/movies/:id",
      name: "SingleMovie",
      component: SingleMovie,
      props: true
    },
    {
      path: "/shows/:id",
      name: "SingleShow",
      component: SingleShow,
      props: true
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});