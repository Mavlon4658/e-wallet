<template>
    <div class="home">   
        <div class="main_container">
        <Header />
        <div class="home_wrapper">
            <Profile />
            <PayModal />
            <QRPay />
        </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Profile from "../components/Profile.vue";
import PayModal from "../components/PayModal.vue";
import QRPay from '../components/QRPay.vue';
export default {
    components: {
        Header,
        Profile,
        PayModal,
        QRPay
    }
}
</script>

<style>

</style>