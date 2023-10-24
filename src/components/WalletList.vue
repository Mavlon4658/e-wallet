<template>
    <div class="swiper_wrapper">
        <swiper
            :slides-per-view="2"
            :space-between="16"
            :centeredSlides="true"
            :loop="true"
            :pagination="{
                clickable: true,
                el: pagination
            }"
            :navigation="{
                prevEl: prev,
                nextEl: next,
            }"
            :modules="modules"
            class="wallet_slider"
        >
            <swiper-slide v-for="i in 5" :key="i">
                <div class="slider_item">
                    <svg width="155" height="102" viewBox="0 0 155 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.15">
                            <path d="M108.899 -93.6801C108.899 -93.6801 89.4864 -53.4664 94.9906 -27.7245C101.25 1.54773 131.234 4.19297 143.843 31.3417C154.472 54.2277 139.792 76.8454 157.912 94.4069C166.905 103.123 186.153 109.602 186.153 109.602" stroke="#262329" stroke-width="0.811107"/>
                            <path d="M127.685 -113.657C127.685 -113.657 101.917 -77.1876 103.108 -50.8908C104.463 -20.9875 133.602 -13.4422 141.57 15.4119C148.286 39.7356 130.083 59.6278 145.064 79.9329C152.5 90.0105 170.419 99.5696 170.419 99.5696" stroke="#262329" stroke-width="0.811107"/>
                            <path d="M47.0706 -58.5843C47.0706 -58.5843 51.5905 -14.1593 69.7597 4.88849C90.4208 26.5486 117.35 13.1009 142.309 29.6268C163.348 43.5579 162.686 70.514 187.319 75.9863C199.545 78.7022 219.336 74.1422 219.336 74.1422" stroke="#262329" stroke-width="0.811107"/>
                        </g>
                    </svg>
                    <div class="currency">USD</div>
                    <div class="money">$ 21,860.02</div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper_bottom">
            <button ref="prev" class="swiper_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path d="M7.125 1.75L1.875 7L7.125 12.25" stroke="#C7FF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="swiper_pagination" ref="pagination"></div>
            <button ref="next" class="swiper_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path d="M1.875 1.75L7.125 7L1.875 12.25" stroke="#C7FF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    name: "WalletList",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        const pagination = ref(null)
        return {
            modules: [Pagination, Navigation],
            prev,
            next,
            pagination
        };
    },
};
</script>