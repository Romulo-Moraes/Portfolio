<script>
    import Skill from './Skill.vue';
    import Technology from './Technology.vue';

    export default{
        components: {
            Skill,
            Technology
        }
    }
</script>

<template>
    <section class="skills-component">
        <div class="content-wrapper">
            <h1 class="section-title skills-title">Minhas competências</h1>
            <p class="about-section about-skills">Aqui estão listadas todas as minhas habilidades nas quais eu uso para resolver os mais diversos problemas em possivelmente diversas áreas.</p>
            <section class="skills-wrapper">
                <div class="skills">
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento WEB" description="Para criar páginas WEB eu uso as seguintes tecnologias:">
                            <Technology image="html.png" techName="HTML" dotTranslate="-70%"/>
                            <Technology image="js.png" techName="Javascript" dotTranslate="-70%"/>
                            <Technology image="css.png" techName="CSS" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="" description="Para a criação de servidores e APIs HTTP eu uso essas tecnologias: ">                        
                            <Technology image="js.png" techName="Javascript" dotTranslate="-70%"/>
                            <Technology image="express.png" techName="Express Framework" dotTranslate="-70%"/>
                            <Technology image="nodejs.png" techName="Node.js" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento para baixo nível" description="Para desenvolvimento de aplicações de baixo nível, seja por estudo ou para projetos, eu faço uso das seguintes tecnologias:">                        
                            <Technology image="assembly.png" techName="Assembly" dotTranslate="-70%"/>
                            <Technology image="nasm.png" techName="Nasm assembler" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Desenvolvimento para Linux e aplicações em geral" description="Essas tecnologias são usadas quando eu preciso escrever algum software que precise ser compilado e de fácil distribuição através de sistemas Linux: ">                        
                            <Technology image="Clang.png" techName="Linguagem C" dotTranslate="-70%"/>
                            <Technology image="meson.png" techName="Meson Build System" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Ambientes Linux" description="Eu possuo considerável vivência com GNU/Linux, é o sistema operacional no qual eu mais tenho usado nos ultimos dois anos, para estudos, trabalhos ou entreterimento.">                        
                            <Technology image="arch.png" techName="Arch Linux" dotTranslate="-70%"/>
                            <Technology image="manjaro.png" techName="Manjaro" dotTranslate="-70%"/>
                            <Technology image="ubuntu.png" techName="Ubuntu" dotTranslate="-70%"/>
                        </Skill>
                    </section>
                    
                    <section class="skill-placeholder">
                        <Skill title="Estruturas de dados" description="Eu cultivo conhecimentos em estruturas de dados, nas quais podem me ajudar a resolver problemas complexos.">
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