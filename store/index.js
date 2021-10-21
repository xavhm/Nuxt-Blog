import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null;
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
        return this.$axios.$post('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=' + vuexContext.state.token, createdPost)
        .then(result => { 
          vuexContext.commit('addPost', {...createdPost, id: result.data.name})
         })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('https://first-nuxt-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then(res => { 
          vuexContext.commit('editPost', editedPost)
         })
        .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
        if (!authData.isLogin) {
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
        }
        this.$axios
        .post(
          authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(result => {
          vuexContext.commit('setToken', result.data.idToken);
        })
        .catch(e => console.log(e.message));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    },
  })
}

export default createStore