<template>
  <div>
    <side-menu></side-menu>
    <div class="page-loader" v-if="setShowsLoading">
      <div class="loader">Loading...</div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <h3 class="text-center mt-5">Currently Airing TV Shows</h3>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-match-heights="{ el: ['.card']}"
        v-for="(show, index) in onTvShows"
        :key="index"
        class="col-sm-6 col-md-3 mt-5"
      >
        <div class="card ml-4">
          <div class="c">
            <router-link :to="{ path: '/shows/' + show.id }">
              <img
                :src="`https://image.tmdb.org/t/p/w300${show.poster_path}`"
                class="card-img-top"
                alt="imgz"
              >
            </router-link>
            <h5 class="mb-3 mt-3">{{ show.name }}</h5>
          </div>
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
  created() {
    this.$store.dispatch("getOnTvShows");
  },
  computed: {
    ...mapState(["onTvShows", "setShowsLoading"])
  }
};
</script>

<style scoped>
.movie {
  border: 1px solid rgba(226, 226, 226, 0.1);
  border-radius: 4px;
  padding: 15px;
}

.shows-title {
  display: block;
  height: 100%;
}
.card {
  background: none;
}
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
