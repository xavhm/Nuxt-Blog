import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
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
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }
        return this.$axios.$post('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json', createdPost)
        .then(result => { 
          vuexContext.commit('addPost', {...createdPost, id: result.data.name})
         })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/' + editedPost.id + '.json', editedPost)
        .then(res => { 
          vuexContext.commit('editPost', editedPost)
         })
        .catch(e => console.log(e))
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