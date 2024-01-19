<script>
    export default{

    }
</script>

<template>
    <section class="apresentation">
        <section class="introduction">
            <h1 class="role">SOFTWARE<br/>DEVELOPER</h1>
            <div class="introduction-text">
                <p>Programador e entusiasta da computação que ama estar sempre aprendendo novas coisas sobre programação e tecnologia</p>
            </div>
        </section>
    </section>
</template>

<style>
    .introduction{
        position: relative;
        width: 70%;
        height: 90%;
    }

    .introduction > h1{
        font-size: 330%;
        
    }

    .introduction-text{
        max-width: 500px;
    }

    .introduction-text > p{
        margin-top: 5%;
        font-size: 130%;
        letter-spacing: 1pt;
    }


    .apresentation{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 900px){
        .introduction{
            width: 80%;
        }
    }
</style>