<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Category from './components/Category.vue'
import Promotion from './components/Promotion.vue'

export default{
  components:{
    Category,
    Promotion
  },

  data() {
      return{
        cats:[
          {
            img: 'src/assets/img/cat-13 1.png',
            itemName: 'Cake & Milk',
            itemCount: '14 items',
            bgColor: '#F2FCE4'
          },
          {
            img: 'src/assets/img/cat-11 1.png',
            itemName: 'Peach',
            itemCount: '17 items',
            bgColor: '#FFFCEB'
          },
          {
            img: 'src/assets/img/cat-12 1.png',
            itemName: 'Oganic Kiwi',
            itemCount: '23 items',
            bgColor: '#ECFFEC'
          },
          {
            img: 'src/assets/img/cat-9 1.png',
            itemName: 'Red Apple',
            itemCount: '68 items',
            bgColor: '#FEEFEA'
          },
          {
            img: 'src/assets/img/cat-3 1.png',
            itemName: 'Snack',
            itemCount: '34 items',
            bgColor: '#FFF3EB'
          },
          {
            img: 'src/assets/img/cat-4 1.png',
            itemName: 'Black plum ',
            itemCount: '25 items',
            bgColor: '#FFF3FF'
          },
          {
            img: 'src/assets/img/cat-1 4.png',
            itemName: 'Begetables',
            itemCount: '65 items',
            bgColor: '#F2FCE4'
          },
          {
            img: 'src/assets/img/cat-15 1.png',
            itemName: 'Headphone',
            itemCount: '33 items',
            bgColor: '#FFFCEB'
          },
          {
            img: 'src/assets/img/cat-14 1.png',
            itemName: 'Cake & Milk',
            itemCount: '54 items',
            bgColor: '#F2FCE4'
          },
          {
            img: 'src/assets/img/cat-7 1.png',
            itemName: 'Orange',
            itemCount: '63 items',
            bgColor: '#FFF3FF'
          },
        ],
        pros:[
          {
            img:'src/assets/img/cms-041.png',
            text: 'Everyday Fresh & Clean with Our Products',
            bgButton: '#3BB77E',
            bgColor: '#F0E8D5',
          },
          {
            img:'src/assets/img/Cat-011.png',
            text: 'Make your Breakfast Healthy and Easy',
            bgButton: '#3BB77E',
            bgColor: '#F3E8E8',
          },
          {
            img:'src/assets/img/cms-031.png',
            text: 'The best Organic Products Online',
            bgButton: '#FDC040',
            bgColor: '#E7EAF3',
          },
        ]
      }
  },

  
}

</script>

<template>
  <div class="catContainer">
    <Category v-for="cat in cats" :style="{backgroundColor: cat.bgColor}" :imgSrc="cat.img" :itemName="cat.itemName" :itemCount="cat.itemCount"></Category>
  </div>
  <div class="proContainer">
    <Promotion v-for="pro in pros" :bgButton="pro.bgButton" :text="pro.text" :style="{backgroundImage: `url(${pro.img})`, backgroundColor: pro.bgColor}"></Promotion>
  </div>
</template>

<style scoped>
  .catContainer,
  .proContainer{
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  :is(.catContainer,.proContainer)::-webkit-scrollbar{
    height: 0px;
  }
</style>
