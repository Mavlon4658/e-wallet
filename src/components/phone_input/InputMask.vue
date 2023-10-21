<template>
    <div class="phone_input_wrapper">
        <div class="phone_input">
            <input type="tel" placeholder="Номер телефона">
            <button class="phone_input_button" @click="country_select = !country_select">
                <img :src="country['flag']" alt="">
                <span class="code">{{country['code']}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M4.5 6L8.5 10L12.5 6" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div :class="`countries_wrapper ${country_select ? 'active': ''}`">
            <input type="search" placeholder="Search country" v-model="serarch_input" class="country_search">
            <div class="countries">
                <button @click="selectCountry(item)" v-for="(item, idx) in countries_list" :key="idx" :class="item['name'] === country['name'] ? 'active' : ''">
                    <img :src="item['flag']">
                    <span>{{ item['name'] }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import countries from './country.json'

export default {
    data () {
        return {
            country: {
                "name": "Russia",
                "code": "+7",
                "iso": "RU",
                "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
                "mask": "(###)###-##-##"
            },
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
        }
    },
    created () {
        countries.forEach(item => {
            this.countries_list.push(item)
        });
    },
    methods: {
        selectCountry (item) {
            this.country = item;
            this.country_select = false;
            this.serarch_input = "";
        }
    }
}
</script>

<style>

</style>