<template>
  <section id="yts-client-pagination">
    <div role="group" class="btn-page-navigation">
      <a class="btn-first" @click="tap" >« First</a><a class="btn-prev" @click="tap">« Previous</a>
    </div>

    <div role="group" class="btn-page-navigation" v-if="last_page > 7">
      <span class="btn-page-loop-wrapper" v-if="page_number >= 5 && page_number <= last_page-3" v-for="i in [-3, -2, -1, 0, 1, 2, 3]" :key="i">
        <a class="btn-page" @click="tap"
          :class="{ active: page_number+i === page_number }">{{ page_number+i }}</a>
      </span>

      <span class="btn-page-loop-wrapper" v-if="page_number < 5" v-for="(_, i) in Array(7)" :key="i">
        <a class="btn-page" @click="tap"
          :class="{ active: page_number === i+1 }">{{ i+1 }}</a>
      </span>

      <span class="btn-page-loop-wrapper" v-if="page_number >= last_page-7" v-for="(_, i) in Array(7)" :key="i">
        <a class="btn-page" @click="tap"
          :class="{ active: page_number === page_number+(i-7)+1 }">{{ page_number+(i-7)+1 }}</a>
      </span>
    </div>

    <div role="group" class="btn-page-navigation" v-if="last_page < 7">
      <span class="btn-page-loop-wrapper" v-for="(_, i) in Array(last_page)" :key="i">
        <a class="btn-page" @click="tap"
          :class="{ active: page_number === i+1 }">{{ i+1 }}</a>
      </span>
    </div>

    <div role="group" class="btn-page-navigation">
      <a class="btn-next" @click="tap">Next »</a><a class="btn-last" @click="tap" >Last »</a>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

const nuxtFunctions = {}

export default {
  ...nuxtFunctions,
  
  name: 'AppPagination',

  props: {
    movie_data: {
      type: Object,
      required: true
    },
    
    query_string: {
      type: String,
      required: true
    }
  },

  methods: {
    async tap(args) {
      const api = this.$config.YTS_API;
      const op = args.target.textContent;

      let queryString = this.query_string.replace(/&page=\d+/g, "");

      switch(op) {
      case '« First':
        queryString = this.query_string.concat(`&page=1`);
        break;
      case '« Previous':
        if (this.movie_data.page_number-1 > 0)
          queryString = this.query_string.concat(`&page=${this.movie_data.page_number-1}`);
        else
          queryString = this.query_string.concat(`&page=1`);
        break;
      case 'Next »':
        if (this.movie_data.page_number+1 < this.last_page)
          queryString = this.query_string.concat(`&page=${this.movie_data.page_number+1}`);
        else
          queryString = this.query_string.concat(`&page=${this.last_page}`);
        break;
      case 'Last »':
        queryString = this.query_string.concat(`&page=${this.last_page}`);
        break;
      default:
        queryString = this.query_string.concat(`&page=${op}`);
      }

      const result = (await axios.get(api.replace(/endpoint/, queryString))).data.data;

      this.$emit('page-updated', { result, queryString });
    }
  },

  computed: {
    pages() {
      return this.movie_data.movie_count;
    },

    page_number() {
      return this.movie_data.page_number;
    },

    last_page() {
      return Math.round(this.movie_data.movie_count/this.movie_data.limit) + 1;
    }
  },

  mounted() {
    
  }

}

</script>

<style lang="scss" scoped>

section#yts-client-pagination {
  display: flex;
  justify-content: center;

  padding: 1rem;

  .active {
    border-color: #5da93c;
    background-color: #5da93c;
  }

  a {
    border: 1px solid #333333;
    padding: .7rem;

    border-radius: .3125rem;

    font-weight: 400;
    color: white;

    margin: 2px;

    &:hover {
      border-color: #5da93c;
      background-color: #5da93c;
    }
  }
}


</style>