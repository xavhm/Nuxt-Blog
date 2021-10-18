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
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              vuexContext.commit('setPosts',[
                  {
                    id: "1",
                    title: "First Post",
                    previewText: "This is our first post!",
                    thumbnail:
                      "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  },
                  {
                    id: "2",
                    title: "Second Post",
                    previewText: "This is our second post!",
                    thumbnail:
                      "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                ]
              )
            resolve();
          }, 1000);
          })
          .then(data => {
            context.store.commit('setPosts', data.loadedPosts)
          })
          .catch(e => {
            context.error(e)
          })
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