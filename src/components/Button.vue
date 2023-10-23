<template>
    <button 
        @click="$emit('btnClick')" 
        :class="`main_btn ${disabled ? 'main_btn_disabled' : ''}`"
        :disabled="disabled"
    >
        {{title}}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        title: String,
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>