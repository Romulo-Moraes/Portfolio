<script>
import DataHighlight from './DataHighlight.vue';


    export default{
    components: { DataHighlight }
}
</script>

<template>
    <section class="contacts-component">
        <div class="content-wrapper contacts-component-content-wrapper">
            <section>
                <h1 class="section-title">Contatos</h1>
                <p class="about-section">Achou algo daqui interessante? <br/> Você pode sempre entrar em contato comigo,
                    seja para gerar novas conexões ou caso você ache que minhas habilidades e
                    experiências podem ser úteis para o desenvolvimento de algum projeto.</p>
            </section>

            <section class="contacts">
                <article class="contact">
                    <h1>E-mail</h1>
                    <p class="about-contact">Você pode entrar em contato comigo pelo o meu e-mail.</p>

                    <div class="data-highlight">
                        <DataHighlight data="romulo.moraes.dev@gmail.com" :dataIsPlainText="true" fontSize="100%"/>
                    </div>
                </article>
                
                
                <article class="contact">
                    <h1>CV e Cover letter</h1>
                    <p class="about-contact">Você pode fazer o download de uma cópia da minha Cover letter e também do meu CV, a onde as informações estão mais formalizadas.</p>
                    
                    <div class="data-highlight">
                        <DataHighlight data="Cover letter" :dataIsPlainText="false" fontSize="15px" icon="pdfIcon.png" componentWidth="150px"/>
                        <DataHighlight data="CV" :dataIsPlainText="false" fontSize="15px" icon="pdfIcon.png" componentWidth="90px"/>
                    </div>
                </article>
                
            </section>
            
        </div>
    </section>
</template>

<style>
    .data-highlight{
        display: flex;       
    }

    .contacts{
        margin-top: 10%;
    }

    .contact ~ .contact{
        margin-top: 10%;
    }

    .contact > h1{
        font-size: 190%;
    }

    .contact > p{
        font-size: 120%;
    }

    .contacts-component{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10%;
    }

    .contacts-component-content-wrapper{
        padding-top: 10%;
    }

    @media screen and (orientation: landscape) {
        .contacts{
            margin-top: 5%;
        }

        .contact ~ .contact{
            margin-top: 5%;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 610px) {
        .contact > p {
            font-size: 140%;
        }

        .contacts{
            width: 90%;
        }

        .contacts-component-content-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .about-contact{
            max-width: 510px;
        }

        .contacts{
            margin-top: 3%;   
        }
    }

    @media screen and (orientation: landscape) and (min-width: 812px) {
        .about-contact{
            max-width: 700px;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 1000px) {
        .contact > p {
            font-size: 140%;
        }

        .contact > h1{
            font-size: 200%;
        }

        .contacts{
            margin-top: 2%;
        }
    }
</style>