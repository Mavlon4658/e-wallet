<template>
    <div class="register">
        <div class="step_head">
            <div v-for="i in 3" :key="i" :class="`step_head_item ${i <= registre_step ? 'active' : ''}`"></div>
        </div>

        <!-- Step 1 -->
        <div :class="`step step_1 ${registre_step == 1 ? 'active' : ''}`">
            <div class="title">Регистрация</div>
            <div class="inputs">
                <Input type="text" v-model:value="user.name" placeholder="Ваше имя" />
                <Input type="email" v-model:value="user.email" placeholder="Email" />
                <InputMask v-model:phone="user.phone" />
            </div>
            <Button @btnClick="sendData()"  title="Продолжить"/>
        </div>
        <!-- End steop 1 -->

        <!-- Step 1 -->
        <div :class="`step step_2 ${registre_step == 2 ? 'active' : ''}`">
            <AuthIdentification 
                v-model:confirm_code="confirm_code" 
                :phone="user.phone" 
                @onPrevPage="changeToPrevPage" 
                title="Введите код из сообщения" 
                description="Введите 4-значный код, который мы выслали по номеру"
            />
            <Button 
                @btnClick="continueStage()" 
                :disabled="confirm_code.length < 4" 
                title="Продолжить" 
            />
            <send-again-button title="Отправить еще раз"/>
        </div>
        <!-- End steop 1 -->

        <!-- Step 1 -->
        <div :class="`step step_3 ${registre_step == 3 ? 'active' : ''}`">
            <AuthIdentification 
                v-model:confirm_code="pin_code" 
                :prevButton="false"
                title="Установите пин-код" 
                description="Придумайте 4-значный пин-код, который вы будете использовать при подтверждении транзакций"
            />
            <Button 
                @btnClick="savePinCode()"
                :disabled="pin_code.length < 4" 
                title="Продолжить" 
            />
        </div>
        <!-- End steop 1 -->
    </div>
</template>

<script>
import Input from "../components/Input.vue"
import InputMask from "../components/phone_input/InputMask.vue"
import Button from "../components/Button.vue"
import AuthIdentification from '../components/AuthIdentification.vue'
import SendAgainButton from '../components/SendAgainButton.vue'

export default{
    name: "Register",
    components: { 
        Input,
        InputMask,
        Button,
        AuthIdentification,
        SendAgainButton,
    }, 
    data () {
        return {
            registre_step: 1,
            user: {
                name: '',
                email: '',
                phone: ''
            },
            confirm_code: '',
            pin_code: ''
        }
    },
    methods: {
        sendData () {
            console.log(this.user);
            this.registre_step = 2;
        },
        changeToPrevPage () {
            this.registre_step = 1;
        },
        continueStage () {
            this.registre_step = 3;
        },
        savePinCode () {
            console.log("save pin code");
        }
    }
}
</script>

<style>

</style>