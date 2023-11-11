<script lang="ts">
    export default{
        props:{
            imgSrc: String,
            itemName: String,
            itemCount: String,
        }
    }
</script>

<template>
    <div class="cat-container">
        <div class="imgContainer">
            <img :src="imgSrc" alt="">
        </div>
        <p class="cat-pro">{{ itemName }}</p>
        <p class="cat-pro">{{  itemCount }}</p>
    </div>
</template>

<style>
    .cat-container{
        width: 136px;
        height: 177px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 1px solid var(--NestMart-Brand-1-Light, #81B13D);
        

        /* Shadow-1 */
        box-shadow: 20px 20px 40px 0px rgba(24, 24, 24, 0.07);
    }

    .cat-pro{
        color: var(--NestMart-TextHeading, #253D4E);
        text-align: center;

        /* NestMart/Heading 6 */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 0px; /* 125% */
        letter-spacing: -0.006px;
        word-wrap: break-word;
    }

    .cat-pro:last-child{
        color: var(--NestMart-Text-Muted, #B6B6B6);
        text-align: center;

        /* NestMart/ Text xs */ 
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 10px; /* 150% */

    }

    .imgContainer{
        justify-content: center;
        align-items: center;
        display: flex;
        width: 100%;
        height: 110px;
        flex-shrink: 0;
    }

</style>