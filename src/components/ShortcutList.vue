<script>
    import { ref } from 'vue';
    import Shortcut from './Shortcut.vue';
import Overlay from './Overlay.vue';

    export default{
        name: 'shortcut-list',

        components: {
            Shortcut,
            Overlay
        },

        data(){
            return{
                shortcutReferences: {
                    languageShortcutRef : ref(null),
                    aboutMeShortcutRef : ref(null),
                    abilitiesShortcutRef : ref(null),
                    projectsShortcutRef : ref(null),
                    hireMeShortcutRef : ref(null),
                    optionsAndShortcutsReference : ref(null)
                }
            }
        },
        methods : {
            toggleOptionsVisibility(){
                let referencesKeys = Object.keys(this.$refs);
                let i = 0;
                
                switch(Number(this.$refs.optionsAndShortcutsReference.style.opacity)){
                    case 0:
                        this.$refs.optionsAndShortcutsReference.style.opacity = 1;
                        break;
                    default:
                        this.$refs.optionsAndShortcutsReference.style.opacity = 0;
                        break;
                }
                

                let intervalHandler = setInterval(() => {
                    if(i >= referencesKeys.length){
                        clearInterval(intervalHandler);
                    }else{
                        if(referencesKeys[i] !== 'optionsAndShortcutsReference'){
                            this.$refs[`${referencesKeys[i++]}`].toggleVisibility();
                        }
                        else{
                            i++;
                        }
                    }
                }, 25);
            },

            comingSoon(){
                window.alert('Coming soon!');
            }
        }
    }
</script>

<template>
    <section class="options-shortcuts-holder">
        <div class="options-icon" @click="toggleOptionsVisibility">
            <div class="the-icon">
                <div class="options-icon-line"></div>
                <div class="options-icon-line"></div>
                <div class="options-icon-line"></div>
            </div>
        </div>
        <div class="options-n-shortcuts" ref="optionsAndShortcutsReference">
            <Shortcut @click="comingSoon" ref="languageShortcutRef" shortcut-text="Língua" backcolor="light" content="PT" :the-content-is-string="true"/>
            <Shortcut ref="aboutMeShortcutRef" redirectTo="#about-me" shortcut-text="Sobre mim" backcolor="dark" content="whoAmI.png" :the-content-is-string="false" adjust-image-dimensions="80%"/>
            <Shortcut ref="abilitiesShortcutRef" redirectTo="#skills" shortcut-text="Habilidades" backcolor="dark" content="abilities.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
            <Shortcut ref="projectsShortcutRef" redirectTo="#projects" shortcut-text="Projetos" backcolor="dark" content="Projects" :the-content-is-string="true"/>
            <Shortcut ref="hireMeShortcutRef" redirectTo="#contacts" shortcut-text="Contatos" backcolor="dark" content="hireMe.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
        </div>
    </section>
</template>

<style>
    .options-icon-line{
        width: 42.5px;
        height: 5px;
        background-color: white;
        border-radius: 10px;
        position: relative;
    }

    .the-icon{
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .options-icon{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 3;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    .options-shortcuts-holder{
        width: 80px;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .options-n-shortcuts{
        padding-top: 10%;
        top: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: left;
        flex-direction: column;
        z-index: 2;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: rgb(52, 52, 52);
        border: 3px solid rgb(52, 52, 52);
        opacity: 0;
        transition: 1.5s;
    }

    @media screen and (orientation: landscape){
        .options-icon-line{
            width: 45px;
            height: 7px;
            background-color: white;
            border-radius: 10px;
            position: relative;
        }


        .options-shortcuts-holder{
            padding-right: 5%;
        }
    }
</style>