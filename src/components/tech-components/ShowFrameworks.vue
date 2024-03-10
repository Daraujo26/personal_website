<template>
    <div id="frameworks-div">
        <h4 id="languages-header">Frameworks</h4> 
        <p id="languages-text">Spring Boot: 2 Years</p>
        <div id="spring-boot" class="bar"></div>
        <p id="frameworks-text">Django: 2 Years</p>
        <div id="django" class="bar"></div>
        <p id="frameworks-text">PostgreSQL: 1.5 Years</p>
        <div id="postgresql" class="bar"></div>
        <p id="frameworks-text">Vue: 1 Years</p>
        <div id="vue" class="bar"></div>
        <p id="frameworks-text">React: 0.5 Years</p>
        <div id="react" class="bar"></div>
        <p id="frameworks-text">Angular: 0.5 Years</p>
        <div id="angular" class="bar"></div>
        <p id="frameworks-text">Flutter: 0.5 Years</p>
        <div id="flutter" class="bar"></div>
    </div>
</template>

<script>

</script>

<style>
#frameworks-div {
    margin-top: 0%;
    margin-left: 0%;
    height: fit-content;
    float: top;
}
#frameworks-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    color: #717378;
    page-break-after: auto;
    margin: 0%;
    text-indent: 15px;
    height: fit-content;
    margin: 0;
}
#frameworks-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    text-indent: 15px;
    height: fit-content;
    float: top;
}
.bar {
    height: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
    border-radius: 5px;
}
#spring-boot {
    background-color: red;
    width: 100%;
}
#django {
    background-color: gold;
    width: 100%;
}
#postgresql {
    background-color: aquamarine;
    width: 80%;
}
#vue {
    background-color: chocolate;
    width: 65%;
}
#react {
    background-color: blue;
    width: 50%;
}
#angular {
    background-color: grey;
    width: 20%;
}
#flutter {
    background-color: turquoise;
    width: 20%;
}
</style>