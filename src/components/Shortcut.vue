<script >
    import { ref } from 'vue';

    export default{
        props: [
            'backcolor',
            'content',
            'theContentIsString',
            'adjustImageDimensions',
            'shortcutText'
        ],

        computed: {
            cssProps(){
                const returnValue = {
                    '--shortcut-background-color' : '',
                    '--shortcut-border-color' : '',
                    '--shortcut-foreground-color' : '',
                    '--shortcut-image-dimensions' : this.$props.adjustImageDimensions,
                }

                if(this.$props.backcolor == "dark"){
                    returnValue['--shortcut-background-color'] = '#111111';
                    returnValue['--shortcut-border-color'] = '#FFD645';
                    returnValue['--shortcut-foreground-color'] = 'white';
                }else{
                    returnValue['--shortcut-background-color'] = '#E2E2E2';
                    returnValue['--shortcut-border-color'] = '#000000';
                    returnValue['--shortcut-foreground-color'] = 'black';
                }

                return returnValue;
            }
        },

        data(){
            return{
                componentRef : ref(null),
                elementIsVisible : false
            }
        },

        methods : {
            getImageURL(){
                return new URL(`../assets/images/${this.$props.content}`, import.meta.url).href;
            },

            changeShortcutOpacity(opacity, toIncrement){
                let intervalHandler = setInterval(() => {
                    this.$refs.componentRef.style.opacity = opacity.toString();

                    opacity = toIncrement ? opacity + 0.1 : opacity - 0.1; 

                    if(toIncrement ? opacity > 1 : opacity < 0){
                        clearInterval(intervalHandler);
                    }
                }, 25);
            },

            toggleVisibility(){
                
                switch(this.elementIsVisible){
                    case true:
                        this.changeShortcutOpacity(1, false);
                        break;
                    case false:
                        this.changeShortcutOpacity(0, true);
                        break;
                }

                this.elementIsVisible = !this.elementIsVisible;
            }
        }
    }
</script>

<template>
    <section ref="componentRef" class="shortcut-component">
        <div class="optionCircle" :style="cssProps">
            <p v-if="theContentIsString">{{ content }}</p>
            <img v-else :src="getImageURL()" alt="">
        </div>
        <p class="component-text">{{ shortcutText }}</p>
    </section>
</template>

<style>
    .shortcut-component{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 15%;
        opacity: 0;
        z-index: 2;
    }

    .component-text{
        margin: 0;
        color: white;
    }

    .optionCircle{
        width: 50px;
        height: 50px;
        background-color: var(--shortcut-background-color);
        border: 2px solid var(--shortcut-border-color);
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;        
        align-items: center;        
    }

    .optionCircle > p{
        color: var(--shortcut-foreground-color);
        font-size: 80%;
    }

    .optionCircle > img{
        width: var(--shortcut-image-dimensions);
        height: var(--shortcut-image-dimensions);
    }
</style>