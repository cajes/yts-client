<template>
  <footer class="yts-client-footer">
    <div class="footer-content-wrapper">
      <nav class="yts-client-footer-nav">
        <ul class="nav-wrapper">
          <li class="nav-item">
            YTS © 2011 - {{ year }}
          </li>
          <li class="nav-item">
            <a href="https://yts.mx/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://yts.mx/dmca">DMCA</a>
          </li>
          <li class="nav-item">
            <a href="https://yts.mx/api">API</a>
          </li>
          <li class="nav-item">
            <a href="https://yts.mx/rss-guide">RSS</a>
          </li>
          <li class="nav-item">
            <nuxt-link to="/browse-movies">Browse Movies</nuxt-link>
          </li>
          <li class="nav-item">
            <a href="https://yts.mx/requests">Requests</a>
          </li>
        </ul>
      </nav>
      <p class="yts-client-footer-terms">
        By using this site you agree to and accept our <a href="https://yts.mx/terms">User Agreement</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',

  data() {
    return { year: null }
  },

  async fetch() {
    this.year = (new Date).getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.yts-client-footer {
  background: #1d1d1d;
  border-top: 1px solid #2f2f2f;
  padding-top: 1rem;
  
  .footer-content-wrapper {
    display: grid;
    place-items: center;

    .nav-wrapper {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;

      .nav-item {
        padding: 0 .625rem 0 0;
      }
    }

    .yts-client-footer-terms {
      font-size: .725rem;
    }
  }
}
</style>