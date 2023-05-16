export default {
    state: {
        users: [],
        userDetails: null,
    },
    getters: {
        getStateUsers(state) {
            return state.users
        },
        getStateUserDetails(state) {
            return state.userDetails
        },
    },
    mutations: {
        updateUsersState(state, users) {
            state.users = users
        },
        updateUserDetails(state, userDetails) {
            state.userDetails = userDetails
        },
    },
    actions: {
        async getUsers({commit}, params) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${params.limit}&_page=${params.page}`)
                const data = await res.json()
                commit('updateUsersState', data)
            } catch (e) {
                console.log(e)
            }
        },
        async getUserDetails({commit}, userId) {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                const data = await res.json()
                commit('updateUserDetails', data)
            } catch (e) {
                console.log(e)
            }
        }
    },
}