<template>
  <div class="content">
    <div class="menu" >
      <img class="menu__image" src="../assets/menu.png" alt="" @click="menuClick">
      <router-link to="/basket">
        <img class="basket__image"
             src="https://c7.hotpng.com/preview/833/426/329/shopping-cart-icon-shopping-cart-png.jpg"
             alt=""
        >
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header.vue',
    methods: {
      menuClick () {
        this.$store.commit('menuClick')
      }
    }
  }
</script>

<style scoped>
.content {
  background-color: orangered;
  width: 100%;
}

.menu__image {
  width: 50px;
  height: auto;
}
  .basket__image {
    width: 50px;
    height: auto;
    float: right;
  }
</style>
