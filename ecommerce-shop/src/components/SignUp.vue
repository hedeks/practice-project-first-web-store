<template>
    <div class="signup">
        <div class="signup-form">
            <div class="signup-form-text">
                <div class="signup-form-title">
                    Join the club and get the benefits
                </div>
                <div class="signup-form-description">
                    <span>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and
                        more</span>
                </div>
                <div class="signup-form-checkmarks">
                    <div class="signup-form-checkmarks-element">
                        <img src="/svg/Checkmark--filled.svg" alt="Checkmark--filled">
                        <span>Exclusive offers</span>
                    </div>
                    <div class="signup-form-checkmarks-element">
                        <img src="/svg/Checkmark--filled.svg" alt="Checkmark--filled">
                        <span>Free events</span>
                    </div>
                    <div class="signup-form-checkmarks-element">
                        <img src="/svg/Checkmark--filled.svg" alt="Checkmark--filled">
                        <span>Large discounts</span>
                    </div>
                </div>
            </div>
            <MyInput />
        </div>
    </div>
</template>
<script>
import MyInput from './UI/MyInput.vue';

export default {

    components: {
        MyInput
    }
}
</script>
<style lang="scss" scoped>
.signup {
    height: 444px;
    background: url('/img/signup_background.jpg');
    padding: 97px 473px;

    &-form {

        &-text {
            color: white;
            width: 494px;
        }

        &-title {
            font-size: 32px;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 12px;
            letter-spacing: .5px;
            text-align: center;
        }

        &-description {
            padding: 0 5px;
            text-align: center;
            margin-bottom: 30px;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
        }

        &-checkmarks {
            display: flex;
            flex-direction: row;
            justify-content: center;
            &-element {
                margin-right: 18px;
                margin-left: 18px;
                margin-bottom: 40px;
                img {
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>