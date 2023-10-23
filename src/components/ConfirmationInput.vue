<template>
    <div class="confirm_inputs">
        <input 
            v-for="item in 4" 
            :key="item" 
            type="text"
            v-maska
            data-maska="#"
            v-model="code[(item - 1)]"
            :class="code[(item - 1)] ? 'active' : ''"
            @keydown="handleKeyDown($event, (item - 1), code[(item - 1)])"
            @keyup="handleKeyUp($event, (item - 1), code[(item - 1)])"
            @input="$emit('update:confirm_code', code.join(''))"
            :ref="`confirm_input_${item - 1}`"
        >
    </div>
</template>

<script>
import { vMaska } from "maska";

export default {
    name: "Identifiction",
    props: {
        confirm_code: String
    },
    directives: { maska: vMaska },
    emits: ["update:confirm_code"],
    data () {
        return {
            code: ['', '', '', '']
        }
    },
    methods: {
        handleKeyDown (event, idx, value) {
            if (event.code === 'Tab') {
                event.preventDefault();
            }

            if (event.code === 'Backspace') {
                if (!value && idx !== 0) {
                    this.$refs[`confirm_input_${idx-1}`][0].focus();
                }
            }
        },
        handleKeyUp (event, idx, value) {
            if (event.code !== 'Backspace' && idx != 3 && value.match(/\d+/g)) {
                this.$refs[`confirm_input_${idx+1}`][0].focus();
            }
        },
    }
}
</script>

<style>

</style>