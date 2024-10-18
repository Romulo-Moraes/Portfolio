<script>
    export default {
        props: [
            'companyImage',
            'role',
            'company',
            'dates',
            'description'
        ],
        methods: {
            getImageURL() {
                return new URL(`../assets/images/${this.$props.companyImage}`, import.meta.url);
            }
        },
        computed: {
            formattedText() {
                return this.description.replaceAll('\\n', '<br><br>');
            }
        }
    }
</script>

<template>
    <section class="experience-component">
        <div class="experience-about">
            <div class="experience-about-text">
                <h2 class="experience-title">{{ this.$props.role }}</h2>
                <h2 class="company">{{ this.$props.company }}</h2>
                <p class="dates">{{ this.$props.dates }}</p>
            </div>
            <div class="experience-about-image">
                <img class="company-image" :src="this.getImageURL()"/>
            </div>
        </div>        
        <div class="experience-description">
            <p v-html="formattedText" class="about-section experience-description"></p>
        </div>
    </section>
</template>

<style>
    .experience-component {
        padding-top: 10%;
    }

    .experience-about-image {
        grid-area: image;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2%;
        padding-bottom: 2%;
    }

    .experience-description {
        grid-area: description;
    }

    .company-image {
        width: 99%;
    }
        
    .experience-about-text {
        grid-area: about;
    }

    .dates {
        color: #A5A5A5;
        font-size: 120%;
    }

    .experience-title {
        padding-top: 2%;
        color: #00C2FF;
        font-size: 220%;
        opacity: 1;
        font-weight: bold;
    }

    .company {
        padding-top: 2%;
        color: #FFFFFF;
        font-size: 190%;
        opacity: 1;
    }

    @media screen and (min-width: 458px) {
        .company {
            padding-top: 0%;
        }

        .experience-component {
            padding-top: 4%;
        }

        .experience-about {
            display: grid;
            grid-template-columns: 30vw 70vw;
            grid-template-rows: auto;
            grid-template-areas: "image about"
        }

        .experience-description {
            padding-top: 1%;
        }
        
        .experience-title {
            font-size: 200%;
            padding-top: 0%;
        }

        .company {
            font-size: 150%;
            word-wrap: break-word;
        }

        .experience-about-text {
            padding-left: 2%;
        }
    }

    @media screen and (min-width: 911px) {
        .experience-about {
            grid-template-columns: 25vw 75vw;
        }

        .experience-title {
            font-size: 230%;
            padding-top: 0%;
        }

        .company {
            font-size: 170%;
            word-wrap: break-word;
        }

        .dates {
            color: #A5A5A5;
            font-size: 150%;
        }

    }

    @media screen and (min-width: 1000px) {
        .experience-about {
            grid-template-columns: 20vw 80vw;
        }
    }
</style>