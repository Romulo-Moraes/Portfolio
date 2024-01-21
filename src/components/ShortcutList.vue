<script>
    import { ref } from 'vue';
    import Shortcut from './Shortcut.vue';

    export default{
        name: 'shortcut-list',

        components: {
            Shortcut
        },
        data(){
            return{
                shortcutReferences: {
                    languageShortcutRef : ref(null),
                    aboutMeShortcutRef : ref(null),
                    abilitiesShortcutRef : ref(null),
                    projectsShortcutRef : ref(null),
                    hireMeShortcutRef : ref(null)
                }                
            }
        },
        methods : {
            toggleOptionsVisibility(){
                let referencesKeys = Object.keys(this.$refs);
                let i = 0;
                
                let intervalHandler = setInterval(() => {
                    if(i >= referencesKeys.length){
                        clearInterval(intervalHandler);
                    }else{
                        this.$refs[`${referencesKeys[i++]}`].toggleVisibility();
                    }
                }, 25);
            }
        },
        mounted(){
            
        }
    }
</script>

<template>
    <section class="options-shortcuts-holder">
        <div class="options-icon" @click="toggleOptionsVisibility">
            <div class="options-icon-line"></div>
            <div class="options-icon-line"></div>
            <div class="options-icon-line"></div>
        </div>
        <div class="options-n-shortcuts">
            <Shortcut ref="languageShortcutRef" shortcut-text="Língua" backcolor="light" content="PT" :the-content-is-string="true"/>
            <Shortcut ref="aboutMeShortcutRef" shortcut-text="Sobre mim" backcolor="dark" content="whoAmI.png" :the-content-is-string="false" adjust-image-dimensions="80%"/>
            <Shortcut ref="abilitiesShortcutRef" shortcut-text="Habilidades" backcolor="dark" content="abilities.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
            <Shortcut ref="projectsShortcutRef" shortcut-text="Projetos" backcolor="dark" content="Projects" :the-content-is-string="true"/>
            <Shortcut ref="hireMeShortcutRef" shortcut-text="Contrate-me" backcolor="dark" content="hireMe.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
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

    .options-icon{
        position: relative;
        width: 100%;
        height: 50%;
        display: flex;
        padding-top: 5%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    .options-shortcuts-holder{
        position: relative;
        padding-right: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .options-n-shortcuts{
        width: 100%;
        margin-top: 15%;
        position: absolute;
        display: flex;
        justify-content: left;
        flex-direction: column;
        z-index: 50;
    }

    @media screen and (orientation: landscape){
        .options-icon-line{
            width: 45px;
            height: 7px;
            background-color: white;
            border-radius: 10px;
            position: relative;
        }

        .options-icon{
            height: 60%;    
        }

        .options-shortcuts-holder{
            padding-right: 5%;
        }
    }
</style>