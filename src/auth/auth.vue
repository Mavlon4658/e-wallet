<template>
    <div class="auth_in">
        <img src="../assets/images/auth_card.png" alt="">
        <div class="title">Создать аккаунт электронного кошелька</div>
        <router-link :to="{ name: 'Register' }" class="main_btn">Зарегистрироваться</router-link>
        <div class="text">
            <span>У вас есть счет?</span>
            <router-link :to="{name: 'LogIn'}" class="link_text">Войти</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Auth",
}
</script>

<style>

</style>