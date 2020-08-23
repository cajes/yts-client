<template>
  <main id="yts-client-browse-movies">
    <AppSearchForm @search-result="update" />
    <section id="search_result" class="browse-movies movies">
      <h2 align="center">
        <a href="#">
          <span class="movie_count">{{ yts.movie_count.toLocaleString() }}</span> YIFY Movies found
        </a>
      </h2>

      <AppPagination v-if="paginateBoolean" :movie_data="yts" :query_string="queryString" @page-updated="update" />

      <ul id="movie-list-result">
        <li class="movie-result-list movie-cover-card" v-for="movie in yts.movies" :key="movie.id">
          <nuxt-link :to="create_link(movie)" class="movie-cover-wrapper" :title="movie.title">
            <figure class="movie-cover-content">
              <div class="wrapper">
                <img :alt="movie.title_long" :srcset="cover.srcset(movie)" sizes="(max-width: 600px) 480px 800px 1280px"
                  :src="movie.medium_cover_image" @error="cover.rerender(movie, $event)">
              </div>
              <figcaption>
                <p>{{ movie.title }}</p>
                <time :datetime="movie.year">{{ movie.year }}</time>
              </figcaption>
            </figure>
          </nuxt-link>
        </li>
      </ul>

      <AppPagination v-if="paginateBoolean" :query_string="queryString" :movie_data="yts"  @page-updated="update" />
    </section>
  </main>
</template>

<script>

import AppSearchForm from '@/components/AppSearchForm'
import AppPagination from '@/components/AppPagination'


const nuxtFunctions = {
  async asyncData(context) {

    const api = context.$config.YTS_API
    const quality = context.params.quality

    const yts = await context.$axios.get(api.replace(/endpoint/, 
      quality && new context.$search_param({ quality }).gen_params("list_movies.json")
    || 
      "list_movies.json"
    ))

    return {
      yts: yts.data.data
    }
  }
}

export default {
  ...nuxtFunctions,

  components: {
    AppSearchForm, AppPagination
  },

  data() {
    return {
      queryString: "list_movies.json?",

      cover: {
        srcset(movie) {
          const tstr = "small 480w medium 800w large 1280w"

          return tstr.replace(/small/g, movie.small_cover_image)
            .replace(/medium/g, movie.medium_cover_image)
            .replace(/large/g, movie.large_cover_image);
        },

        rerender(movie, event) {
          const img = event.target;

          setTimeout(() => {
            img.src = movie.medium_cover_image;
          }, 1000)
        }

      }
    }
  },

  methods: {
    create_link(movie) {
      return {
        name: 'movies-id-name',
        params: {
          id: movie.id,
          name: movie.slug
        }
      } 
    },

    update({ result, queryString }) {
      this.yts = result, this.queryString = queryString
    },
  },

  computed: {
    totalPages() {
      return Math.round(this.yts.movie_count/this.yts.limit) + 1
    },

    paginateBoolean() {
      return this.totalPages > 1
    }
  },
  watch: {}
}
</script>

<style lang="scss">
main#yts-client-browse-movies {

  h2 > a > span {
    color: #85f057;
  }
  
  section#search_result {

    ul {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;

      max-width: 100%;

      padding: 0;

      margin: auto 4.5rem;

      li.movie-cover-card {
        flex-basis: 20%;
        padding: 1.5rem;

        .movie-cover-wrapper {
          figure.movie-cover-content {
            margin: 0;

            margin-bottom: -1rem;

            div {
              border: .3125rem solid #fff;
              border-radius: .375rem;
            }

            img {
              min-width: 100%;

              width: 100%;

              vertical-align: middle;
              object-fit: contain;
            }

            p {
              margin: 0;
              padding: .125rem;

              padding-bottom: 0;
              padding-left: 0;

              font-size: .875rem;
              font-weight: bold;
              
              color: #fff;

              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              width: 10.5rem;

            }

            time {
              font-size: .825rem;
              color: #839191;
            }
          }
        }
      }
    }


  }
}
</style>