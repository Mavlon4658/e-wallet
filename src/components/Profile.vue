<template>
  <div id="profile">
    <div class="profile_header">
        <div class="profile_avatar">
            <span>Д</span>
        </div>
        <div class="profile_name">
            <h3>Дмитрий Толмачев</h3>
            <p>+7 (963) 214-90-12</p>
        </div>
    </div>
    <div class="profile_main">
        <h2>Данные об аккаунте</h2>
        <div class="profile_main_contact">
            <div class="profile_block">
                <h4>E-mail:</h4>
                <p>Dmitrii@mail.ru</p>
            </div>
            <div class="profile_block">
                <h4>Телефон</h4>
                <p>+7 (963) 214-90-12</p>
            </div>
            <div class="profile_block">
                <h4>ID пользователя</h4>
                <p>124123421</p>
            </div>
            <div class="profile_block">
                <h4>Дата регистрации</h4>
                <p>12.04.2023</p>
            </div>
        </div>
        <router-link class="profile_btn" to="/">
            Выйти из аккаунта
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path opacity="0.4" d="M10.2621 4.04211V3.34236C10.2621 1.81611 9.0246 0.578613 7.49835 0.578613H3.8421C2.3166 0.578613 1.0791 1.81611 1.0791 3.34236V11.6899C1.0791 13.2161 2.3166 14.4536 3.8421 14.4536H7.50585C9.0276 14.4536 10.2621 13.2199 10.2621 11.6981V10.9909" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3569 7.51599H6.32617" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.1611 5.32971L15.3571 7.51596L13.1611 9.70296" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </router-link>
    </div>
  </div>
  <QRCode />
</template>

<script>
import QRCode from "../components/QRCode.vue";
export default {
    name: "Profile",
    components: {
        QRCode,
    }
}
</script>

<style>

</style>