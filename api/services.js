/* eslint-disable */

export default {
  async getServices(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/businesses', {
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

  async getService(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/businesses/${slug}`, {
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

  async getFactories(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/factories', {
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

  async getFactory(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/factories/${slug}`, {
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
