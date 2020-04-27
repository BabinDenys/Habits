<template>
  <div class="content">
    <div class="menu" @click="menuClick">
      <img class="menu__image" src="../assets/menu.png" alt="" >
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
</style>
