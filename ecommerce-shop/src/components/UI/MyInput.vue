<template>
    <div class="input-form">
        <input type="text" class="input-form-input" placeholder="your@email.com">
        <div class="input-form-link">
            <a href="#" class="input-form-link__a">Sign up</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.input-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
    max-width: 472px;

    &-input {
        width: 75%;
        height: 100%;
        border: none;
        outline: none;
        padding-left: 32px;
        &::placeholder {
        color: #2A254B;
        opacity: 0.2;
}
    }

    &-link {
        width: 25%;
        background-color: #2A254B;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &__a {
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>