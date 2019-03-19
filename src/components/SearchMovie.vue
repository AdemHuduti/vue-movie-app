<template>
  <div>
    <side-menu></side-menu>
    <h1 class="text-center">Search</h1>
    <form @submit.prevent>
      <div class="d-flex justify-content-center mt-5">
        <input
          type="text"
          v-model="searchName"
          class="form_field"
          placeholder="Search movie.."
          required
        >
        <button @click="searchMovie" class="form__button">Search</button>
      </div>
    </form>

    <div class="row justify-content-center" v-if="searchedMovie.length">
      <div
        v-match-heights="{ el: ['.card']}"
        v-for="(movie, index) in searchedMovie"
        :key="index"
        class="col-sm-6 col-md-3 mt-5"
      >
        <div class="cad ml-4 parent">
          <div class="card">
            <router-link :to="{ path: '/movies/' + movie.id }">
              <img
                :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
                class="card-img-top"
                alt="imgz"
              >
            </router-link>
            <h6 class="mb-3 mt-3">{{ movie.title }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center" v-else>
      <div
        v-match-heights="{ el: ['.card']}"
        v-for="(movie, index) in apiData"
        :key="index"
        class="col-sm-6 col-md-3 mt-5"
      >
        <div class="cad ml-4 parent">
          <h6 class="text-center">Your last search was:
            <span class="yell">{{movie.title}}</span>
          </h6>
          <div class="card">
            <router-link :to="{ path: '/movies/' + movie.id }">
              <img
                :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
                class="card-img-top"
                alt="imgz"
              >
            </router-link>
            <h2 class="mb-3 mt-3">{{ movie.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SideMenu from "../components/SideMenu";

export default {
  components: {
    SideMenu
  },
  data() {
    return {
      searchName: "",
      searchedMovie: [],
      apiData: []
    };
  },
  methods: {
    searchMovie() {
      const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
      const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.searchName
      }&include_adult=false`;

      axios.get(SEARCH).then(res => {
        const findMovie = res.data.results.slice(0, 1);
        this.searchedMovie = findMovie;
        localStorage.setItem("setMovieData", JSON.stringify(findMovie));
      });
    }
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("setMovieData"));
    this.apiData = data;
  }
};
</script>

<style scoped>
.yell {
  color: #ffc600;
}

.card {
  background: transparent;
  border: none;
}

img {
  border: 1px solid #ffc600;
  transition: 0.3s cubic-bezier(0.5, 0, 0.1, 1) transform;
  transition-delay: 0.15s;
}

img:hover {
  transform: scale(1.3);
  border: none;
}

.form_field {
  background: transparent;
  color: #fff;
  border: 0;
  border-bottom: solid 2px #fff000;
  margin-right: 10px;
  letter-spacing: 2px;
  width: 20%;
  padding: 0.4rem;
}

input[type="text"] {
  outline: none;
}

.form__button {
  border: solid 2px #fff000;
  color: #fff;
  background: transparent;
  padding: 0.2rem 0.9rem;
  margin: 0 0.2rem;
  border-radius: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 0.7rem;
  cursor: pointer;
  transition: .1s all ease-in-out;
}

.form__button:hover {
  background-color: #fff000;
  color: #000;
  border: solid 2px #000;
}

.form__button:focus {
  outline: none;
}
</style>
