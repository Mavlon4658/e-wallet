import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            title: "Salom hammaga"
        }
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // }
    }
});

export default store;