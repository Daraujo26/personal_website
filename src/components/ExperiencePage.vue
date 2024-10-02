<template>
    <div class="app">

        <div id="app-container" :class="{ 'app-container-shifted': isSidebarVisible }">
            <SideBar @toggleSidebar="toggleSidebar" />
            <div id="experience-container">
                <h1 id="experience-header">Experience</h1>
                <div id="experience-list">
                    <!-- IBM Experience -->
                    <div class="experience-card">
                        <h2 class="company-name">IBM</h2>
                        <p class="role-location">Data Science Intern | State College, PA</p>
                        <p class="duration">June 2024 – Present</p>
                        <ul class="responsibilities">
                            <li>Contributed to the development of AI-driven chatbot services for Penn State’s student
                                body
                                using Large Language Models (LLMs) with Python and Watsonx.</li>
                            <li>Utilized Selenium for web scraping to collect diverse data (e.g., student clubs and
                                organizations), enhancing chatbot response capabilities.</li>
                            <li>Engaged in backend authentication using Spring Boot and Microsoft Azure for OAuth
                                integration, ensuring chatbot service security.</li>
                        </ul>
                    </div>

                    <!-- Penn State MCREU Experience (2024) -->
                    <div class="experience-card">
                        <h2 class="company-name">Penn State - MCREU</h2>
                        <p class="role-location">Research Intern | Remote</p>
                        <p class="duration">June 2024 – July 2024</p>
                        <ul class="responsibilities">
                            <li>Trained and evaluated over 30 different architectures with unique modules to enhance
                                Dice
                                accuracy and overall performance using Python, PyTorch, NumPy, and Einops.</li>
                            <li>Focused on brain tumor segmentation datasets such as BraTS 2023 and Synapse to improve
                                AI
                                medical image classification.</li>
                            <li>Finalized the best-performing model, CS-UNet, a cross-scale, DPLR-like 3D segmentation
                                model, currently undergoing publication.</li>
                        </ul>
                    </div>

                    <!-- Penn State MCREU Experience (2023) -->
                    <div class="experience-card">
                        <h2 class="company-name">Penn State – MCREU</h2>
                        <p class="role-location">Research Intern | Remote</p>
                        <p class="duration">June 2023 – July 2023</p>
                        <ul class="responsibilities">
                            <li>Awarded top overall poster in the research program.</li>
                            <li>Trained and evaluated models using tools such as PyTorch, Einops, Matplotlib, and
                                Seaborn.
                            </li>
                            <li>Explored cross-scale token aggregation and spatial-channel mixing for enhancing a Vision
                                MLP
                                backbone on the ImageNet 1k dataset.</li>
                            <li>Published research findings in the IEEE Transactions on Artificial Intelligence journal.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './side-bar/SideBar.vue'

export default {
    components: { SideBar },
    data() {
        return {
            isSidebarVisible: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
    },
}
</script>

<style>
/* General container styling */
#experience-container {
    padding: 50px 20px;
    max-width: 1200px;
    margin: auto;
    animation: fadeIn 1s ease-out;
    overflow-y: auto; /* Enabling vertical scroll */
    max-height: calc(100vh - 100px); /* Limit height to viewport height minus some space */
}

/* Header styling */
#experience-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 32px;
    color: #0faf87;
    text-align: left;
    margin-bottom: 40px;
}

/* Experience list */
#experience-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px; /* Add padding to bottom */
}

/* Experience card */
.experience-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.experience-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Company name and role */
.company-name {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.role-location {
    font-size: 18px;
    color: #555;
    margin-bottom: 5px;
}

.duration {
    font-size: 16px;
    color: #888;
    margin-bottom: 15px;
}

/* Responsibilities list */
.responsibilities {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
    color: #555;
}

.responsibilities li {
    margin-bottom: 10px;
}

/* Responsive styling */
@media (max-width: 768px) {
    #experience-container {
        padding: 20px 10px;
        max-height: calc(100vh - 50px);
    }

    #experience-header {
        font-size: 28px;
        margin-bottom: 20px;
    }

    .experience-card {
        padding: 15px;
    }

    .company-name {
        font-size: 22px;
    }

    .role-location {
        font-size: 16px;
    }

    .duration {
        font-size: 14px;
    }

    .responsibilities {
        font-size: 14px;
    }
}
</style>