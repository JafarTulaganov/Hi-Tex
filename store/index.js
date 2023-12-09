/* eslint-disable */

export const state = () => ({
  cart: [],
  translations: {},
  lang: '',
})

export const mutations = {
  langRu(state, payload) {
    state.lang = payload
  },

  getTranslations(state, payload) {
    state.translations = payload
  },
}

export const actions = {
  actionLangRu({ commit }, payload) {
    commit('langRu', payload)
  },
}

export const getters = {
  language(state) {
    return state.lang
  },
}
