import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            title: "Salom hammaga",
            send_confirm_code: false,
            phone: ''
    },
    mutations: {
        ConfirmCode(state) {
            state.send_confirm_code = !state.send_confirm_code
        },
        changePhoneNumber (state, phone) {
            state.phone = phone;
        }
    }
});

export default store;