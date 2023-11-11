<script lang="ts">
    import Buttons from './Button.vue'

    export default{
        components:{
            Buttons,
        },
        props:{
            bgButton: String,
            text: String,
            imgSrc: String,
        }
    }
</script>

<template>
    <div class="pro-container">
        <p class="pro-p">{{ text }}</p>
        <Buttons :style="{backgroundColor: bgButton}"></Buttons>
        <div class="proImg">

        </div>
    </div>

</template>

<style>
    .pro-container{
        width: calc(512px - 2*48px);
        height: calc(300px - 2*0px);
        flex-shrink: 0;
        background-position: bottom right;
        background-repeat: no-repeat;
        display: flex;
        align-items: start;
        justify-content: center;
        padding: 0 48px;
        flex-direction: column;
        border-radius: 10px;
        gap: 10px;
    }
    .pro-p{
        width: 240px;
        word-wrap: break-word;
        color: var(--NestMart-TextHeading, #253D4E);

        /* NestMart/Heading 4 */
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
    }
</style>
