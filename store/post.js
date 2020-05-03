import computePosts from '~/plugins/data'

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, posts) {
    posts.forEach((post) => {
      state.posts.push(post)
    })
  }
}

export const getters = {
  getPosts (state) {
    return state.posts
  }
}

export const actions = {
  retrievePosts ({ commit }) {
    const posts = computePosts()
    commit('setPosts', posts)
  }
}
