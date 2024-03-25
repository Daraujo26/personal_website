<template>
    <div id="app-container">
        <SideBar />
        <div id="main-content">
            <div id="about-div">
                <h1 id="about-header">About Me</h1>
                <h3 id="about-text">My programming journey started in 2021 and since then I've become a highly driven
                    software
                    developer with a unique set of experiences that have shaped me into a collaborative team member,
                    skilled
                    communicator, and strong analytical thinker.</h3>
                <div id="tech-stack">
                    <ShowCourses v-if="coursesVisibility" />
                    <ShowFrameworks v-if="frameworksVisibility" />
                    <ShowLanguages v-if="languagesVisibility" />
                </div>
                <div id="align-buttons">
                    <button @click="switchLanguages" id="languages-button" class="about-buttons">Languages</button>
                    <button @click="switchFrameworks" id="frameworks-button" class="about-buttons">Frameworks</button>
                    <button @click="switchCourses" id="courses-button" class="about-buttons">Courses</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './side-bar/SideBar.vue'

// import tech stack components
import ShowCourses from './tech-components/ShowCourses.vue'
import ShowFrameworks from './tech-components/ShowFrameworks.vue';
import ShowLanguages from './tech-components/ShowLanguages.vue'

export default {
    components: { ShowCourses, ShowFrameworks, ShowLanguages, SideBar },
    data() {
        return {
            coursesVisibility: false,
            frameworksVisibility: false,
            languagesVisibility: true,
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
        },
    },
    mounted() {
        document.getElementById('languages-button').classList.add('clicked-about')
    }
}
</script>

<style>
#about-div {
    padding-top: 1rem;
    width: 90%;
    max-width: 1200px;
    animation: fadeInUp 1s ease-out forwards;
}

#about-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    color: #717378;
    width: 800px;
    page-break-after: auto;
    margin-left: 15px;
    height: fit-content;
    margin: 0;
}

#about-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh;
}

#tech-stack {
    display: flex;
    flex-wrap: wrap;
}


#align-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: 15px;
    margin-top: 20px;
    gap: 10px;
}

.about-buttons {
    flex-grow: 1;
    margin-right: 10px;
    border: 2px solid #0faf87;
    border-radius: 5px;
    background-color: transparent;
    color: #0faf87;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    min-width: 100px;
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
}

@media (max-width: 768px) {
    #about-text {
        width: 90%;

        font-size: 0.9rem;
        padding-left: 5%;

        padding-right: 5%;
    }

    #tech-stack {
        flex-direction: column;

    }

    .about-buttons {
        padding: 8px;
        font-size: 0.8rem;
        min-width: 80px;
        margin: 5px 0;
    }

    #align-buttons {
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #about-div {
        margin-left: 1.5rem;
    }
}

@media (min-width: 769px) {
    #about-div {
        display: block;
        max-width: 900px;
        margin: 2rem auto;
        margin-left: 4.5rem;
    }

    #about-text,
    #tech-stack,
    #align-buttons {
        width: 100%;
        text-align: left;
        margin-left: 0;
        padding: 0 2rem;
    }

    .about-buttons {
        width: auto;
        margin: 0 10px;
    }

    #tech-stack {
        justify-content: space-around;
        flex-direction: column;
    }
}
</style>