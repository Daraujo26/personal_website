<template>
    <div id="app-container">
        <SideBar />
        <div id="main-content">
            <div id="projects-div">
                <h1 id="projects-header">Projects</h1>
                <div id="project-card-container">
                    <!-- project 1 -->
                    <a href="https://flappy-bird-eced3.web.app/">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="../assets/projects-vue-assets/flappy-bird.jpg" alt="Avatar"
                                        style="width:250px;height:250px;">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-1">
                                    <h1 id="projects-title">Flappy Bird</h1>
                                    <p id="projects-text">Flappy bird game for desktop. Implements a leaderboard system
                                        that
                                        displays the top three scores submitted by users.</p>
                                    <p id="projects-text"><strong>Tech: JavaScript, VueJS, Firebase</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- project 2 -->
                    <a href="https://spring.davidaraujo.me/">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="../assets/projects-vue-assets/pet-store.jpg" alt="Avatar"
                                        style="width:250px;height:250px;">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-2">
                                    <h1 id="projects-title">Online Pet Store</h1>
                                    <p id="projects-text">Project uses Java's Spring Boot framework implementing an
                                        authetication
                                        feature. When a user is unauthenticated they are able to
                                        simply browse the different pet listings, however, once authenticated they can
                                        use
                                        the
                                        Add,
                                        Delete, and Edit pet features.</p>
                                    <p id="projects-text"><strong>Tech: Java, Spring Boot, PostgreSQL</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- project 3 -->
                    <a href="https://davidaraujo.me/predict/">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="../assets/projects-vue-assets/mnist-dataset.jpg" alt="Avatar"
                                        style="width:250px;height:250px;">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-3">
                                    <h1 id="projects-title">Digit Recognition</h1>
                                    <p id="projects-text">Site permits user to draw any number from 0-9, and utilizes a
                                        model
                                        which
                                        was trained on the MNIST dataset to classify which number is being drawn.</p>
                                    <p id="projects-text"><strong>Tech: Django, Python, Machine Learning & AI</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- project 4 -->
                    <a href="https://davidaraujo.me/predict/">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="../assets/projects-vue-assets/anonymous-poll.jpg" alt="Avatar"
                                        style="width:250px;height:250px;">
                                </div>
                                <div class="flip-card-back" id="flip-card-back-4">
                                    <h1 id="projects-title">Anonymous Polling App</h1>
                                    <p id="projects-text">An anonymous polling app that allows users to ask questions
                                        and
                                        recieve
                                        answers. Implements add poll, remove poll, and search poll</p>
                                    <p id="projects-text"><strong>Tech: Django, Python, PostgreSQL</strong></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './side-bar/SideBar.vue'

export default {
    components: { SideBar },
}
</script>

<style>
#projects-div {
    padding-top: 3rem;
    width: 90%;
    max-width: 1200px;
    margin: auto;
    animation: fadeInUp 1s ease-out forwards;
}

#projects-title,
#projects-text {
    text-align: center;
    width: 100%;
    overflow-wrap: break-word;
}


#projects-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    color: #717378;
    page-break-after: auto;
    padding-bottom: 5px;
    margin: 0;
}

#projects-title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-weight: bold;
    color: #717378;
    margin-bottom: 3px;
}

#projects-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh;
}

#project-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
}

/* card css */
.flip-card {
    background-color: transparent;
    width: 250px;
    height: 250px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    margin: 0 10px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(33.333% - 20px);
}

.flip-card-inner,
.flip-card-front,
.flip-card-back {
    position: relative;
    width: 100%;
}

.flip-card img {
    max-width: 100%;
    height: auto;
}

.flip-card a {
    text-decoration: none;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    transform: rotateY(180deg);
    background-color: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
}

.flip-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

#flip-card-back-1 {
    background-color: chartreuse;
}

#flip-card-back-2 {
    background-color: aqua;
}

#flip-card-back-3 {
    background-color: bisque;
}

#flip-card-back-4 {
    background-color: fuchsia;
}

@media (max-width: 850px) {

    #projects-div {
        padding-top: 1rem;
    }

    .flip-card {
        width: 100%;
        margin-bottom: 40px;
        display: block;
        height: auto;
    }

    .flip-card-inner {
        display: block;
        width: 250px;
    }

    .flip-card-front,
    .flip-card-back {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px 10px 0 0;
        border: solid 2px #000000;
    }

    .flip-card img {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        display: block;
        border-radius: 10px 10px 0 0;
    }

    .flip-card-back {
        display: block;
        padding: 20px;
        box-sizing: border-box;
        transform: none !important;
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        border-top: none;
    }

    .flip-card-front {
        border-bottom: none;
    }

    #projects-title,
    #projects-text {
        text-align: center;
        padding: 0 10px;
    }

    .flip-card:hover .flip-card-inner,
    .flip-card:focus .flip-card-inner,
    .flip-card:active .flip-card-inner {
        transform: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #project-card-container {
        overflow-y: auto;
        max-height: 80vh;
    }
}

@media (min-width: 850px) {
    .flip-card-inner {
        transition: transform 0.8s;
        transform-style: preserve-3d;
        border-radius: 10px;
    }

    .flip-card img {
        border-radius: 10px;
    }

    .flip-card-front {
        border-radius: 10px;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-back {
        transform: rotateY(180deg);
        border-radius: 10px;
    }
}
</style>