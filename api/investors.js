/* eslint-disable */

export default {
  async getInvestors(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/investors', {
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

  async getInvestor(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/investors/${slug}`, {
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
