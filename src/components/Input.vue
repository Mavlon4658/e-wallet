<template>
    <div class="input_wrapper">
        <input 
            :type="type" 
            v-model="value" 
            @input="$emit('update:value', value)"
            ref="input"
        >
        <label :class="value ? 'active' : ''" @click="$refs.input.focus()">{{placeholder}}</label>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        }
    },
    emits: ["update:value"],
    data () {
        return {
            value: ""
        }
    },
}
</script>

<style>

</style>