<template>
    <div id="app-container">
        <SideBar />
        <div id="main-content">
            <div id="projects-div">
                <h1 id="projects-header">Projects</h1>
                <div id="project-list-container">
                    <!-- Project 1 -->
                    <a href="https://quoteahead.com/" class="project-card">
                        <img src="../assets/projects-vue-assets/TaskMaster Final-07.png" alt="Flappy Bird"
                            class="project-img">
                        <div class="project-details">
                            <h2 class="project-title">Quote Ahead</h2>
                            <p class="project-description">Founder and Lead Developer of a mobile app startup designed
                                to simplify quote generation, job scheduling, and invoicing for blue-collar contractors.
                                <strong>Quote Ahead enhances operational efficiency by providing an all-in-one platform
                                    tailored
                                    to the needs of small to medium-sized service businesses.</strong> Utilizing React
                                Native (Expo),
                                Redux, Supabase (main backend), Spring Boot (Micro-services), Twilio SMS and Mailjet, and
                                Postgres to build and manage the platform.
                                <strong>Leading a small team of developers, collaborating with industry professionals,
                                    and
                                    exploring advanced integrations like Electric SQL for local caching.</strong>
                                Currently in testing, with plans for
                                launch, and anticipating significant traction due to strong industry interest and
                                competitive
                                features.
                            </p>
                            <p class="project-tech"><strong>Tech:</strong> React Native (Expo), Redux, Supabase, Spring Boot, PostgreSQL, Twilio SMS, Mailjet, Jira and Confluence</p>
                        </div>
                    </a>

                    <!-- Project 2 -->
                    <a href="https://flappy-bird-eced3.web.app/" class="project-card">
                        <img src="../assets/projects-vue-assets/flappy-bird.jpg" alt="Flappy Bird" class="project-img">
                        <div class="project-details">
                            <h2 class="project-title">Flappy Bird</h2>
                            <p class="project-description">Web Flappy Bird game with all game logic embedded inside the
                                Vue app! Implements a leaderboard system using Firebase that displays the top three
                                scores submitted by users.</p>
                            <p class="project-tech"><strong>Tech:</strong> JavaScript, VueJS, Firebase</p>
                        </div>
                    </a>

                    <!-- Project 3 -->
                    <a href="https://davidaraujo.me/predict/" class="project-card">
                        <img src="../assets/projects-vue-assets/mnist-dataset.jpg" alt="Digit Recognition"
                            class="project-img">
                        <div class="project-details">
                            <h2 class="project-title">Digit Recognition</h2>
                            <p class="project-description">Users can draw any digit (0-9) and receive real-time
                                classification. Developed and trained a PyTorch model, achieving over 99% accuracy on
                                the test dataset, and integrated with a Django backend to process user input and deliver
                                predictions.</p>
                            <p class="project-tech"><strong>Tech:</strong> Django, Python, PyTorch, Machine Learning &
                                AI</p>
                        </div>
                    </a>

                    <!-- Project 4 -->
                    <a href="https://spring.davidaraujo.me/" class="project-card">
                        <img src="../assets/projects-vue-assets/pet-store.jpg" alt="Pet Store" class="project-img">
                        <div class="project-details">
                            <h2 class="project-title">Online Pet Store</h2>
                            <p class="project-description">Project uses Java's Spring Boot framework implementing a demo
                                authentication feature using Spring Security. Allows browsing and managing pet listings
                                with CRUD operations.</p>
                            <p class="project-tech"><strong>Tech:</strong> Java, Spring Boot, PostgreSQL</p>
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
/* Default (desktop/tablet) styles */
#projects-div {
    padding-top: 3rem;
    width: 90%;
    max-width: 1200px;
    margin: auto;
    animation: fadeInUp 1s ease-out forwards;
}

#projects-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh 0;
    text-align: left;
}

#project-list-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 20px;
}

.project-card {
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
    align-items: center;
}

.project-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-img {
    width: 150px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
}

.project-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.project-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
}

.project-tech {
    font-size: 12px;
    color: #888;
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
    #projects-header {
        font-size: 24px;
        text-align: center;
    }

    #project-list-container {
        padding: 10px;
    }

    .project-card {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 10px;
    }

    .project-img {
        width: 100%; 
        max-width: 350px; 
        border-radius: 10px;
        margin-bottom: 15px; 
    }

    .project-details {
        align-items: center;
        text-align: center;
    }

    .project-title {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .project-description {
        font-size: 13px;
        margin-bottom: 10px;
    }

    .project-tech {
        font-size: 12px;
    }

    /* Add padding to bottom of container for better scrolling on mobile */
    #project-list-container {
        padding-bottom: 20px;
    }
}
</style>