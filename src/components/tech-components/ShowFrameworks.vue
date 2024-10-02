<template>
    <div id="frameworks-div">
        <h4 id="languages-header">Frameworks</h4>
        <p id="languages-text">Spring Boot: 3 Years</p>
        <div id="spring-boot" class="bar"></div>
        <p id="frameworks-text">React: 3 Years</p>
        <div id="react" class="bar"></div>
        <p id="frameworks-text">Django: 2 Years</p>
        <div id="django" class="bar"></div>
        <p id="frameworks-text">PostgreSQL: 2 Years</p>
        <div id="postgresql" class="bar"></div>
        <p id="frameworks-text">React Native: 1.5 Years</p>
        <div id="react-native" class="bar"></div>
        <p id="frameworks-text">Vue and Angular: 1 Year</p>
        <div id="angular" class="bar"></div>
        <p id="frameworks-text">Axum: 0.5 Years</p>
        <div id="axum" class="bar"></div>
    </div>
</template>

<script>

</script>

<style>
#frameworks-div {
    padding: 0 5% 0 0;
    max-width: 800px;
    width: 90%;
}

#frameworks-text,
#frameworks-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0.5rem 0;
    text-indent: 0;
    width: 100%;
}

#frameworks-header {
    font-size: 1.5rem;
    color: #0faf87;
}

.bar {
    height: 15px;
    font-weight: bold;
    margin: 10px 0;
    border-radius: 5px;
}

#spring-boot {
    background-color: lightgreen;
    width: 100%;
}

#django {
    background-color: yellow;
    width: 80%;
}

#postgresql {
    background-color: blue;
    width: 80%;
}

#react-native {
    background-color: #0faf87;
    width: 60%;
}

#react {
    background-color: lightblue;
    width: 100%;
}

#angular {
    background-color: red;
    width: 40%;
}

#axum {
    background-color: cadetblue;
    width: 20%;
}
</style>