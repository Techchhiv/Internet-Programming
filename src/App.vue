<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Category from './components/Category.vue'
import Promotion from './components/Promotion.vue'

import img1 from './assets/img/cat-13 1.png'
import img2 from './assets/img/cat-11 1.png'
import img3 from './assets/img/cat-12 1.png'
import img4 from './assets/img/cat-9 1.png'
import img5 from './assets/img/cat-3 1.png'
import img6 from './assets/img/cat-4 1.png'
import img7 from './assets/img/cat-1 4.png'
import img8 from './assets/img/cat-15 1.png'
import img9 from './assets/img/cat-14 1.png'
import img10 from './assets/img/cat-7 1.png'

import imgPro1 from './assets/img/cms-041.png'
import imgPro2 from './assets/img/Cat-011.png'
import imgPro3 from './assets/img/cms-031.png'

export default{
  components:{
    Category,
    Promotion
  },

  data() {
      return{
        cats:[
          {
            img: img1,
            itemName: 'Cake & Milk',
            itemCount: '14 items',
            bgColor: '#F2FCE4'
          },
          {
            img: img2,
            itemName: 'Peach',
            itemCount: '17 items',
            bgColor: '#FFFCEB'
          },
          {
            img: img3,
            itemName: 'Oganic Kiwi',
            itemCount: '23 items',
            bgColor: '#ECFFEC'
          },
          {
            img: img4,
            itemName: 'Red Apple',
            itemCount: '68 items',
            bgColor: '#FEEFEA'
          },
          {
            img: img5,
            itemName: 'Snack',
            itemCount: '34 items',
            bgColor: '#FFF3EB'
          },
          {
            img: img6,
            itemName: 'Black plum ',
            itemCount: '25 items',
            bgColor: '#FFF3FF'
          },
          {
            img: img7,
            itemName: 'Vegetables',
            itemCount: '65 items',
            bgColor: '#F2FCE4'
          },
          {
            img: img8,
            itemName: 'Headphone',
            itemCount: '33 items',
            bgColor: '#FFFCEB'
          },
          {
            img: img9,
            itemName: 'Cake & Milk',
            itemCount: '54 items',
            bgColor: '#F2FCE4'
          },
          {
            img: img10,
            itemName: 'Orange',
            itemCount: '63 items',
            bgColor: '#FFF3FF'
          },
        ],
        pros:[
          {
            img: imgPro1,
            text: 'Everyday Fresh & Clean with Our Products',
            bgButton: '#3BB77E',
            bgColor: '#F0E8D5',
          },
          {
            img:imgPro2,
            text: 'Make your Breakfast Healthy and Easy',
            bgButton: '#3BB77E',
            bgColor: '#F3E8E8',
          },
          {
            img:imgPro3,
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
