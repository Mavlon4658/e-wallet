<template>
    <div class="log_in">
        <div :class="`log_in_wrapper ${$store.state.send_confirm_code ? 'd-none' : ''}`">
            <div class="title">Вход в личный кабинет</div>
            <input-mask v-model:phone="phone" />
            <div class="text">Вы получите SMS-сообщение с кодом подтверждения для входа в личный кабинет</div>
            <Button @btnClick="sendData" title="Отправить код"/>
        </div>

        <!-- Identifiction -->
        <div :class="`identifiction ${!$store.state.send_confirm_code ? 'd-none' : ''}`">
            <AuthIdentification 
                v-model:confirm_code="confirm_code" 
                :phone="phone" 
                @onPrevPage="changeToPrevPage"
                title="Введите код из сообщения" 
                description="Введите 4-значный код, который мы выслали по номеру"
            />
            <Button @btnClick="checkConfirmCode" :disabled="confirm_code.length < 4" title="Войти"/>
            <send-again-button title="Отправить еще раз"/>
        </div>
        <!-- End identifiction -->
    </div>
</template>

<script>
import InputMask from '../components/phone_input/InputMask.vue'
import Button from '../components/Button.vue'
import ConfirmationInput from '../components/ConfirmationInput.vue'
import AuthIdentification from '../components/AuthIdentification.vue'
import SendAgainButton from '../components/SendAgainButton.vue'

export default {
    name: "LogIn",
    components: {
        InputMask,
        Button,
        ConfirmationInput,
        AuthIdentification,
        SendAgainButton
    },
    data () {
        return {
            phone: '',
            confirm_code: '',
        }
    },
    methods: {
        sendData() {
            this.$store.commit('ConfirmCode');
        },
        checkConfirmCode () {},
        changeToPrevPage () {
            this.$store.commit('ConfirmCode')
        },
    }
}
</script>

<style>

</style>