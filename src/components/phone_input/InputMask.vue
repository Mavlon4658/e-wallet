<template>
    <div class="phone_input_wrapper">
        <div class="phone_input">
            <input 
                v-model="maskedValue"
                v-maska="bindedObject"
                :data-maska="mask" 
                placeholder="Номер телефона"
                autofocus
                @maska="$emit('update:phone', country['code'] + bindedObject['unmasked'])"
            >
            <button class="phone_input_button" @click="openCountrySelect()">
                <img :src="country['flag']" alt="">
                <span class="code">{{country['code']}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M4.5 6L8.5 10L12.5 6" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div :class="`countries_wrapper ${country_select ? 'active': ''}`">
            <input type="search" placeholder="Search country" v-model="serarch_input" ref="country_search_input" class="country_search">
            <div class="countries">
                <button @click="selectCountry(item)" v-for="(item, idx) in countries_list" :key="idx" :class="item['name'] === country['name'] ? 'active' : ''">
                    <img :src="item['flag']">
                    <span>{{ item['name'] }}</span>
                </button>
            </div>
        </div>
        <div v-if="select_mask" class="select_mask">
            <button @click="selectedMask(item)" v-for="(item, idx) in multiple_mask" :key="idx">
                {{country['code']}} {{item}}
            </button>
        </div>
    </div>
</template>

<script>
import countries from './country.json'
import { vMaska } from "maska";

export default {
    props: {
        phone: String
    },
    emits: ["update:phone"],
    directives: { maska: vMaska },
    data () {
        return {
            maskedValue: '',
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
            country: {
                "name": "Russia",
                "code": "+7",
                "iso": "RU",
                "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
                "mask": "(###)###-##-##"
            },
            mask: "(###)###-##-##",
            multiple_mask: [],
            select_mask: false,
            countries_list: [],
            country_select: false,
            serarch_input: ''
        }
    },
    watch: {
        serarch_input () {
            this.countries_list = [];
            countries.forEach(item => {
                if (item['name'].toUpperCase().includes(this.serarch_input.toUpperCase())) {
                    this.countries_list.push(item);
                }
            })
        },
    },
    created () {
        countries.forEach(item => {
            this.countries_list.push(item)
        });
    },
    methods: {
        openCountrySelect () {
            this.country_select = !this.country_select;
            this.$refs.country_search_input.focus();

        },
        selectCountry (item) {
            this.country = item;
            if (Array.isArray(item['mask'])) {
                this.multiple_mask = []
                this.multiple_mask = [...item['mask']]
                this.select_mask = true;
            } else {
                this.mask = item['mask'];
            }
            this.country_select = false;
            this.serarch_input = "";
            this.maskedValue = "";
        },
        selectedMask (item) {
            this.mask = item;
            this.select_mask = false;
        },
    }
}
</script>

<style>

</style>