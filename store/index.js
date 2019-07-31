import axios from 'axios'

export const state = () => ({
  rankings: []
})

export const mutations = {
  FETCH_RANKING(state, rankings) {
    state.rankings = rankings
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('http://lvh.me:8080/articles')
    commit('FETCH_RANKING', data)
  }
}
