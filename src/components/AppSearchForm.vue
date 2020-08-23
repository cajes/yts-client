<template>
  <form id="yts-client-search-form" @submit.prevent="search" autocomplete="off">
    <div class="form-wrapper">
      <label for="search_keyword">
        Search Term:
      </label>

      <div role="group" class="search_query_main">
        <input type="text" v-model="query_term" id="search_keyword" name="keyword" placeholder="Search movies">
        <input type="submit" value="Search">
      </div>

      <div role="group" class="search_query_options">
        <div class="field-wrapper" id="movie_quality">
          <label for="movie_quality_select">Quality:</label>
          <select v-model="query_options.quality" id="movie_quality_select" name="quality">
            <option value="all">All</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="2160p">2160p</option>
            <option value="3D">3D</option>
          </select>
        </div>
        <div class="field-wrapper" id="movie_genre">
          <label for="movie_genre_select">Genre:</label>
          <select v-model="query_options.genre" id="movie_genre_select" name="genre">
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="biography">Biography</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
            <option value="family">Family</option>
            <option value="fantasy">Fantasy</option>
            <option value="film-noir">Film-Noir</option>
            <option value="game-show">Game-Show</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="music">Music</option>
            <option value="musical">Musical</option>
            <option value="mystery">Mystery</option>
            <option value="news">News</option>
            <option value="reality-tv">Reality-TV</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="sport">Sport</option>
            <option value="talk-show">Talk-Show</option>
            <option value="thriller">Thriller</option>
            <option value="war">War</option>
            <option value="western">Western</option>
          </select>
        </div>
        <div class="field-wrapper" id="movie_rating">
          <label for="movie_rating_select">Rating:</label>
          <select v-model="query_options.rating" id="movie_rating_select" name="rating">
            <option value="0">All</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
            <option value="5">5+</option>
            <option value="4">4+</option>
            <option value="3">3+</option>
            <option value="2">2+</option>
            <option value="1">1+</option>
          </select>
        </div>
        <div class="field-wrapper" id="movie_year">
          <label for="movie_year_select">Year:</label>
          <select v-model="query_options.year" id="movie_year_select" name="year">
            <option value="0">All</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2015-2018">2015-2018</option>
            <option value="2010-2014">2010-2014</option>
            <option value="2000-2009">2000-2009</option>
            <option value="1990-1999">1990-1999</option>
            <option value="1980-1989">1980-1989</option>
            <option value="1970-1979">1970-1979</option>
            <option value="1900-1969">1900-1969</option>
          </select>
        </div>
        <div class="field-wrapper" id="movie_language">
          <label for="movie_lang_select">Language:</label>
          <select v-model="query_options.language" id="movie_lang_select" name="language">
            <option value="all" selected="selected">All</option>
            <option value="en">English</option>
            <option value="foreign">Foreign</option>
            <option value="ja">Japanese</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="it">Italian</option>
            <option value="es">Spanish</option>
            <option value="cn">Cantonese</option>
            <option value="ko">Korean</option>
            <option value="hi">Hindi</option>
            <option value="sv">Swedish</option>
            <option value="ru">Russian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="da">Danish</option>
            <option value="no">Norwegian</option>
            <option value="nl">Dutch</option>
            <option value="cs">Czech</option>
            <option value="fi">Finnish</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="fa">Persian</option>
            <option value="el">Greek</option>
            <option value="id">Indonesian</option>
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
            <option value="hu">Hungarian</option>
            <option value="tl">Tagalog</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="ro">Romanian</option>
            <option value="is">Icelandic</option>
            <option value="sr">Serbian</option>
            <option value="bn">Bangla</option>
            <option value="et">Estonian</option>
            <option value="ms">Malay</option>
            <option value="ur">Urdu</option>
            <option value="vi">Vietnamese</option>
            <option value="ca">Catalan</option>
            <option value="xx">xx</option>
            <option value="eu">Basque</option>
            <option value="uk">Ukrainian</option>
            <option value="af">Afrikaans</option>
            <option value="la">Latin</option>
            <option value="yi">Yiddish</option>
            <option value="aa">Afar</option>
            <option value="mi">Maori</option>
            <option value="kn">Kannada</option>
            <option value="ka">Georgian</option>
            <option value="ab">Abkhazian</option>
            <option value="ml">Malayalam</option>
            <option value="sw">Swahili</option>
            <option value="sk">Slovak</option>
            <option value="os">Ossetic</option>
            <option value="nb">Norwegian Bokmål</option>
            <option value="mr">Marathi</option>
            <option value="mn">Mongolian</option>
            <option value="mk">Macedonian</option>
            <option value="lv">Latvian</option>
            <option value="km">Khmer</option>
            <option value="ga">Irish</option>
            <option value="bs">Bosnian</option>
          </select>
        </div>
        <div class="field-wrapper" id="movie_orderby">
          <label for="movie_orderby_select">Order By:</label>
          <select v-model="query_options.order_by" id="movie_orderby_select" name="orderby">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="featured">Featured</option>
            <option value="seeds">Seeds</option>
            <option value="peers">Peers</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
            <option value="likes">Likes</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="downloads">Downloads</option>
          </select>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AppSearchForm',

  data() {
    return {
      query_term: '',
      query_options: {
        quality: 'all' || this.$route.params.quality, 
        genre: 'all',
        minimum_rating: 0,
        year: 0,
        rating: 0,
        language: 'all',
        order_by: 'latest',
        with_rt_ratings: true
      }
    }
  },

  methods: {
    async search() {
      const api = this.$config.YTS_API

      const query_term = this.query_term
      const query_opt = this.query_options
      const vm = this

      const param = new this.$search_param({
        query_term,
        quality: query_opt.quality,
        genre: query_opt.genre,
        minimum_rating: query_opt.rating
      })

      const query_string = param.gen_params('list_movies.json');

      const yts = await axios.get(api.replace(/endpoint/, query_string))

      this.$emit('search-result', {
        result: yts.data.data,
        queryString: query_string
      })
    }
  },

  computed: {},
  watch: {}
}
</script>

<style lang="scss">
form#yts-client-search-form {

  .form-wrapper {
    padding: 3rem 10rem;
    padding-top: 3rem;

    font-size: 1.2rem;
    color: #5a5a5a;

    > label {
      display: block;
      font-size: 1.5rem;
      font-weight: bold;
    }

    [role="group"] {
      border: 0;
      padding: 0;

      &.search_query_main {
        display: flex;

        [type="text"] {
          flex-basis: 85%;
        }

        [type="submit"] {
          flex-basis: 15%;
        }
      }

      &.search_query_options {
        display: flex;


        .field-wrapper {
          float: left;
          flex: 1;
          margin-right: .625rem;

          label {
            font-size: .826rem;
            font-weight: bold;
          }

          > * {
            display: block;
          }
        }


      }
    }

    input[type="text"], select {
      background: #282828;
      color: #7493a2;
      border: none;

      padding: .625rem;
      border-radius: .526rem;
      margin-top: .125rem;
    }

    select {
      width: 100%;
      padding: .526rem;
      -moz-appearance: none;
      -webkit-appearance: none;

      &::-ms-expand {
        display: none;
      }
    }

    [type="submit"] {
      background: #6ac045;  
      color: #fff;
      font-weight: bold;

      margin: 0 .75rem;
      border-radius: .526rem;

      border: none;
    }

    > * {
      padding-bottom: 1rem !important;
    }
  }
  
  background: #171717;
}
</style>