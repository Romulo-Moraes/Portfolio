<script>
    import Project from './Project.vue';
    import Overlay from './Overlay.vue';
    import ProjectsConstants from '@/helpers/constants/ProjectsConstants.js';

    export default{
        components: {
            Project,
            Overlay
        },

        data(){
            return {
                rclockConstants : ProjectsConstants.rclockProjectsConstants,
                assemblyToolkitConstants : ProjectsConstants.assemblyToolkitConstants,
                rmatrixConstants : ProjectsConstants.rmatrixConstants
            }
        }
    }
</script>

<template>
    <section class="projects-component">
        <div class="content-wrapper projects-component-content-wrapper">
            <h1 class="section-title">Projetos</h1>
            <p class="about-section">Ao longo dos anos nos quais eu me dediquei à T.I, eu criei vários projetos nos quais hoje são open-source,
                desde bibliotecas a até projetos que se originaram através de pesquisas.
            </p>

            <p class="about-section">Aqui estão todos nos quais eu mais me orgulho de ter criado e o que eu aprendi em cada um deles:</p>
            <section class="projects-wrapper">
                    <div class="projects">
                        <section class="project-placeholder">
                            <Project :projectData="this.rclockConstants" projectNameBarMarginLeft="8%">
                                <ul>
                                    <li>Usei de forma inteligente o planejamento, design de projeto, documentação e tópicos da engenharia de software em geral</li>
                                    <li>Consegui ter um maior entendimento da biblioteca Ncurses, usada para manipular o terminal</li>
                                    <li>Realize um projeto muito bem modularizado, no qual fez com que o repositório ficasse bem simples e fácil de entender</li>
                                    <li>Reutilizei uma outra biblioteca de minha autoria chamada Anemone, para auxiliar no desenvolvimento desse software</li>
                                    <li>Aprimorei minhas habilidades com Git e Github nesse projeto com a feature de submódulo</li>
                                    <li>Melhoreig minhas habilidades na língua inglesa e obtive um maior feeling para como expressar minhas ideias em determinadas situações</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.assemblyToolkitConstants" minProjectNameWidth="260px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li>Pesquisei sobre o assembler Nasm</li>
                                    <li>Pesquisei sobre a linguagem de montagem Assembly</li>
                                    <li>Descrevi com o maior número de detalhes possíveis como o computador funciona no baixo nível sem desviar muito da programação</li>
                                    <li>Escrevi a mão, códigos de Assembly para deixar como exemplos</li>
                                    <li>Escrevi códigos em C para fazer exemplos de interoperabilidade com o Assembly através do linker</li>
                                    <li>Entendi como algumas coisas no baixo nível influência em características de linguagens de alto nível</li>
                                    <li>Obtive um maior conhecimento sobre como a CPU funciona</li>
                                    <li>Aprendi um pouco mais sobre o inglês escrevendo esse projeto</li>
                                    <li>Entendi muito mais como as coisas funcionam no baixo nível do computador</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.rmatrixConstants" minProjectNameWidth="140px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li>Aprendi sobre a linguagem Rust e seus conceitos de segurança de memória</li>
                                    <li>Obtive um maior entendimento sobre race conditions</li>                                    
                                    <li>Obtive um maior entendimento sobre deadlocks</li>
                                    <li>Entendi como o mutex funciona e como eles são úteis em Rust e em outras linguagens como C</li>
                                </ul>
                            </Project>
                        </section>
                    </div>
            </section>
        </div>
    </section>
</template>

<style>

    .projects-component{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    .projects{
        width: 100%;
    }

    .projects:nth-child(1){
        margin-top: 4%;
    }

    .projects-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projects-component-content-wrapper{
        padding-top: 10%;
    }

    .project-placeholder ~ .project-placeholder{
        margin-top: 7%;
    }

    @media screen and (orientation: landscape){
        .project-placeholder ~ .project-placeholder{
            margin-top: 5%;
        }


        .projects-component-content-wrapper{
            padding-top: 5%;
        }
    }

</style>