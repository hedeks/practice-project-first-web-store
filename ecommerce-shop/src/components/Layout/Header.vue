<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/Search.svg" />
      </div>
      <a href="#" class="header-logo">Avion</a>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <a href="#">
            <img src="/svg/Vector.svg" />
          </a>
        </div>
        <div class="header-top-right__user">
          <a href="#">
            <img src="/svg/User--avatar.svg" />
          </a>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <a :href="el.path" v-for="(el, i) in menu" :key="i" class="header-menu__link"> {{ el.name }}</a>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Plant pots",
          path: "/plant"
        },
        {
          name: "Ceramics",
          path: "/ceramics"
        },
        {
          name: "Tables",
          path: "/tables"
        },
        {
          name: "Chairs",
          path: "/chairs"
        },
        {
          name: "Tableware",
          path: "/tableware"
        },
        {
          name: "Cutlery",
          path: "/cutlery"
        }
      ]
    };
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 132px;
  background: #fff;

  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;

    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &__cart {
        margin-right: 16px;
      }
    }
  }

  &-logo {
    color: #22202e;
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 150%;
    text-decoration: none;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }

  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: #726E8D;
      text-decoration: none;
      font-size: 16px;
      &:hover {
        text-decoration: underline; 
      }
    }
  }
}
</style>