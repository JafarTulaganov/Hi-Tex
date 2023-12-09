/* eslint-disable */

export default {
  async getCertificates(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/certificates', {
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
