<script>
    import Overlay from './Overlay.vue';
    import Button from './Button.vue';
    import { ref } from 'vue';

    export default{
        components: {
            Overlay,
            Button
        },

        methods: {
            togglePictureView(){
                if(this.dynamicAboutMeClass == 'about-me-text'){
                    this.dynamicAboutMeTitleClass = 'about-me-title-for-picture';
                    this.dynamicAboutMeClass = 'about-me-text-for-picture';
                    this.$refs.pictureElementReference.style.zIndex = 3;
                }else{
                    this.dynamicAboutMeTitleClass = 'about-me-title';
                    this.dynamicAboutMeClass = 'about-me-text';
                    this.$refs.pictureElementReference.style.zIndex = 1;
                }
                
                this.$refs.showImageButtonReference.toggleButtonTextState();
            }
        },

        data(){
            return {
                dynamicAboutMeClass : ref('about-me-text'),
                dynamicAboutMeTitleClass : ref('section-title'),
                pictureElementReference : ref(null),
                showImageButtonReference : ref(null)
            }
        },

        mounted(){
            ViewportScroll.addClassesToFadeIn(['about-me-text-fadein'], "1s");
            ViewportScroll.addClassesToFadeIn(['picture'], "1500ms");
        }
    }
</script>

<template>
    <section class="about-me-component">
        <Overlay color="black" :opacity="0.75" :zindex="2" height="100%"/>

        <div ref="pictureElementReference" class="my-picture">
            <img class="picture" src="./../assets/images/me.png" alt="">
        </div>

        <div class="about-me-wrapper">
            <h1 :class="this.dynamicAboutMeTitleClass" id="about-me-title">Sobre mim</h1>
        
            <div :class="this.dynamicAboutMeClass" id="about-me-text">
                <p class="about-me-text-fadein">Olá! Sou Rômulo Peres de Moraes, e sou apaixonado pela a área de programação e tecnologia.</p>
                <p class="about-me-text-fadein">Desde a minha infância eu tenho um interesse genuíno por computadores, passava o dia inteiro vendo videos sobre programação, mesmo não entendendo muito sobre o que eles falavam.</p>
                <p class="about-me-text-fadein">Atualmente eu sempre busco aprender mais sobre a área da T.I, faço contato com diferentes linguagens de programação, diferentes sistemas operacionais, estruturas de dados, conceitos, entre outras coisas.</p>
            </div>
        </div>

        <div class="show-image-button-placeholder">
            <Button ref="showImageButtonReference" @click="togglePictureView" fontSize="135%"/>
        </div>
    </section>
</template>

<style>

    .about-me-wrapper{
        width: 95%;
        z-index: 3;
    }

    #about-me-text > p ~ p{
        margin-top: 7%;
    }

    .picture{
        width: 100%;
        border-radius: 30%;
        max-width: 570px;
    }


    .my-picture{
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .show-image-button-placeholder{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 2%;
        padding-bottom: 2%;
        z-index: 3;
    }

    .about-me-component{
        position: relative;
        width: 100%;
        height: auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .about-me-text{
        position: relative;
        padding-top: 5%;
        font-size: 140%;
    }

    .about-me-text-for-picture{
        transition: 1s;
        position: relative;
        padding-top: 5%;
        font-size: 140%;
        opacity: 0.05;
    }

    .about-me-title{
        color: #00C2FF;
        font-size: 350%;
        opacity: 1;
    }

    .about-me-title-for-picture{
        transition: 1s;
        color: #00C2FF;
        font-size: 350%;
        opacity: 0.1;
    }

    @media screen and (orientation: landscape) {
        .picture{
            width: 55%;
        }
        
        #about-me-text > p{
            font-size: 80%;
        }

        #about-me-title{
            font-size: 300%;
        }
        
        #about-me-text{
            padding-top: 3%;
            max-width: 550px;
        }

        #about-me-text > p ~ p{
            margin-top: 3%;
        }
    }
    
    @media screen and (orientation: landscape) and (min-width: 780px) {
        .picture{
            width: 40%;
        }

        #about-me-text > p{
            font-size: 90%;
        }

        #about-me-title{
            font-size: 320%;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 836px) {
        button.show-image-button{
            display: none;
        }

        .my-picture{
            justify-content: right;
            z-index: 2;
            padding-right: 5%;
        }
        .picture{
            width: 37.5%;
        }

        #about-me-text > p{
            font-size: 90%;
        }

        #about-me-text{
            max-width: 550px;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 1100px) {
        .about-me-wrapper{
            width: 90%;
            z-index: 3;
        }

        button.show-image-button{
            display: none;
        }
        
        .my-picture{
            justify-content: right;
            z-index: 2;
            padding-right: 5%;
        }

        .picture{
            width: 37.5%;
        }

        #about-me-text > p{
            font-size: 110%;
        }

        #about-me-text{
            max-width: 750px;
        }
    }

</style>