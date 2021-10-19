import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
          return this.$axios.$get('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
            .then(res => {
              const postsArray = []
              for (const key in res) {
                postsArray.push({ ...res[key], id: key })
              }
              vuexContext.commit('setPosts', postsArray)
            })
            .catch(e => context.error(e))
      },
      setPosts(vuexContext) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore