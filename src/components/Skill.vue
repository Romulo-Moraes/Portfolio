<script>
    export default{
        props: [
            'title',
            'description'
        ]
    }
</script>

<template>
    <h2 class="skills-titles">{{ this.$props.title }}</h2>
    <p class="skills-description">{{ this.$props.description }}</p>
    <section class="tech-stack">
        <slot/>
    </section>
</template>

<style>
    .tech-stack{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 5%;
    }    

    .skills-titles{
        font-size: 190%;
    }

    .skills-description{
        margin-top: 1%;
        font-size: 110%;
        color: #DADADA;
    }

    @media screen and (orientation: landscape) {
        .tech-stack{
            margin-top: 1%;
        }    
    }
</style>