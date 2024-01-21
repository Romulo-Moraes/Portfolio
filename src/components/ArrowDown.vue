<script>
    export default{
        props: [
            'dimensions'
        ],
        
        computed: {
            cssProps(){
                return {
                    '--arrow-dimensions' : this.$props.dimensions
                }
            }
        }
    }
</script>

<template>
    <div class="arrow" :style="cssProps">
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<style>

    .line{
        width: 50%;
        height: 12.5%;
        border-radius: 50px;
        background-color: white;
        position: relative;
    }

    .line:nth-child(1){
        transform: rotateZ(60deg);
        translate: 25%;
    }

    .line:nth-child(2){
        transform: rotateZ(-60deg);
        translate: -25%;
    }

    .arrow{
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--arrow-dimensions);
        height: var(--arrow-dimensions);
        border: 2px solid white;
        border-radius: 50%;
    }
</style>