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
        }
    }
</script>

<template>
    <section class="projects-component">
        <div class="content-wrapper projects-component-content-wrapper">
            <h1 class="section-title">Projetos</h1>
            <p class="about-section about-project">Eu tenho criado projetos desde quando eu comecei a estudar a área de T.I, sejam eles mais simples, com o objetivo de colocar em prática algum conhecimento que adquiri recentemente, ou alguns mais complexos, com o objetivo de resolver algum problema.</p>

            <p class="about-section about-project">Abaixo estão todos os meus principais projetos open source nos quais eu trabalhei recentemente:</p>
            <section class="projects-wrapper">
                    <div class="projects">
                        <section class="project-placeholder">
                            <Project :projectData="this.rclockConstants" projectNameBarMarginLeft="8%">
                                <ul>
                                    <li class="project-achievements-item">Desenvolvi esse projeto de uma maneira bem modularizada, deixando-o com uma estrutura simples, assim como o seu funcionamento</li>
                                    <li class="project-achievements-item">Utilizei princípios da engenharia de software, tanto para identificar os requisitos, quanto para a implementação dos mesmos.</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.assemblyToolkitConstants" minProjectNameWidth="260px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Descrevi com o maior número de detalhes possíveis como o computador funciona no baixo nível</li>
                                    <li class="project-achievements-item">Escrevi a mão, códigos em Assembly para deixar como exemplos</li>
                                    <li class="project-achievements-item">Escrevi códigos em C para fazer exemplos de interoperabilidade com o Assembly através do linker</li>
                                    <li class="project-achievements-item">Demonstrei como algumas características do baixo nível influenciam em características de linguagens de alto nível</li>
                                    <li class="project-achievements-item">Descrevi como o processador de uma máquina funciona, assim como seus componentes internos</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.rmatrixConstants" minProjectNameWidth="130px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Aprendi sobre conceitos de segurança de memória</li>
                                    <li class="project-achievements-item">Obtive um maior entendimento sobre race conditions e deadlocks, me possibilitando escrever softwares mais seguros e robustos no contexto de concorrência</li>                                    
                                    <li class="project-achievements-item">Compreendi como o Mutual Exclusion (mutex) funciona e como eles são úteis em ambientes de concorrência</li>
                                </ul>
                            </Project>
                        </section>

                        <section class="project-placeholder">
                            <Project :projectData="this.portfolioConstants" minProjectNameWidth="130px" projectNameBarMarginLeft="0%">
                                <ul>
                                    <li class="project-achievements-item">Escrevi um site responsivo e com animações utilizando o framework Vue.JS</li>
                                    <li class="project-achievements-item">Desenvolvi esse projeto em cima do conceito Mobile First, com o objetivo de deixar o site mais responsivo</li>
                                    <li class="project-achievements-item">Realizei o planejamento inteiro do site utilizando a ferramenta de prototipação Figma</li>
                                    <li class="project-achievements-item">Deixei o site público utilizando o Github Pages</li>
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