import AxiosUnsplash from '@/modules/AxiosUnsplash'

export default {
  state: {
    images: {
      x1: '',
      x2: '',
      x3: ''
    },
    loaded: false
  },

  mutations: {
    SET_IMAGE (state, data) {
      state.images.x1 = data.urls.small
      state.images.x2 = data.urls.regular
      state.images.x3 = data.urls.full
      state.loaded = true
    }
  },

  getters: {
    getBackgroundStatus: state => state.loaded,
    getBackgroundImage: state => state.images
  },

  actions: {
    async loadImages ({ commit }) {
      const page = Math.round((Math.random() * (333 - 1) + 1))

      try {
        const result = await AxiosUnsplash.get('/357786/photos', {
          params: {
            per_page: 1,
            page: page
          }
        })
        const image = await result.data[0]
        await commit('SET_IMAGE', image)
      } catch (err) {

      }
    }
  }
}
