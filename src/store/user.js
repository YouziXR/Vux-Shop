// state
const state = {
    userID: ''
}

// mutations
const mutations = {
    setUserID(state, id) {
        state.userID = id
    }
}

export default {
    namespace: true,
    state,
    mutations
}