<template>
    <button class="again_btn">{{title}}</button>
</template>

<script>
export default {
    name: "SendAgainButton",
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>

</style>