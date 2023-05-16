export default {
    state: {
        posts: [],
        post: null
    },
    getters: {
        getStatePosts(state) {
            return state.posts
        },
        getStatePostDetails(state) {
            return state.post
        },
    },
    mutations: {
        updatePostsState(state, posts) {
            state.posts = posts
        },
        updatePostDetailsState(state, post) {
            state.post = post
        },
        addPost(state, post) {
            state.posts.unshift(post)
        }
    },
    actions: {
        async getPosts({commit}, params) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`)
                const data = await res.json()
                commit('updatePostsState', data)
            } catch (e) {
                console.log(e)
            }
        },
        async getPostDetails({commit}, postId) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                const data = await res.json()
                commit('updatePostDetailsState', data)
            } catch (e) {
                console.log(e)
            }
        },
        async setPost({commit}, postData) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: postData
                })
                const data = await res.json()
                commit('addPost', postData)
            } catch (e) {
                console.log(e)
            }
        }
    },
}