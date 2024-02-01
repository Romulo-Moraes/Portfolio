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
                rmatrixConstants : ProjectsConstants.rmatrixConstants,
                portfolioConstants : ProjectsConstants.portfolioConstants
            }
        },

        mounted(){
            ViewportScroll.addClassesToFadeIn(['about-project'], "1s");
        }
    }
</script>

<template>
    <section class="projects-component">
        <div class="content-wrapper projects-component-content-wrapper">
            <h1 class="section-title">Projetos</h1>
            <p class="about-section about-project">Desde quando eu comecei a estudar a área de T.I, eu tenho criado projetos, sejam eles mais simples, com o objetivo de colocar em prática algum conhecimento que adquiri recentemente, ou alguns mais complexos, com o objetivo de resolver algum problema.</p>

            <p class="about-section about-project">Abaixo estão todos os meus principais projetos open source nos quais eu trabalhei recentemente:</p>
            <section class="projects-wrapper">
                    <div class="projects">
                        <section class="project-placeholder">
                            <Project :projectData="this.rclockConstants" projectNameBarMarginLeft="8%">
                                <ul>
                                    <li class="project-achievements-item">Usei de forma inteligente o planejamento, design de projeto, documentação e tópicos da engenharia de software em geral</li>
                                    <li class="project-achievements-item">Consegui ter um maior entendimento da biblioteca Ncurses, usada para manipular o terminal</li>
                                    <li class="project-achievements-item">Realizei um projeto muito bem modularizado, no qual fez com que o repositório ficasse bem simples e fácil de entender</li>
                                    <li class="project-achievements-item">Reutilizei uma outra biblioteca de minha autoria chamada Anemone, para auxiliar no desenvolvimento desse software</li>
                                    <li class="project-achievements-item">Aprimorei minhas habilidades com Git e Github nesse projeto com a feature de submódulo</li>
                                    <li class="project-achievements-item">Melhorei minhas habilidades na língua inglesa e obtive um maior feeling para como expressar minhas ideias em determinadas situações</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.assemblyToolkitConstants" minProjectNameWidth="260px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Pesquisei sobre o assembler Nasm</li>
                                    <li class="project-achievements-item">Pesquisei sobre a linguagem de montagem Assembly</li>
                                    <li class="project-achievements-item">Descrevi com o maior número de detalhes possíveis como o computador funciona no baixo nível sem desviar muito da programação</li>
                                    <li class="project-achievements-item">Escrevi a mão, códigos de Assembly para deixar como exemplos</li>
                                    <li class="project-achievements-item">Escrevi códigos em C para fazer exemplos de interoperabilidade com o Assembly através do linker</li>
                                    <li class="project-achievements-item">Entendi como algumas coisas no baixo nível influenciam em características de linguagens de alto nível</li>
                                    <li class="project-achievements-item">Obtive um maior conhecimento sobre como a CPU funciona</li>
                                    <li class="project-achievements-item">Aprendi um pouco mais sobre a língua inglesa escrevendo esse projeto</li>
                                    <li class="project-achievements-item">Entendi muito mais como as coisas funcionam no baixo nível do computador</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.rmatrixConstants" minProjectNameWidth="130px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Aprendi sobre a linguagem Rust e seus conceitos de segurança de memória</li>
                                    <li class="project-achievements-item">Obtive um maior entendimento sobre race conditions</li>                                    
                                    <li class="project-achievements-item">Obtive um maior entendimento sobre deadlocks</li>
                                    <li class="project-achievements-item">Entendi como o mutex funciona e como eles são úteis em Rust e em outras linguagens como C</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.portfolioConstants" minProjectNameWidth="130px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Estudei e coloquei em prática conhecimentos a respeito do framework Vue.js</li>
                                    <li class="project-achievements-item">Fiz o design do site usando a ferramenta de prototipação Figma.</li>
                                    <li class="project-achievements-item">Entendi e apliquei o conceito Mobile First</li>
                                </ul>
                            </Project>
                        </section>
                    </div>
            </section>
        </div>
    </section>
</template>

<style>
    .project-achievements-item{
        transition: 500ms;
        opacity: 0;
    }

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