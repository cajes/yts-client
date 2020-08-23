<template>
  <main id="yts-client-trending-movies">
    <h3><a href="#">24h YIFY Trending Movies</a></h3>
    <section id="search_result" class="browse-movies movies">
      <ul id="movie-list-result">
        <li class="movie-result-list movie-cover-card" v-for="movie in yts.data.movies" :key="movie.id">
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
    </section>
  </main>
</template>

<script>
import AppSearchForm from '@/components/AppSearchForm.vue'

const nuxtFunctions = {
  async asyncData(context) {

    const api = context.$config.YTS_API

    const yts = await context.$axios.get(api.replace(/endpoint/, "list_movies.json?sort_by=download_count"))

    return {
      yts: yts.data
    }
  }
}

export default {
  ...nuxtFunctions,

  components: {
    AppSearchForm
  },

  data() {
    return {
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
        },

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
    }
  },

  computed: {},
  watch: {}
}
</script>

<style lang="scss">
main#yts-client-trending-movies {
  h3 {
    text-align: center;

    margin-bottom: 0;
  }

  section#search_result {

    ul {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;

      max-width: 100%;
      padding: 0;

      margin: auto 4rem;

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
              max-width: 100%;

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