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
    }
</script>

<template>
    <section class="about-me-component">
        <Overlay color="black" :opacity="0.7" :zindex="2" height="100%"/>

        <div ref="pictureElementReference" class="my-picture">
            <img class="picture" src="./../assets/images/me.png" alt="">
        </div>

        <div class="content-wrapper">
            <h1 :class="this.dynamicAboutMeTitleClass" id="about-me-title">Sobre mim</h1>
        
            <div :class="this.dynamicAboutMeClass" id="about-me-text">
                <p>Olá! Sou Rômulo Peres de Moraes, sou apaixonado a nível de entusiasmo pela a área de programação e tecnologia.</p>
                <p>Desde a minha infância eu tenho um interesse genuíno por computadores, passava o dia vendo videos sobre programação, mesmo não entendendo muito sobre o que se falava neles</p>
                <p>Atualmente eu sempre busco aprender mais sobre a área da T.I, faço contato com linguagens de programação, diferentes sistemas operacionais, estruturas de dados e muito mais.</p>
            </div>
        </div>

        <div class="show-image-button-placeholder">
            <Button ref="showImageButtonReference" @click="togglePictureView" fontSize="135%"/>
        </div>
    </section>
</template>

<style>
   

    #about-me-text > p ~ p{
        margin-top: 7%;
    }

    .picture{
        width: 100%;
        border-radius: 30%;
        max-width: 570px;
    }

    .my-picture{
        transition: 1s;
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
        background-color: black;
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
        transition: 1s;
        position: relative;
        padding-top: 5%;
        font-size: 140%;
        opacity: 1;
    }

    .about-me-text-for-picture{
        transition: 1s;
        position: relative;
        padding-top: 5%;
        font-size: 140%;
        opacity: 0.05;
    }

    .about-me-title{
        transition: 1s;
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
    
</style>