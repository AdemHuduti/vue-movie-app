<template>
  <div>
    <side-menu></side-menu>
    <div class="page-loader" v-if="movieIsLoading">
      <div class="loader">Loading...</div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <h3 class="text-center mt-5">Popular movies</h3>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-match-heights="{ el: ['.c']}"
        v-for="(movie, index) in popularMovies"
        :key="index"
        class="col-sm-6 col-md-3 mt-5"
      >
        <div class="cad ml-4 parent">
          <div class="c">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideMenu from "../components/SideMenu";

export default {
  components: {
    SideMenu
  },
  computed: {
    ...mapState(["popularMovies", "movieIsLoading"])
  },
  created() {
    this.$store.dispatch("getPopularMovies");
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

</style>
