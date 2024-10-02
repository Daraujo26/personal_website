<template>
    <div id="languages-div">
        <h4 id="languages-header">Languages</h4>
        <p id="languages-text">Java: 3 Years</p>
        <div id="java" class="bar"></div>
        <p id="languages-text">Python: 3 Years</p>
        <div id="python" class="bar"></div>
        <p id="languages-text">HTML & CSS: 2.5 Years</p>
        <div id="HTML-CSS" class="bar"></div>
        <p id="languages-text">Javascript/Typescript: 2 Years</p>
        <div id="javascript" class="bar"></div>
        <p id="languages-text">SQL: 1.5 Years</p>
        <div id="SQL" class="bar"></div>
        <p id="languages-text">Rust: 1 Year</p>
        <div id="typescript" class="bar"></div>
        <p id="languages-text">C: 1 Year</p>
        <div id="C" class="bar"></div>
    </div>
</template>

<script>

</script>

<style>
#languages-div {
    padding: 0 5% 0 0;
    max-width: 800px;
    width: 90%;
}

#languages-text,
#languages-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0.5rem 0;
    text-indent: 0;
    width: 100%;
}

#languages-header {
    font-size: 1.5rem;
    color: #0faf87;
}

.bar {
    height: 15px;
    font-weight: bold;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #ddd;
    animation: growBar 2s ease forwards;
}

@keyframes growBar {
    from {
        width: 0;
    }
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
    width: 40%;
}

#C {
    background-color: turquoise;
    width: 40%;
}
</style>