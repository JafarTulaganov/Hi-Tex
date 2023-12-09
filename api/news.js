/* eslint-disable */

export default {
  async getNews(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/articles', {
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

  async getNew(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/articles/${slug}`, {
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
}
