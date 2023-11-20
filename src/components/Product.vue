<template>
    <div class="prod-con">
        <div class="prod-imgCon">
            <img :src="img" alt="">
        </div>
        <div class="prod-text" >
            <p class="p1">Hodo Foods</p>
            <p class="p2">{{ text }}</p>
            <div class="prod-star">
                <img v-for="col in getStar()" :src="col" alt="">
                <p class="p6">(4.0)</p>
            </div>
            <p class="p3">500 gram</p>
            <div class="prod-price">
                <div class="wrapper">
                    <p class="p4">$2.51</p>
                    <p class="p5">$2.00</p>
                </div>
                <Count></Count>
            </div>
        </div>
        <div class="prod-disp" :class="show" :style="{backgroundColor: bgColor}">
            <p>{{ dis }}</p>
           
        </div>
    </div>
</template>

<script>
    import Count from './Count.vue';
    export default{
        components:{
            Count,
        },
        
        props:{
            img: String,
            text:String,
            star1: String,
            star2: String,
            dis:String,
            show:String,
            bgColor: String,
            rate_pro: {
                type: Number,
                default: 4,
            }
        },
        methods:{
            getStar(){
                let star= [];
                for(let i=0;i<5;i++){
                    if(i<this.rate_pro){
                        star.push(this.star1);
                    }
                    else{
                        star.push(this.star2);
                    }
                }
                return star;
            }
        }
    }
</script>