<template>
    <div id="side-bar">
        <h1 id="side-bar-header">David Araujo</h1>
        <button class="side-bar-buttons">About Me</button>
        <button class="side-bar-buttons">Projects</button>
        <button class="side-bar-buttons">Publications</button>
        <button class="side-bar-buttons">Contact</button>
        <!-- <button></button>   Github
        <button></button>   LinkedIn -->
    </div>
    <div id="about-div">
        <h1 id="about-header">About Me</h1>
        <h3 id="about-text">My programming journey started in 2021 and since then I've become a highly driven software developer with a unique set of experiences that have shaped me into a collaborative team member, skilled communicator, and strong analytical thinker.</h3>
        <div id="tech-stack">
            <ShowCourses v-if="coursesVisibility"/>
            <ShowFrameworks v-if="frameworksVisibility"/>
            <ShowLanguages v-if="languagesVisibility"/>
        </div>
        <div id="align-buttons">
            <button @click="switchLanguages" id="languages-button" class="about-buttons">Languages</button>
            <button @click="switchFrameworks" id="frameworks-button" class="about-buttons">Frameworks</button>
            <button @click="switchCourses" id="courses-button" class="about-buttons">Courses</button>
        </div>
    </div>
</template>

<script>
// import tech stack components
import ShowCourses from './tech-components/ShowCourses.vue'
import ShowFrameworks from './tech-components/ShowFrameworks.vue';
import ShowLanguages from './tech-components/ShowLanguages.vue'

export default {
    components: { ShowCourses, ShowFrameworks, ShowLanguages },
    data () {
        return {
            coursesVisibility: false,
            frameworksVisibility: false,
            languagesVisibility: true
        }
    },
    methods: {
        switchCourses() {
            this.coursesVisibility = true
            this.frameworksVisibility = false
            this.languagesVisibility = false
            document.getElementById('courses-button').classList.add('clicked-about')
            document.getElementById('frameworks-button').classList.remove('clicked-about')
            document.getElementById('languages-button').classList.remove('clicked-about')
        },
        switchFrameworks() {
            this.coursesVisibility = false
            this.frameworksVisibility = true
            this.languagesVisibility = false
            document.getElementById('courses-button').classList.remove('clicked-about')
            document.getElementById('frameworks-button').classList.add('clicked-about')
            document.getElementById('languages-button').classList.remove('clicked-about')
        },
        switchLanguages() {
            this.coursesVisibility = false
            this.frameworksVisibility = false
            this.languagesVisibility = true
            document.getElementById('courses-button').classList.remove('clicked-about')
            document.getElementById('frameworks-button').classList.remove('clicked-about')
            document.getElementById('languages-button').classList.add('clicked-about')
        }
    },
    mounted() {
        document.getElementById('languages-button').classList.add('clicked-about')
    }
}
</script>

<style>
#side-bar {
    display: block;
    padding-left: 30px;
    float: left;
    width: 12vh;
    height: 100vh;
    min-height: 100vh;
    text-align: center;
}
#side-bar-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 52px;
    color: #717378;
}
.side-bar-buttons {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 20px;
    align-self: center;
    margin-bottom: 20%;
}
#about-div {
    margin-top: 6%;
    margin-left: 12%;
    float: left;
}
#about-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #717378;
    width: 800px;
    page-break-after: auto;
    margin-left: 15px;
    height: fit-content;
}
#about-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 42px;
    color: #0faf87;
}
#align-buttons {
    margin-left: 15px;
    margin-top: 20px;
}
.about-buttons {
    margin-right: 10px;
    border: 2px solid #0faf87;
    border-radius: 5px;
    background-color: transparent;
    color: #0faf87;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
}
.about-buttons:hover {
    background-color: #e7e7e7;
    color: #0faf87;
}
.clicked-about {
    background: #0faf87;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
</style>