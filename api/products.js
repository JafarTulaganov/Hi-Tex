/* eslint-disable */

export default {
  async getProducts(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/products', {
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

  async getProduct(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/products/${slug}`, {
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
