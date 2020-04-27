<template>
    <div class="content">
      <div class="content__item">
        <router-link to="/">
          <span>
            Главная страница
          </span>
        </router-link>
      </div>
      <div class="content__item">
        <router-link to="/myHabits">
          <span>
            Список привычек
          </span>
        </router-link>
      </div>
      <div class="content__item">
        <router-link to="/addHabit">
          <span>
            Добавить привычку
          </span>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.content {
  width: 100%;
  height: auto;
  background-color: #ff5815;
  padding: 15px 0;
}

.content__item {
  width: auto;
  height: auto;
  margin: 0 0 10px 20px;
}

.content__item span {
  font-size: 26px;
  color: azure;
}
</style>
