/* eslint-disable */

export default {
  async getCategories(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/categories', {
          headers: {
            Language: params,
          },
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getCategory(id, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/categories/${id}`, {
          headers: {
            Language: params,
          },
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },

  async getSearch(query, axios) {
    try {
      let res
      console.log(query)
      if (axios) {
        res = await axios.get(`/categories/${query.id}`, {
          params: { q: query.search },
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
