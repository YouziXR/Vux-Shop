// state
let state = {
    userID: 'unknown'
}

// mutations
let mutations = {
    setUserID(state, id) {
        state.userID = id
    }
}

export default {
    namespace: true,
    state,
    mutations
}