<template>
  <main id="yts-client-movie-details" :class="$route.params.slug" v-if="movie" class="movie-details-content">
    <header id="md-section-overview" class="md-section">
      <section class="overview-thumbnail overview-download" id="thumbnail_download">
        <figure class="movie-cover">
          <img :src="movie.large_cover_image" :alt="movie.title_long" :srcset="cover.srcset(movie)"
            sizes="(max-width: 600px) 480px 800px 1280px" @error="cover.rerender(movie, $event)">
        </figure>
        <a href="#" id="download-modal" @click="download_dialog">
          <i class="material-icons download-icon">get_app</i> Download
        </a>
      </section>

      <section class="overview-details overview-simple-desc" id="description">
        <hgroup class="overview-headings-wrapper mo-heading">
          <div id="movie_title">
            <h1>{{ movie.title }}</h1>
          </div>

          <div id="movie_simple_info" class="movie-year movie-genre">
            <h2>{{ movie.year }}</h2>
            <h2>{{ movie.genres && movie.genres.join(' / ') }}</h2>
          </div>
        </hgroup>

        <article id="movie_data" class="mo-data">
          <div class="mo-available-res">
            <em class="mo-available-in">Available in:</em>
            <ul class="mo-download-links">
              <li class="mo-download-link" v-for="torrent in torrents" :key="torrent.id">
                <a :id="movie.slug.concat('-').concat(torrent.quality)" :href="torrent.url">
                  {{ torrent.quality }}.{{ torrent.type.toUpperCase() }}
                </a>
              </li>
            </ul>
          </div>

          <a :href="yifySubtitles" class="mo-download-sub">
             <i class="material-icons download-icon">get_app</i> Download Subtitles
          </a>
        </article>

        <article id="movie_ratings" class="mo-ratings">
          <ul id="mo-ratings">
            <li v-if="movie.like_count">
              <div class="movie-likes">
                <span class="material-icons">favorite</span>
              </div>
              <data id="movie-likes" :value="movie.like_count">
                {{ movie.like_count }}
              </data>
            </li>
            <li v-if="movie.rating">
              
              <div class="movie-likes">
                <img src="https://yts.mx/assets/images/website/logo-imdb.svg">
              </div>
              <data id="movie-likes" :value="movie.rating">
                {{ movie.rating }} <span class="material-icons">grade</span>
              </data>
            </li>
          </ul>
        </article>
      </section>

      <aside class="overview-similar-movies overview-suggested-movies" id="similar_movies"></aside>
    </header>

    <section id="md-section-details" class="md-section">
      <article class="movie-details-trailer movie-details-screenshot">
        <iframe v-if="movie.yt_trailer_code.length > 0" 
                :src="`https://www.youtube.com/embed/${movie.yt_trailer_code}`" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      </article>

      <div class="movie-details movie-fancy-description">
        <section class="movie-details-synopsis movie-details-director movie-details-cast">
          <article class="details-synopsis" id="synopsis">
            <h3 class="movie-title-synopsis">Synopsis</h3>
            <p>{{ movie.description_intro }}</p>
          </article>
          <aside class="details-director details-cast" id="director_cast"></aside>
        </section>

        <a href="#" id="parental-guide">Parental Guide</a>
      </div>

      <article class="small-desc movie-details-uploader" id="uploader-credits">
        <i>
          <blockquote>
            Uploaded by: <cite><strong>Someone</strong></cite>
          </blockquote>
          <time :datetime="movie.date_uploaded">{{ formatted_time }}</time>
        </i>
      </article>

      <article class="movie-details-tech-specs" id="tech_specification"></article>
    </section>

    <footer id="md-section-reviews" class="md-section">
      <section class="movie-details-comments" id="movie-send-feedback">
      </section>
      <section class="movie-details-reviews" id="movie-feedbacks">
      </section>
    </footer>
  </main>
</template>

<script>

const nuxtFunctions = {

  async asyncData(context) {
    const { route } = context
    const api = context.$config.YTS_API

    // const name = route.params.name.replace(/([a-z]+\-)/g, $1 => {
    //   return $1.replace(/\-/, ' ').replace(/^([a-z])/, $1 => $1.toUpperCase())
    // }).replace(/\-/, ' ')

    const id = route.params.id

    if (!id) context.redirect('/404');

    let res = await context.$axios.get(api.replace(/endpoint/, `movie_details.json?movie_id=${id}`))
    let data = {}

    data.movie = res.data.data.movie

    return data
  }

}

export default {
  ...nuxtFunctions,

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

  methods: {
    download_dialog() {
      alert("Download!");
    }
  },

  computed: {
    torrents: vm => vm.movie.torrents,
    yifySubtitles: vm => `https://yifysubtitles.org/movie-imdb/${vm.movie.imdb_code}`,
    formatted_time: vm => {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ]

      const date = new Date(vm.movie.date_uploaded_unix*1e3);
      const time = () => {
        let h = date.getHours();
        let m = date.getMinutes();

        // convert it to 12-hour format
        const p = h < 12 ? 'AM' : 'PM';
        h = h > 12 ? h-12 : h;
        h = h == 0 ? 12 : h;

        h = h < 10 ? '0'.concat(h) : h;
        m = m < 10 ? '0'.concat(m) : m;
        

        return `${h}:${m} ${p}`
      }


      return `month date, year at time`
        .replace(/month/, months[date.getMonth()])
        .replace(/date/, date.getDate())
        .replace(/year/, date.getFullYear())
        .replace(/time/, time());
    }
  },
  
  watch: {},

  mounted() {}
}

</script>

<style lang="scss" scoped>
main#yts-client-movie-details {
  margin: auto 5rem;

  header#md-section-overview {
    
    margin-top: 1.6rem;
    display: flex;

    section#thumbnail_download {
      flex-basis: 30%;
      margin: 0 2rem;
      padding-right: 2rem;

      margin-left: 0;

      figure.movie-cover {
        margin: 0;
        min-width: 100%;

        border: .526rem solid #fff;

        border-left-width: .3125rem;
        border-right-width: .3125rem;

        border-radius: .3125rem;

        img {
          width: 100%;
          min-width: 100%;

          vertical-align: middle;
          object-fit: cover;
        }
      }

      a#download-modal {
        text-align: center;

        display: block;

        color: #fff;
        background-color: #6ac045;

        margin-top: .725rem;

        border-radius: .3125rem;

        font-weight: bold;
        
        padding-top: .3125rem;
        padding-bottom: .625rem;
        i {
          color: #428e21; 
          font-size: 1.5rem;
          position: relative;
          top: 5px;
        }
      }
    }

    section#description {
      flex-basis: 60%;
      margin: 0 2rem;

      #movie_title:first-child {
        font-size: 1.1rem;

        text-shadow: 0 .245rem .625rem #171717;
      }

      .movie-year.movie-genre {
        font-size: .8rem;
        text-shadow: 0 .245rem .625rem #171717;

        > * {
          margin: 0;
        }
      }

      #movie_data {
        a {
          color: #fff;

          &:hover {
            color: #d5d5d5;
          }
        } 
        
        .mo-available-res {
          display: flex;

          > * {
            padding: 0;
          }

          > :first-child {
            flex: 20%;
            align-self: center;
          }

          > :last-child {
            flex: 80%;
            list-style-type: none;
            display: flex;

            flex-wrap: wrap;

            padding-left: .3125rem;

            li {
              flex-basis: 16%;
              font-size: .9rem;
              
              background-color: #25252832;
              padding: .425rem;

              margin: .2rem;

              border: .0625rem solid #48494b;
              border-radius: .3125rem;
            }
          }      
        }
      }

      .mo-download-sub {
        font-size: .9rem;

        color: #fff;
        background-color: #25252832;

        padding: .425rem;

        border: .0625rem solid #48494b;
        border-radius: .3125rem;

        i {
          position: relative;
          top: 7px;

          color: #428e21;
        }
      }

      article#movie_ratings {
        margin-top: 1.5rem;
        
        ul {
          list-style-type: none;
          padding: 0;

          li {
            display: flex;

            font-size: 1.1rem;
            font-weight: bold;

            span { color: #6ac045; }

            > * {
              flex-basis: 20%;
              align-self: center;
            }

            &:last-child {
              img {
                display: block;
                padding: 0;

                position: relative;
                top: 3.5px;
              }

              span { position: relative; top: 5px; }
            }
          }
        }
      }
    }

    aside#similar_movies {

    }
  }

  section.md-section {
    color: #919191;

    > * {
      margin: 3rem auto;
    }

    div.movie-fancy-description {
      section {
        display: flex;

        article#synopsis {
          flex-basis: 65%;

          h3 {  
            color: #fff;
          }
        }

        aside#director_cast {
          flex-basis: 35%;
        }
      }

      a#parental-guide {
        display: block;
        margin-top: 1rem;
        font-weight: bold;
      }
    }

    article#uploader-credits {
      blockquote {
        margin: 0;
      }
    }
  }

  footer#md-section-reviews {

  }
}
</style>