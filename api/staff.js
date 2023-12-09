/* eslint-disable */

export default {
  async getStaff(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/workers', {
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

  async getStaffId(id, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/workers/${id}`, {
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
