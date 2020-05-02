<template>
   <div class="page" @mousemove="mouseMove($event)" >
     <h2>Ваши покупки</h2>
     <div v-for="item in list" class="item">
       <div class="name">
         {{item.name}}
       </div>
       <div class="change-count">
         <el-button icon="el-icon-minus" class="btn" circle @click="dicr(item)" />
         <div class="count">
           <p>
             {{ item.count }}
           </p>
         </div>
         <el-button icon="el-icon-plus" class="btn" circle @click="incr(item)" />
       </div>
       <div class="total-price">
         {{ item.price * item.count }} Крон
       </div>
     </div>
     <div>
       Итого: {{totalPrice}}
     </div>
     <button class="buy-all" @click="win" :style="{'transform': `translate(${xcord}px,${ycord}px)`}">
       Купить Все
     </button>
   </div>
</template>

<script>
  export default {
    name: 'Basket',
    data () {
      return {
        list: [],
        totalPrice: 0,
        xcord: 0,
        ycord: 0
      }
    },
    mounted () {
      this.list = this.$store.state.buyed;
      console.log(this.list)
      this.list.forEach((elem) => {
        this.totalPrice += elem.price * elem.count
      })
    },
    methods: {
      dicr(val) {
        if (val.count > 0) {
          val.count--
          this.totalPrice -= val.price
        }
      },
      incr(val) {
        val.count++
        this.totalPrice += val.price
      },
      win() {
        alert("Поздравляю!! Вы потратили в пустую кучу времени и денег!!!")
      },
      mouseMove(e) {
        let rand = Math.random()
        let rand2 = Math.random()
        this.xcord = e.screenX*rand
        this.ycord = e.screenY*rand2
      }

    }
  }
</script>

<style scoped>
  .page {
    margin: 20px;
    height: 100vh;
  }
  .item div {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    background-color: navajowhite;
  }
  .name {
    width: 200px;
  }
  .buy-all {
    background-color: #78ff7d;
    width: 150px;
    height: 40px;
    margin: 8px;
    border-radius: 20px;
    font-size: large;
    outline: 0;
    outline-offset: 0;
  }
  /*@keyframes buy-all {*/
  /*  0% {transform:  translate(100px,100px)}*/
  /*  10% {transform:  translate(150px,300px)}*/
  /*  20% {transform:  translate(300px,220px)}*/
  /*  30% {transform:  translate(450px,10px)}*/
  /*  40% {transform:  translate(900px,30px)}*/
  /*  50% {transform:  translate(580px,800px)}*/
  /*  60% {transform:  translate(10px,90px)}*/
  /*  70% {transform:  translate(200px,200px)}*/
  /*  80% {transform:  translate(50px,900px)}*/
  /*  90% {transform:  translate(590px,500px)}*/
  /*  100% {transform:  translate(200px,130px)}*/
  /*}*/



</style>
