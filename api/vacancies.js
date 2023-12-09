/* eslint-disable */

export default {
  async getVacancies(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/vacansy', {
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
}
