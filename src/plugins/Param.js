class Param {
  
  constructor({ limit, page, quality, minimum_rating, query_term,
                  genre, sort_by, order_by, with_rt_ratings }) { 
    return {
      params: {
        query_term: query_term || 0,
        limit: limit || 20,
        page: page || 1,
        quality: quality || 'all',
        minimum_rating: minimum_rating || 0,
        genre: genre || 'all',
        sort_by: sort_by || 'date_added',
        order_by: order_by || 'desc',
        with_rt_ratings: with_rt_ratings || false
      },

      gen_params(endpoint) {
        let str = "?"
        
        for (const [key, value] of Object.entries(this.params))
          str = str.concat(`${key}=${value}&`)

        return endpoint + str.substr(0, str.length-1)
      }
    }
  }
}

export default (context, inject) => inject('search_param', Param)
