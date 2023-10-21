<template>
    <div class="log_in">
        <div class="title">Вход в личный кабинет</div>
        <input-mask />
        <div class="text">Вы получите SMS-сообщение с кодом подтверждения для входа в личный кабинет</div>
        <Button title="Отправить код" />
    </div>
</template>

<script>
import InputMask from '../components/phone_input/InputMask.vue'
import Button from '../components/Button.vue'

export default {
    name: "LogIn",
    components: {
        InputMask,
        Button
    }
}
</script>

<style>

</style>