<script>
    import Skill from './Skill.vue';
    import Technology from './Technology.vue';

    export default{
        components: {
            Skill,
            Technology
        },

        mounted(){
            ViewportScroll.addClassesToFadeIn(['about-skills'], "1300ms");
        }
    }
</script>

<template>
    <section class="skills-component">
        <div class="content-wrapper">
            <h1 class="section-title skills-title">Minhas competências</h1>
            <p class="about-section about-skills">Aqui está toda a base de conhecimento que eu tenho sobre a Tecnologia da Informação, separadas por áreas de desenvolvimento e suas tecnologias.</p>
            <section class="skills-wrapper">
                <div class="skills">
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento WEB" description="Para a criação de páginas WEB, eu uso as seguintes tecnologias:">
                            <Technology image="html.png" techName="HTML" dotTranslate="-70%"/>
                            <Technology image="js.png" techName="Javascript" dotTranslate="-70%"/>
                            <Technology image="css.png" techName="CSS" dotTranslate="-70%"/>
                            <Technology image="vuejs.svg" techName="Vue.js" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="" description="Juntamente com o Front-end, o Back-end é desenvolvido principalmente por tecnologias baseadas em Javascript:">                        
                            <Technology image="js.png" techName="Javascript" dotTranslate="-70%"/>
                            <Technology image="express.png" techName="Express Framework" dotTranslate="-70%"/>
                            <Technology image="nodejs.png" techName="Node.js" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento para baixo nível" description="Desenvolvimento para baixo nível é algo que me fascina desde o meu primeiro contato com esse nicho. Portanto, essas são as tecnologias nas quais me ajudam a escrever alguns bits:">
                            <Technology image="assembly.png" techName="Assembly" dotTranslate="-70%"/>
                            <Technology image="nasm.png" techName="Nasm assembler" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento para Linux e aplicações em geral" description="Quando é necessário escrever algum software que precise correr diretamente em cima do sistema operacional, seja por questões de performance ou simplicidade, eu faço uso das seguintes tecnologias:">                        
                            <Technology image="Clang.png" techName="Linguagem C" dotTranslate="-70%"/>
                            <Technology image="meson.png" techName="Meson Build System" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Ambientes Linux" description="Eu tenho me familiarizado muito com o sistema operacional GNU/Linux nos últimos anos. No começo era apenas por uma curiosidade genuína, comecei pelo Ubuntu e algum tempo depois eu fui mudando para outras distribuições nas quais eu tinha mais interesse. Em 2022 eu transferi meu workspace inteiro do Windows para o Arch Linux definitivamente.">
                            <Technology image="arch.png" techName="Arch Linux" dotTranslate="-70%"/>
                            <Technology image="manjaro.png" techName="Manjaro" dotTranslate="-70%"/>
                            <Technology image="ubuntu.png" techName="Ubuntu" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Estruturas de dados" description="Estruturas de dados são ferramentas incriveis para a resolução de problemas. Uma hora ou outra acontece de encontrarmos um problema que pode ser resolvido de uma maneira mais simples usando elas. ">
                            <Technology image="hashTable.png" techName="Hash table" dotTranslate="-70%"/>
                            <Technology image="queue.png" techName="Queue" dotTranslate="-70%"/>
                            <Technology image="stack.png" techName="Stack" dotTranslate="-70%"/>
                            <Technology image="heapNTrees.png" techName="Heap e Trees" dotTranslate="-70%"/>
                            <Technology image="linkedList.png" techName="Linked list" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                </div>
            </section>
        </div>
    </section>
</template>

<style>

    .skills-title{
        margin-top: 6%;
    }
    
    .about-skills{
        max-width: 950px;
    }

    .skill-placeholder ~ .skill-placeholder{
        padding-top: 10%;
    }

    .skills{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .skills-wrapper{
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }    

    .skills-component{
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (orientation: landscape){
        .skill-placeholder ~ .skill-placeholder{
            padding-top: 5%;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 860px){
        .skills{
            width: 100%;
        }   

        .skill-placeholder ~ .skill-placeholder{
            padding-top: 3%;
        }

        .skills-wrapper{
            padding-top: 2.5%;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 1000px){
        .skill-placeholder ~ .skill-placeholder{
            padding-top: 1.5%;
        }
    }
</style>