<template>
  <div>
    <div class="center">
      <div class="row">
        <div class="col-md-6 movies">
          <router-link :to="{ path: '/TopRatedMovies' }">
            <i class="fas fa-tv fa-3x"></i>
            <p class="lead mt-4">Movies</p>
          </router-link>
        </div>

        <div class="col-md-6 shows">
          <router-link :to="{ path: '/tvshows' }">
            <i class="fas fa-play fa-3x"></i>
            <p class="lead mt-4">Series</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style scoped>
a:link, a:visited {
  color: #fff;
}
a:hover {
  text-decoration: none;
}
.movies,
.shows {
  cursor: pointer;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
