<template>
    <div class="page">
      <div class="product-items">
        <productCard v-for="product in products" :oneProduct="product"></productCard>
      </div>
    </div>
</template>

<script>
  import productCard from '../components/productCard.vue'

  export default {
    name: 'Practice.vue',
    components: {
      productCard
    },
    data () {
      return {
        products: [
          {
            name: "Джинсы",
            price: 400,
            img: 'https://lh3.googleusercontent.com/proxy/Zwki8VDpVHggNDX3q7gpmuv2_U29mejyENufq0d1nJMqqBTl7V3gp-FZpMfbNlAhYjWA0wUDNLY1_vHAoLNsvURkJai2SrbqeUARdu5SAZvEkBDCNoXChyj5m0pSb8KOSiy6FGFGiqP0imIYVvSzn6e0TCYv99OYDpIdh-hzOmk7xod81GFQpT2ZDozlLKFEKWoueS3dtH7cF_Jl1FShpCa5-7oJTCX5AwKsc3SA0NeH7fBrrQXotA'
          },
          {
            name: "Футболка",
            price: 200,
            img: 'https://tktimport.com/pictures/103587-m.jpg'
          },
          {
            name: "Кепка",
            price: 150,
            img: 'data:image/jpeg;base64,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'
          },
          {
            name: "Кросовки",
            price: 600,
            img: 'https://images.ua.prom.st/1226436357_zhenskie-krossovki-fila.jpg'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .lixt__text {
    width: min-content;
    height: 20px;
    border-radius: 20px;
    background-color: orange;
    font-size: 24px;
    margin: 20px;
    color: azure;
    padding: 5px;

  }

  .checkbox {
    float: left;
  }

  .product-items {
    display: flex;
    flex-wrap: wrap;
  }
</style>
