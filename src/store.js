import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
        },
        clearUserData() {
            axios.post('/api/account/logout').finally(() => {
                localStorage.removeItem('user')
                location.reload()
            })
        },
        updateUser(state) {
            axios.get('/api/user').then((response) => {
                state.user = response.data
                localStorage.setItem('user', JSON.stringify(response.data))
            })
        },
    },
    actions: {
        login({ commit }, data) {
            commit('setUserData', data)
        },
        logout({ commit }) {
            commit('clearUserData')
        },
        updateUser({ commit }) {
            commit('updateUser')
        },
    },
    getters: {
        user: (state) => state.user,
    },
})
