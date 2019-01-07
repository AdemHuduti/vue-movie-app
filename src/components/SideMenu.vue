<template>
  <div>
    <div class="nav-side-menu">
      <div class="brand">
        <router-link to="/">Movie APP</router-link>
      </div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

      <div class="menu-list">
        <ul id="menu-content" class="menu-content collapse out">

          <!-- MOVIES -->
          <li data-toggle="collapse" data-target="#products" class="collapsed ">
            <i class="fas fa-tv mr-2 ml-2"></i><span class="title">Movies</span>
          </li>
          <ul class="sub-menu collapse" id="products">
            <router-link to="/TopRatedMovies">
              <li>
                Top rated
              </li>
            </router-link>
            <router-link to="/PopularMovies">
              <li>
                Popular
              </li>
            </router-link>
            <router-link to="/UpcomingMovies">
              <li>
                Upcoming Movies
              </li>
            </router-link>

            <router-link to="/OnTvMovies">
              <li>
                Now Playing Movies
              </li>
            </router-link>
          </ul>

          <li data-toggle="collapse" data-target="#service" class="collapsed">
            <i class="fas fa-play mr-2 ml-2"></i> <span class="title">TV Shows</span>
          </li>
          <ul class="sub-menu collapse" id="service">
            
            <router-link to="/topRatedTvShows">
              <li>Top rated</li>
            </router-link>

            <router-link to="/tvshows">
              <li>Popular</li>
            </router-link>
            
            <router-link to="/OnTvShows">
              <li>Currently Airing TV Shows</li>
            </router-link>
            
            <router-link to="/AiringToday">
              <li>TV Shows Airing Today</li>
            </router-link>
          </ul>
          <router-link to="/SearchMovie" class="linkList">
            <li>
              <i class="fas fa-search mr-2 ml-2"></i> <span class="title">Search Movie</span>
            </li>
          </router-link>
          <router-link to="/SearchTvShows" class="linkList">
            <li>
              <i class="fas fa-search mr-2 ml-2"></i> <span class="title">Search Tv Shows</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.linkList {
  color: #fff;
  text-decoration: none;
}


.title {
  font-size: 1rem;
}
.nav-side-menu {
  overflow: auto;
  font-size: 12px;
  font-weight: 200;
  background-color: #000E0F;
  position: fixed;
  top: 0;
  left: 0;
  width: 165px;
  margin-right: 20px;
  height: 100%;
  color: #fff;
}
.brand {
  background-color: #FFC600;
  padding: 10px;
  text-transform: uppercase;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 18px;
}

.brand a {
  text-decoration: none;
  color: #fff;
}

.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
}

.sub-menu a {
  text-decoration: none;
  color: #fff;
}

.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #222;
  padding: 8px;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #FFC600;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #44475A;
}

.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #586351;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  text-decoration: none;
  color: #ffffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #FFC600;
  background-color: #222;
  -webkit-transition: all .1s ease;
  -moz-transition: all .1s ease;
  -o-transition: all .1s ease;
  -ms-transition: all .1s ease;
  transition: all .1s ease;
}
@media (max-width: 1420px) {
  .nav-side-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .brand {
    padding: 0;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #222;
    color: #FFC600;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 1420px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
</style>
