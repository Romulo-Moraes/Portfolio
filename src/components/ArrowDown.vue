<script>
    export default{
        
    }
</script>

<template>
    <div class="arrow">
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<style>

    .line{
        width: 20px;
        height: 5px;
        border-radius: 50px;
        background-color: white;
        position: absolute;
    }

    .line:nth-child(1){
        transform: rotateZ(60deg);
        translate: -5px;
    }

    .line:nth-child(2){
        transform: rotateZ(-60deg);
        translate: 5px;
    }

    .arrow{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 2px solid white;
        border-radius: 50%;
    }
</style>