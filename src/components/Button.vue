<script lang="ts">
    export default{
        props:{
            bgColor: String,
        }
    }
</script>

<template>
        <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
        </button>

</template>

<style>
    button{
        display: inline-flex;
        padding: 8px 15px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        border: none;

        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
</style>