<template>
  <main id="yts-client-home">
    <section class="heading-section" id="yts-client-heading">
      <h1 class="heading-content header">Download YTS YIFY movies: HD smallest size</h1>
      <p class="heading-content welcome">
        Welcome to a YTS clone website. Here you can browse 
        and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D 
        quality, all at the smallest file size. YTS Movies Torrents.
      </p>
      <p class="heading-content official-note">
        IMPORTANT - This is a YTS.MX clone, you can visit their official website <a href="https://yts.mx">here</a>, 
        or you can visit their official blog which list all of the official YTS YIFY domains. NOTE
        <a href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies">
          YTS.MX is the only new official domain for YIFY Movies
        </a>
      </p>
    </section>
    <section class="catalog-section" id="popular_downloads_section">
      <h3 class="catalog-section-title">
        <span class="material-icons">star_rate</span> Popular Downloads
      </h3>
      <ul id="popular-movies-catalog">
        <li v-for="movie in popular" :key="movie.id" :id="movie.slug">
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
    <section class="catalog-section" id="latest_yify_torrents">
      <h4 class="catalog-section-title">Latest YIFY Movies Torrents</h4>
      <ul id="latest-movies-catalog">
        <li v-for="movie in latest" :key="movie.id" :id="movie.slug">
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
    <section v-if="false" class="catalog-section" id="upcoming_yify_torrents">
      <h4 class="catalog-section-title">Upcoming YIFY Movies</h4>
      <ul id="upcoming-movies-catalog">

      </ul>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

const nuxtOptions = {
  async asyncData(context) {

    const api = context.$config.YTS_API

    const popular_query = new context.$search_param({
      page: 1,
      limit: 4,
      sort_by: 'download_count',
    }).gen_params('list_movies.json')

    const latest_query = new context.$search_param({
      page: 1,
      limit: 8,
      sort_by: 'year',
      order_by: 'desc'
    }).gen_params('list_movies.json')

    const popular = await context.$axios.get(api.replace(/endpoint/, popular_query))
    const latest = await context.$axios.get(api.replace(/endpoint/, latest_query))
    
    return {
      popular: popular.data.data.movies,
      latest: latest.data.data.movies
    }
  }
}

export default {
  ...nuxtOptions,

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
        }

      }
    }
  },

  computed: {

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

  watch: {

  }

}

</script>

<style lang="scss">
main#yts-client-home {
  .heading-section {

    text-align: center;

    margin: auto 10rem;

    font-size: .925rem;

    .heading-content.header {
      font-size: 2.5rem;
      margin: 1rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
    }

    .heading-content.welcome {
      width: 680px;
      margin: auto;

      color: #c7cccc;
    }

    .heading-content.official-note {
      color: #c7cccc;
    }
  }

  .catalog-section {
    padding: 1rem 4rem;
    
    .catalog-section-title {
      font-size: 1.2rem;
      letter-spacing: -.05rem;
      font-weight: bold;

      margin-top: 1rem;
    }

    &#popular_downloads_section {

      margin-top: 1.5rem !important;

      .catalog-section-title {
        font-size: 1.3rem;

        text-align: center;
        border-bottom: 1px solid #504d4b53;

        padding-bottom: 1.2rem;

        span {
          width: 24px;
          position: relative;
          top: 5px;
          color: #6ac045;
        }

        margin-bottom: 1rem;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;

      max-width: 100%;

      padding: 0;

      text-align: center;

      li {
        width: 25%;
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

              width: 100%;

              vertical-align: middle;
              object-fit: contain;
            }

            figcaption {
              text-align: initial;
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

    &:nth-child(odd) {
      background: #171717;
    }

  }

}
</style>
