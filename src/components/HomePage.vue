<template>
    <div id="main-div">
        <h1 class="home-headers">Hello, I'm David Araujo,</h1>
        <h2 class="home-headers">a computer science student at Penn State working hard to become an excellent Computer Scientist & Software Engineer</h2>
        <button id="learn-more-button" @click="leaveHome">Learn More </button>
    </div>
    <img src="../assets/profile.jpg" alt="Avatar" class="avatar">
</template>

<script>
export default {
    name: 'HomePage',
    props: ['HomeVisibility'],
    methods: {
        leaveHome() {
            this.$emit('leaveHome')
        }
    },
}
</script>

<style>
body {
    background: #eee;
    overflow-y: hidden;
}
.home-headers {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 52px;
    color: #717378;
    width: 800px;
    page-break-after: auto;
    margin: 0%;
}
#main-div {
    margin-top: 17%;
    margin-left: 17%;
    float: left;
}
#learn-more-button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 35px;
}
.avatar {
    float: right;
    margin-top: 17%;
    margin-right: 22%;
    vertical-align: middle;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 20px;
    border-color: black;
}
</style>