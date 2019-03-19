<template>
  <div>
    <side-menu></side-menu>
    <div class="page-loader" v-if="movieIsLoading">
      <div class="loader">Loading...</div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <h3 class="text-center mt-5">Top rated movies</h3>
        </div>
      </div>
    </div>
      <div class="row justify-content-center">
        <div
          v-match-heights="{ el: ['.c']}"
          v-for="(movie, index) in movies"
          :key="index"
          class="col-sm-6 col-md-3 mt-5">
          <div class="ml-4">
            <router-link :to="{ path: '/movies/' + movie.id }">
              <img
                :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
                class="card-img-top"
                alt="imgz"
              >
            </router-link>
            <h5 class="mb-3 mt-3">{{ movie.title }}</h5>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
import { mapState } from "vuex";

export default {
  components: {
    SideMenu
  },
  computed: {
    ...mapState(["movies", "movieIsLoading"])
  },
  created() {
    this.$store.dispatch("getMovies");
  }
};
</script>

<style scoped>
img {
  border: 1px solid #FFC600;
  transition: .3s cubic-bezier(.5, 0, .1, 1) transform;
	transition-delay: .15s;
}

img:hover {
  transform: scale(1.2);
  border: none;
}
.movie {
  border: 1px solid rgba(226, 226, 226, 0.1);
  border-radius: 4px;
  padding: 15px;
}
.card {
  background-color: #222;
}
.movie-title {
  display: block;
  height: 100%;
}
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: -5%;
  left: 35%;
  background-color: #222;
  padding: 2px 15px;
  border-radius: 50px;
}

.page-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
}

.loader {
  position: relative;
  top: 55%;
  margin-top: 0;
}
</style>
