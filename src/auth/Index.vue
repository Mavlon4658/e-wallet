<template>
    <div class="auth_wrapper">
        <div class="auth_content">
            <div class="auth_title">
                <img src="../assets/images/logo.svg" alt="">
                <span>E-Wallet</span>
            </div>
            <router-view></router-view>
        </div>
        <img src="../assets/images/auth_bg.png" alt="" class="auth_bg">
    </div>
</template>

<script>
export default {
    name: 'Auth'
}
</script>

<style>

</style>