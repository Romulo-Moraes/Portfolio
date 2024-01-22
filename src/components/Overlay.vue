<script>
import { ref } from 'vue';

    export default{
        props: [
            'color',
            'opacity',
            'zindex',
            'height',
            'startInvisible'
        ],
        
        computed: {
            style(){

            },

            cssProps(){
                return {
                    '--overlay-background-color' : this.$props.color,
                    '--overlay-opacity' : (this.$props.startInvisible == true ? 0 : this.$props.opacity),
                    '--overlay-z-index' : this.$props.zindex,
                    '--overlay-height' : this.$props.height
                }
            }
        },

        data(){
            return {
                overlayReference : ref(null)      
            }
        },

        methods: {
            toggleOverlayOpacity(){
                switch(Number(this.$refs.overlayReference.style.opacity)){
                    case 0:
                        this.$refs.overlayReference.style.opacity = this.$props.opacity;
                        break;
                    default:
                        this.$refs.overlayReference.style.opacity = 0;
                        break
                }
            }
        }
    }
</script>

<template>
    <div class="configurableOverlay" :style="cssProps" ref="overlayReference">
        
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