<template>
    <div class="footer">
        <div class="footer-upper">
            <div class="footer-upper-left">
                <div class="footer-upper-left-menu">
                    <span class="footer-upper-left-menu-title">Menu
                    </span>
                    <div class="footer-upper-left-menu-links">
                        <router-link to="/products" class="footer-upper-left-menu-links__a">New arrivals</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Best sellers</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Recently viewed</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Popular this week</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">All products</router-link>
                    </div>
                </div>
                <div class="footer-upper-left-categories">
                    <span class="footer-upper-left-menu-title">Categories</span>
                    <div class="footer-upper-left-menu-links">
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Crockery</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Furniture</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Homeware</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Plant pots</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Chairs</router-link>
                        <router-link to="/products" class="footer-upper-left-menu-links__a">Crockery</router-link>
                    </div>
                </div>
                <div class="footer-upper-left-ourcompany">
                    <span class="footer-upper-left-menu-title">Our company</span>
                    <div class="footer-upper-left-menu-links">
                        <router-link to="/about" class="footer-upper-left-menu-links__a">About us</router-link>
                        <router-link to="/contact" class="footer-upper-left-menu-links__a">Contact us</router-link>
                        <router-link to="/privacy" class="footer-upper-left-menu-links__a">Privacy</router-link>
                        <router-link to="/policy" class="footer-upper-left-menu-links__a">Returns policy</router-link>
                    </div>
                </div>
            </div>
            <div class="footer-upper-right">
                <span class="footer-upper-left-menu-title footer-upper-right-title">
                    Join our mailing list
                </span>
                <div class="footer-upper-right-input">
                    <MyInput :color="'transparent'" />
                </div>
            </div>
        </div>
        <div class="footer-lower">
            <div class="footer-lower-left">
                <div class="footer-lower-left-title">
                    Copyright 2022 Avion LTD
                </div>
            </div>
            <div class="footer-lower-right">
                <div class="footer-lower-right-icons">
                    <img src="/svg/Logo--linkedin.svg" alt="Logo--linkedin" class="footer-lower-right-icons__icon">
                    <img src="/svg/Logo--facebook.svg" alt="Logo--facebook" class="footer-lower-right-icons__icon">
                    <img src="/svg/Logo--instagram.svg" alt="Logo--instagram" class="footer-lower-right-icons__icon">
                    <img src="/svg/Logo--skype.svg" alt="Logo--skype" class="footer-lower-right-icons__icon">
                    <img src="/svg/Logo--twitter.svg" alt="Logo--twitter" class="footer-lower-right-icons__icon">
                    <img src="/svg/Logo--pinterest.svg" alt="Logo--pinterest" class="footer-lower-right-icons__icon">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyInput from '@/components/UI/MyInput.vue';

export default {
    components: { MyInput }
}
</script>
<style lang="scss">
.footer {
    height: 380px;
    background: #2A254B;
    padding: 58px 82px;
    color: white;

    &-upper {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #4E4D93;
        padding-bottom: 48px;

        &-left {
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            &-categories {
                margin-right: 109px;
            }

            &-menu {
                margin-right: 109px;

                &-title {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                &-links {
                    display: flex;
                    flex-direction: column;

                    &__a {
                        margin-top: 12px;
                        text-decoration: none;
                        color: white;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;

                        &:hover {
                            color: lightgray;
                        }
                    }
                }
            }
        }

        &-right {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &-input {
                width: 100%;
            }

            &-title {
                margin-bottom: 16px;
            }
        }
    }

    &-lower {
        width: 100%;
        height: 22%;
        display: flex;
        align-items: center;

        &-left {
            width: 50%;

            &-title {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }

        &-right {
            display: flex;
            justify-content: flex-end;
            width: 50%;

            &-icons {
                display: flex;
                flex-direction: row;

                &__icon {
                    margin-left: 24px;
                }
            }
        }
    }
}
</style>