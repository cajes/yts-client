<template>
  <header id="yts-client-header" @mouseleave="dropdown$hide" >
    <div class="header-content-wrapper">
      <h3><a href="#">YTS.CLONE</a></h3>
      <nav>
        <ul>
          <li>
            <form autocomplete="off" >
              <label for="search-input">
                <span class="material-icons">search</span>
              </label>
              <input type="text" id="search-input" ref="search-input" v-model="keyword" name="keyword" 
                    @focusin="search_keyword" placeholder="Quick search">

              <div class="sk-circle" ref="loading">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div></div>
              <input type="submit" name="submit" hidden>
              <output id="search-dropdown" class="dropdown" ref="dropdown">
                <ul class="dropdown-content" ref="search-output" @click="dropdown$hide">
                  <li class="dropdown-item" v-for="movie in quick_search.movies" :key="movie.id">
                    <nuxt-link :to="`/movies/${movie.id}/${movie.slug}`"> 
                      <figure>
                        <img :src="movie.small_cover_image" />
                        <figcaption>
                          <p>{{ movie.title }}</p>
                          <time>{{ movie.year }}</time>
                        </figcaption>
                      </figure>
                    </nuxt-link>
                  </li>
                </ul>
              </output>
            </form>
          </li>
          <li>
            <nuxt-link to="/" id="page-home">Home</nuxt-link>
          </li>
          <li>  
            <nuxt-link :to="{
              name: 'browse-movies',
              params: {
                quality: '2160p'
              }
            }" id="page-4k">4K</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/trending-movies" id="page-trending">Trending</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/browse-movies" id="page-browse_movies">Browse Movies</nuxt-link>
          </li> 
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import axios from 'axios'

let timeout;

export default {
  name: 'AppHeader',

  data() {
    return {
      keyword: '',
      quick_search: {}
    }
  },

  methods: {
    async search_keyword() {
      const api = this.$config.YTS_API
      const keyword = this.keyword

      if (keyword.length !== 0) {
        const search_query = new this.$search_param({
          query_term: keyword,
          sort_by: 'year',
          order_by: 'asc',
          limit: 5
        }).gen_params('list_movies.json')

        this.quick_search = (await axios.get(api.replace(/endpoint/, search_query))).data.data
        this.$refs.dropdown.style.visibility = "visible"
      } else {
        this.quick_search = {}
        this.dropdown$hide()
      }

      this.$refs.loading.style.visibility = "hidden";
    },

    dropdown$hide() {
      this.$refs.dropdown.style.visibility = "hidden";
    },

    dropdown$show() {
      if (this.$refs["search-output"].childElementCount > 0)
        this.$refs.dropdown.style.visibility = "visible";
    }
  },

  computed: {},

  watch: {
    keyword: function(_new, old) {
      this.$refs.loading.style.visibility = "visible";

      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(this.search_keyword, 500)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/spinner.css';

.sk-circle {
  position: absolute;

  right: 8px;
  top: 5px;

  visibility: hidden;
}

header#yts-client-header {

  z-index: 1;

  position: sticky;
  top: 0;

  border-bottom: 1px solid #2f2f2f;

  div {
    display: flex;

    margin: auto 6rem;
    padding: 0;

    > * {
      display: inline-block;
    }

    h3 {
      flex-basis: 20%;

      float: left;
      align-self: center;
      justify-self: left;

      a {
        color: #6ac045 !important;
        font-size: 1.5rem !important;
      }
    }

    nav {
      flex-basis: 80%;

      font-size: .875rem;
      font-weight: 900;
      letter-spacing: .001rem;

      ul {
        list-style-type: none;

        display: flex;

        float: right;
        align-content: center;
        justify-content: right;

        li {
          align-self: center;
          justify-self: center;

          > * {
            margin: auto .625rem;
          }

          form {
            display: flex;
            position: relative;

            .dropdown {
              position: absolute;

              visibility: hidden;

              margin: 0;
              padding: 0 !important;

              ul {
                display: initial;
                text-align: initial;
                list-style-type: none;
                padding: 0;

                width: 100%;

                li {
                  margin: 0;

                  a { margin: 0; display: block; padding: .125rem }

                  a:hover, a:active {
                    background-color: #333333;
                  }

                  figure {
                    margin: 0;

                    display: flex;

                    > * {
                      margin: .3125rem;
                    }

                    img {
                      flex-basis: 20%;
                    }

                    figcaption {
                      flex-basis: 90%;

                      display: flex;
                      flex-direction: column;

                      padding: .125rem initial;
                      
                      > * {
                        display: block;
                      }

                      p {
                        margin: 0;
                        flex: 1;

                        color: white;
                      }

                      time {
                        color: #8cb6c7;
                        margin: 0;
                        font-weight: 400 !important;
                      }
                      
                    }
                  }
                }
              }

              width: 100%;
              top: 136%;

              background-color: #1d1d1d;

              border: 1px solid #2f2f2f;
              border-top: 0;

              padding: .625rem;
            }
            
            label {
              align-self: center;
              color: #919191;

              span {
                position: relative;
                
                font-size: 1rem !important;

                border-top: 2px solid #333333;
                border-bottom: 2px solid #333333;
                border-left: 2px solid #333333;

                border-top-left-radius: 1rem;
                border-bottom-left-radius: 1rem;
                
                padding: .525rem;

                &:hover {
                  color: #fff;
                }
              }

            }

            [name="keyword"] {

              &:focus {
                outline: none;
              }

              padding: 0 initial !important;
              padding-left: 0 !important;

              width: 250px;

              background: #1d1d1d;
              font-weight: bold;
              color: #919191;

              border-top-right-radius: 1rem;
              border-bottom-right-radius: 1rem;

              border: none;

              border-right: 2px solid #333333;
              border-top: 2px solid #333333;
              border-bottom: 2px solid #333333;
              padding: .525rem .625rem;
              margin: 0;
            }
          }
        }
      }

    }
  }

  a {
    color: #919191;
    text-decoration: none;

    &:hover {
      color: #fff;
    }

    &:active {
      outline: 1px dotted #fff;
    }
  }

  background: #1d1d1d;
}

#yts-client-header div.header-content-wrapper * {
  font-size: .765rem;
}

#yts-client-header #page-4k {
  color: #6ac045;
}

</style>