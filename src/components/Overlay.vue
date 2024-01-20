<script>
    export default{
        props: [
            'color',
            'opacity',
            'zindex',
            'height'
        ],
        
        computed: {
            cssProps(){
                return {
                    '--overlay-background-color' : this.$props.color,
                    '--overlay-opacity' : this.$props.opacity,
                    '--overlay-z-index' : this.$props.zindex,
                    '--overlay-height' : this.$props.height
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
        height: var(--overlay-height);
        background-color: var(--overlay-background-color); 
        opacity: var(--overlay-opacity);
        z-index: var(--overlay-z-index);
    }
</style>