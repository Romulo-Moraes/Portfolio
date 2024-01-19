<script>
    export default{
        props: [
            'color',
            'opacity',
            'zindex'
        ],
        
        computed: {
            cssProps(){
                return {
                    '--overlay-background-color' : this.$props.color,
                    '--overlay-opacity' : this.$props.opacity,
                    '--overlay-z-index' : this.$props.zindex
                }
            }
        }
    }
</script>

<template>
    <div class="configurableOverlay" :style="cssProps">
        
    </div>
</template>

<style>
    .configurableOverlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--overlay-background-color); 
        opacity: var(--overlay-opacity);
        z-index: var(--overlay-z-index);
    }
</style>