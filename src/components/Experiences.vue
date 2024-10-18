<script>
import Experience from './Experience.vue';

    export default {
        components: {
            Experience
        }
    }
</script>

<template>
    <section class="projects-component">
        <div class="content-wrapper projects-component-content-wrapper">
            <h1 class="section-title">Minhas experiências</h1>
            <p class="about-section about-project">Aqui estão listadas todas as minhas experiências profissionais formais que eu já tive desde o começo da minha carreira, em ordem cronológica</p>
            <Experience role="Suporte técnico" company="UNESP - Universidade Estadual Paulista" dates="Abril de 2024  - Junho de 2024" description="Minha primeira experiência de trabalho formal, onde eu realizei as atividades de suporte técnico, como instalação de software, diagnóstico e concerto de máquinas defeituosas, formatação de computadores e instalação de equipamentos de infraestrutura pelo campus." companyImage="unesp.jpg"/>
            <Experience role="Técnico de apoio ao usuário de informática" company="Exiti Soluções Digitais LTDA" dates="Julho de 2024 - Outubro de 2024" description="Nesse cargo na Exiti eu realizei diversas contribuições para o software principal da empresa, o Atalayas. A minha principal contribuição foi na parte do desenvolvimento de software, onde eu utilizei linguagens como Java e Python para corrigir bugs e implementar novas features. \n Além do desenvolvimento, eu prestei serviços como Q.A, realizando testes e reportes de bugs, assim como serviços na área de suporte técnico, a onde eu orientava e realizava pedidos de clientes que tinham alguma dúvida ou alguma requisição a fazer, como disponibilização de documentos da plataforma e até interações com o banco de dados utilizando SQL para fins de inserção/modificação e remoção de dados com base nos pedidos. \n Eu também cheguei a realizar pesquisas por minha própria conta para apontar problemas e sugerir soluções no software da empresa, nas quais foram bem aceitas e colocadas em backlog para serem implementadas nas próximas sprints." companyImage="exiti.jpeg"/>
        </div>
    </section>
</template>

<style>

</style>