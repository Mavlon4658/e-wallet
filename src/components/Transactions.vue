<template>
    <div class="transactions" v-for="(user, idx) in 6" :key="idx">
        <img src="../assets/images/avatar.svg" alt="">
        <div class="text">
            <div class="text_top">
                <div class="name">Дмитрий Т.</div>
                <div class="money">+ $356.00</div>
            </div>
            <div class="text_bottom">
                <div class="path">Подписка на месяц</div>
                <div class="time">29.06.2023</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Transactions"
}
</script>

<style>

</style>