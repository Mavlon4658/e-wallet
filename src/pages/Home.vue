<template>
    <div class="home">
        <WalletList />
        <Payment />
        <div class="title">Транкзации</div>
        <Transactions />
    </div>
</template>

<script>
import WalletList from "../components/WalletList.vue"
import Payment from '../components/Payment.vue'
import Transactions from '../components/Transactions.vue'

export default {
    name: "Home",
    components: {
        WalletList,
        Payment,
        Transactions,
    }
}
</script>

<style>

</style>