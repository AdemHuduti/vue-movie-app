<template>
  <div>
    <router-link to="/TopRatedMovies">
      <i class="fas fa-backward fa-3x"></i>
    </router-link>
    <div class="row mt-5">
      <div class="col-md-4 text-center">
        <div class="bor-yellow" >
          <h1>{{info.title}}</h1>
          <p>{{info.overview}}</p>
        </div>
      </div>

      <div class="col-md-4">
        <div>
          <div class="text-center">
            <img :src="`https://image.tmdb.org/t/p/w300/${info.poster_path}`" alt class="img-fluid">
          </div>
        </div>
      </div>

      <div class="col-md-4 text-center">
        <h2 class="mb-5">Genres:</h2>
        <span>
          <span class="genres" v-for="(p, index) in info.genres" :key="index">{{p.name}}</span>
          <p class="vote">{{info.vote_average}}</p>
        </span>
      </div>
    </div>

    <h1 v-if="recommendations.length" class="mt-5 mb-3">Recommended movies</h1>
    <div class="row" v-if="recommendations.length">
      <div 
        v-match-heights="{ el: ['.card']}" 
        v-for="(rec, index) in recommendations" :key="index" 
        class="col-sm-6 col-md-4 mt-5 mb-4"
      >
        <div class="card">
          <img
            :src="`https://image.tmdb.org/t/p/w300${rec.backdrop_path}`"
            class="card-img-top img-fluid"
            alt="imgz"
          >
          <div class="card-body">
            <div class="mt-3">
              <h4 class="rec_title">{{rec.title}}</h4> 
              <p v-html="rec.overview.substring(0, 100) + '...'"></p>  
            </div>
          </div>
          <div class="card-footer">
            <span class="small float-left">Release Date: {{ moment(rec.release_date).format('DD.MM.YYYY') }}</span>
            <span class="small float-right text-warning">{{rec.vote_average}}</span>
          </div>
        </div>
      </div>
    </div>

    <h1 v-if="similar.length" class="mt-5">Similar movies</h1>
    <div class="row" v-if="similar.length">
      <div 
        v-match-heights="{ el: ['.sim_title']}" 
        v-for="(sim, index) in similar" :key="index" 
        class="col-sm-6 col-md-4 mt-5 mb-4"
      >

        <div class="card">
          <img
            :src="`https://image.tmdb.org/t/p/w300${sim.backdrop_path}`"
            class="card-img-top img-fluid"
            alt="imgz"
          >
          <div class="card-body">
            <div class="mt-3">
              <h4 class="sim_title">{{sim.title}}</h4>  
              <p v-html="sim.overview.substring(0, 100) + '...'"></p>    
            </div>
          </div>
          <div class="card-footer">
            <span class="small float-left">Release Date: {{ moment(sim.release_date).format('DD.MM.YYYY') }}</span>
            <span class="small float-right text-warning">{{sim.vote_average}}</span>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: String
  },
  data() {
    return {
      info: [],
      similar: [],
      recommendations: []
    };
  },
  methods: {
    getMoviesById() {
      const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
      const URL = `https://api.themoviedb.org/3/movie/${this.id}?api_key=${API_KEY}&language=en-US`;

      axios
        .get(URL)
        .then(res => {
          this.info = res.data;
        })
    },
    similarMovies() {
      const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
      const SIMILAR_MOVIE = `https://api.themoviedb.org/3/movie/${this.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      axios.get(SIMILAR_MOVIE)
        .then(res => (this.similar = res.data.results.slice(0, 6)))
    },
    getRecommendationsMovies() {
      const API_KEY = "b6ae17c5481c2abdc5c03bc07d7186e7";
      const REC_MOVIE = `https://api.themoviedb.org/3/movie/${this.id}/recommendations?api_key=${API_KEY}&language=en-US`

      axios.get(REC_MOVIE)
        .then(res => (this.recommendations = res.data.results.slice(0, 6)))
    }
  },
  mounted() {
    this.getMoviesById(this.id);
    this.similarMovies();
    this.getRecommendationsMovies();
  }
};
</script>

<style scoped>
i {
  text-decoration: none;
  color: #fff;
}

.card {
  background: #222;
  border: 1px solid #fff000;
}

.card-footer {
  border-top: 1px solid #fff000;
}

.vote {
  background-color: #fff000;
  text-align: center;
  color: #222;
  border-radius: 50px;
}


.genres {
  display: flex;
  justify-content: center;
  border: 1px solid #fff000;
  padding: 22px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

@media only screen and (max-width: 992px) {
  .genres {
    
    padding: 10px;
    margin-bottom: 8px;
    text-align: center;
  }
}
</style>