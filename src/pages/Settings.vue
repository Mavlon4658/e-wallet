<template>
    <div>
        <div id="profile">
            <div class="profile_header">
                <div class="profile_avatar">
                    <span>Д</span>
                </div>
                <div class="profile_name">
                <h3>Дмитрий Толмачев</h3>
                <p>+7 (963) 214-90-12</p>
                </div>
            </div>
            <div class="profile_main">
                <h2>Данные об аккаунте</h2>
                <div class="profile_main_contact">
                <div class="profile_block">
                    <h4>E-mail:</h4>
                    <p>Dmitrii@mail.ru</p>
                </div>
                <div class="profile_block">
                    <h4>Телефон</h4>
                    <p>+7 (963) 214-90-12</p>
                </div>
                <div class="profile_block">
                    <h4>ID пользователя</h4>
                    <p>124123421</p>
                </div>
                <div class="profile_block">
                    <h4>Дата регистрации</h4>
                    <p>12.04.2023</p>
                </div>
                </div>
                <router-link class="profile_btn" to="/">
                Выйти из аккаунта
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                    opacity="0.4"
                    d="M10.2621 4.04211V3.34236C10.2621 1.81611 9.0246 0.578613 7.49835 0.578613H3.8421C2.3166 0.578613 1.0791 1.81611 1.0791 3.34236V11.6899C1.0791 13.2161 2.3166 14.4536 3.8421 14.4536H7.50585C9.0276 14.4536 10.2621 13.2199 10.2621 11.6981V10.9909"
                    stroke="white"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M15.3569 7.51599H6.32617"
                    stroke="white"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    d="M13.1611 5.32971L15.3571 7.51596L13.1611 9.70296"
                    stroke="white"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
                </router-link>
            </div>
        </div>
        <div id="qr_code">
            <div class="qr_img">
                <img class="qr_main_img" src="../assets/images/qr_code.png" alt="">
                <img class="qr_avatar" src="../assets/images/avatar.svg" alt="">
            </div>
            <div class="qr_name">
                <h4>Это ваш  QR-code</h4>
                <p>Поделитесь кодом, чтобы получать оплату</p>
                <button class="qr_btn" download>
                    Скачать QR-code
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path opacity="0.4" d="M12.1067 5.26575C11.7681 5.26575 11.3196 5.25825 10.7611 5.25825C9.39926 5.25825 8.27946 4.131 8.27946 2.75625V0.34425C8.27946 0.1545 8.12723 0 7.93936 0H3.97327C2.12203 0 0.625 1.5195 0.625 3.38175V11.463C0.625 13.4168 2.19332 15 4.12772 15H10.0342C11.8795 15 13.375 13.4902 13.375 11.6265V5.60325C13.375 5.41275 13.2235 5.259 13.0349 5.25975C12.7178 5.262 12.3376 5.26575 12.1067 5.26575" fill="#C7FF24"/>
                        <path opacity="0.4" d="M10.063 0.425405C9.83877 0.192155 9.44727 0.352655 9.44727 0.675905V2.65366C9.44727 3.48316 10.1298 4.16566 10.9593 4.16566C11.4828 4.17166 12.2088 4.17316 12.8253 4.17166C13.141 4.17091 13.3015 3.79366 13.0825 3.56566C12.2913 2.74291 10.8745 1.26841 10.063 0.425405" fill="#C7FF24"/>
                        <path d="M9.32954 8.03163C9.11054 7.81488 8.75804 7.81338 8.53904 8.03313L7.34729 9.23088V5.61063C7.34729 5.30238 7.09679 5.05188 6.78854 5.05188C6.48029 5.05188 6.22979 5.30238 6.22979 5.61063V9.23088L5.03729 8.03313C4.81904 7.81338 4.46579 7.81488 4.24754 8.03163C4.02854 8.24913 4.02854 8.60238 4.24529 8.82138L6.39254 10.9784H6.39329C6.44429 11.0294 6.50504 11.0706 6.57329 11.0991C6.64079 11.1269 6.71429 11.1419 6.78854 11.1419C6.86354 11.1419 6.93704 11.1269 7.00454 11.0984C7.07129 11.0706 7.13204 11.0294 7.18304 10.9791L7.18454 10.9784L9.33104 8.82138C9.54854 8.60238 9.54854 8.24913 9.32954 8.03163" fill="#C7FF24"/>
                    </svg>    
                </button>
            </div>
        </div>
        <div id="QRPay">
            <div class="qrpay_text">
                <h3>Платите с помощью QR-code</h3>
                <p>Теперь вы можете переводить средства просто наведя камеру на QR-code</p>
            </div>
            <div class="qrpay_img">
                <div class="qrpay_bg">
                    <div class="main_images">
                        <img class="main_img" src="../assets/images/qr_pay_qr.png" alt="">
                        <img class="avatar_icon" src="../assets/images/avatar.svg" alt="">
                    </div>
                    <img class="hand_img" src="../assets/images/hand_money.png" alt="">
                    <img class="close_img" src="../assets/images/qrpay_close.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings",
};
</script>

<style>
</style>