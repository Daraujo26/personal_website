<template>
    <div id="languages-div">
        <h4 id="languages-header">Languages</h4> 
        <p id="languages-text">Java: 3 Years</p>
        <div id="java" class="bar"></div>
        <p id="languages-text">Python: 3 Years</p>
        <div id="python" class="bar"></div>
        <p id="languages-text">HTML & CSS: 2.5 Years</p>
        <div id="HTML-CSS" class="bar"></div>
        <p id="languages-text">Javascript: 2 Years</p>
        <div id="javascript" class="bar"></div>
        <p id="languages-text">SQL: 1.5 Years</p>
        <div id="SQL" class="bar"></div>
        <p id="languages-text">Typescript: 0.5 Years</p>
        <div id="typescript" class="bar"></div>
        <p id="languages-text">Dart: 0.5 Years</p>
        <div id="dart" class="bar"></div>
    </div>
</template>

<script>

</script>

<style>
#languages-div {
    margin-top: 0%;
    margin-left: 0%;
    height: fit-content;
    float: top;
}
#languages-text {
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
#languages-header {
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
#java {
    background-color: red;
    width: 100%;
}
#python {
    background-color: gold;
    width: 100%;
}
#HTML-CSS {
    background-color: aquamarine;
    width: 80%;
}
#javascript {
    background-color: chocolate;
    width: 65%;
}
#SQL {
    background-color: blue;
    width: 50%;
}
#typescript {
    background-color: grey;
    width: 20%;
}
#dart {
    background-color: turquoise;
    width: 20%;
}
</style>