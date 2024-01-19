<script lang="ts">
    import { ref, type Ref } from 'vue';
    import Shortcut from './Shortcut.vue';

    type PossibleEntries = 'languageShortcutRef' | 'aboutMeShortcutRef' | 'abilitiesShortcutRef' | 'projectsShortcutRef' | 'hireMeShortcutRef';

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
            access(str : PossibleEntries){
                return this.$refs[str];
            },

            toggleOptionsVisibility(){
                

                const keys = Object.keys(this.shortcutReferences);
                let keysLength = keys.length;
                let i = 0;
               
                let intervalHandler = setInterval(() => {
                    let element : Ref<typeof Shortcut> = this.access(keys[i] as PossibleEntries);
                    
                    if(element !== undefined && element !== null){
                        element.toggleVisibility();
                    }
                })
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
            <Shortcut ref="languageShortcutRef" shortcut-text="Língua" backcolor="light" content="PT" the-content-is-string="true"/>
            <Shortcut ref="aboutMeShortcutRef" shortcut-text="Sobre mim" backcolor="dark" content="whoAmI.png" :the-content-is-string="false" adjust-image-dimensions="80%"/>
            <Shortcut ref="abilitiesShortcutRef" shortcut-text="Habilidades" backcolor="dark" content="abilities.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
            <Shortcut ref="projectsShortcutRef" shortcut-text="Projetos" backcolor="dark" content="Projects" the-content-is-string="true"/>
            <Shortcut ref="hireMeShortcutRef" shortcut-text="Contrate-me" backcolor="dark" content="hireMe.png" :the-content-is-string="false" adjust-image-dimensions="100%"/>
        </div>
    </section>
</template>

<style>
    .options-icon-line{
        width: 100%;
        height: 10px;
        background-color: black;
        border-radius: 10px;
        position: relative;
    }

    .options-icon{
        width: 55px;
        height: 55px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    .options-shortcuts-holder{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>