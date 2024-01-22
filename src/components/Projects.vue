<script>
    import Project from './Project.vue';
    import Overlay from './Overlay.vue';

    export default{
        components: {
            Project,
            Overlay
        }
    }
</script>

<template>
    <section class="projects-component">
        <div class="content-wrapper projects-component-content-wrapper">
            <h1 class="section-title">Projetos</h1>
            <p class="about-section">Ao longo dos anos nos quais eu me dediquei à T.I, eu criei vários projetos nos quais hoje são open-source,
                desde bibliotecas a até projetos que se originaram através de pesquisas. Aqui estão todos nos quais eu mais 
                me orgulho de ter criado e o que eu aprendi em cada um deles:
            </p>
            <section class="projects-wrapper">
                    <div class="projects">
                        <section class="project-placeholder">
                            <Project projectNameBarMarginLeft="8%" projectTitle="Rclock" projectImage="rclockCover.png" projectLink="https://github.com/Romulo-Moraes/Rclock" generalAchievements="Esse projeto foi um dos que mais me fizeram aprender sobre a linguagem C e também sobre documentação e planejamento de projetos." projectImageCaption="Imagem de exemplo do Rclock com a cor vermelha" aboutProject="O Rclock é um software no qual cria um relógio digital diretamente em interfaces de linha de comando, o conhecido terminal. Ele foi planejado para ter um número interessante de customizações nas quais possibilitam qualquer usuário criar um relógio digital do seu gosto no próprio Desktop.">
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
                            <Project minProjectNameWidth="260px" projectImageCaption="Imagem de capa do projeto no Github" projectNameBarMarginLeft="0%" projectTitle="Assembly toolkit" generalAchievements="O Assembly toolkit foi um projeto baseado em pesquisa no qual me fez entender muita coisa nas quais normalmente não se tem contato com linguagens de mais alto nível." projectImage="assemblyToolkitCover.png" projectLink="https://github.com/Romulo-Moraes/Assembly-Toolkit" aboutProject="Assembly toolkit é um projeto que reune conhecimentos e códigos da linguagem assembly e da programação em baixo nível no geral.. O repositório trata principalmente de ambientes Linux, do conjunto de instruções da arquitetura x86_64 e do assembler Nasm. Há vários tópicos no Assembly toolkit nos quais ajudam a entender como as coisas funcionam por baixo dos panos, alguns deles são: segmentos de memória, system calls, registradores, funções e mais.">
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
                            <Project minProjectNameWidth="140px" projectImageCaption="Imagem de exemplo da R-matrix" projectNameBarMarginLeft="0%" projectTitle="R-matrix" generalAchievements="Mesmo sendo um projeto relativamente simples, eu obtive considerável conhecimento em tópicos que normalmente não são tão discutidos no dia a dia da T.I, mas que fazem total diferença quanto a segurança de aplicações." projectImage="rmatrixCover.png" projectLink="https://github.com/Romulo-Moraes/R-matrix" aboutProject="A R-matrix é um simulador de matrix para interfaces de linha de comando personalizável, permitindo que setups e ambientes possam ter uma composição a mais a o utilizar o aplicativo. O projeto R-matrix foi criado com o objetivo de estudar e entender a linguagem de programação Rust, na qual me chamava atenção por oferecer recursos interessantes para manipulação de memória e segurança entre threads.">
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
    .project-placeholder{
        margin-top: 15%;
    }


    .projects-component{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: black;
    }

    .projects{
        width: 100%;
    }

    .projects-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projects-component-content-wrapper{
        padding-top: 10%;
    }

    .project-placeholder{
        margin-top: 7%;
    }
</style>