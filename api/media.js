/* eslint-disable */

export default {
  async getMedia(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/media', {})
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getPartners(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/partners', {})
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getStories(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/stories', {
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

  async getInfo(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/static_infos', {
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
