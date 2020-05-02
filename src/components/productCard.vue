<template>
    <div class="product">
      <h1>
        {{ oneProduct.name }}
      </h1>
      <img :src="oneProduct.img" alt="" class="img">
      <p>
        {{ oneProduct.price }} Крон
      </p>

      <div class="counter">
        <el-button icon="el-icon-minus" class="btn" circle @click="dicr" />
        <div class="count">
          <p>
             {{ counter }}
          </p>
        </div>
        <el-button icon="el-icon-plus" class="btn" circle @click="incr" />
      </div>

      <el-button type="success" plain round class="buy" @click="buyOneProd(oneProduct)">Добавить в корзину</el-button>
    </div>
</template>

<script>
  export default {
    name: 'productCard',
    props: ['oneProduct'],
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      incr() {
        this.counter++
      },
      dicr() {
        if (this.counter > 0) {
          this.counter--
        }
      },
      buyOneProd(prod) {
        let product = {
          name: prod.name,
          price: prod.price,
          count: this.counter,
        }
        if (this.counter !== 0) {
          this.$store.commit('addProduct', product )
          console.log(this.$store.state.buyed)
        } else {
          alert('Простите, но вы не выбрали количество!!!')
        }


      }
    }

  }
</script>

<style scoped>
  .product {
    width: 250px;
  }

  .img {
    width: 250px;
    height: 200px;
  }

  .product{
    margin: 20px;
    text-align: center;
  }
  .buy {
    margin: 20px;
  }

  .counter {
    display: flex;
    justify-content: space-between;
  }
  .count {
    width: 50px;

  }
  p {
    margin: 10px 0;

  }
  .btn {
    margin: 0 20px;
  }
</style>
