<template>
    <div>
        <div v-if="prevButton" class="link_text_wrapper">
            <button @click="$emit('onPrevPage')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#C7FF24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Изменить номер</span>
            </button>
        </div>
        <div class="identifiction_title">{{title}}</div>
        <div class="identifiction_description">{{description}} <span>{{phone}}</span></div>
        <ConfirmationInput v-model:confirm_code="code" />
    </div>
</template>

<script>
import ConfirmationInput from './ConfirmationInput.vue'
export default {
    name: "AuthIdentifiction",
    props: {
        phone: {
            type: String,
            defalult: ''
        },
        prevButton: {
            type: Boolean,
            default: true,
        },
        confirm_code: String,
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    components: {
        ConfirmationInput,
    },
    emits: ["update:confirm_code", "onPrevPage"],
    data () {
        return {
            code: ''
        }
    },
    watch: {
        code () {
            this.$emit('update:confirm_code', this.code);
        }
    }
}
</script>

<style>

</style>