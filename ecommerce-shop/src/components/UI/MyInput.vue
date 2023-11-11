<template>
    <div class="input-form">
        <input type="text" class="input-form-input" placeholder="your@email.com"
            :class="[{ transparent: color === 'transparent' }, {white: color === 'white'}]">
        <div class="input-form-link" :class="[{ transparentlink: color === 'transparent' }, {whitelink: color === 'white'}]">
            <a href="#" class="input-form-link__a" :class="[{ transparentlink: color === 'transparent' }, {whitelink: color === 'white'}]">Sign up</a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String
        }
    }
}
</script>
<style lang="scss">

.whitelink {
    background: #2A254B;
    color: white
}
.transparentlink {
    background: white;
    color: #2A254B;
}

.white {
    background: rgba(255, 255, 255, 1);
    border: none;
    outline: none;
    color: #2A254B;
    &::placeholder {
    color: #2A254B;
    opacity: 0.2;
 }
}

.transparent {
    background: rgba(255, 255, 255, .15);
    border: none;
    outline: none;
    color: white;
    &::placeholder {
        color: white;
        opacity: 0.9;
    }
}

.input-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
    max-width: 100%;

    &-input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding-left: 32px;
    }

    &-link {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &__a {
            text-decoration: none;

            &:hover {
                color: lightgray;
            }
        }
    }
}</style>