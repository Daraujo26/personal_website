<template>
    <div class="app">

        <div id="app-container" :class="{ 'app-container-shifted': isSidebarVisible }">
            <SideBar @toggleSidebar="toggleSidebar" />
            <div id="experience-container">
                <h1 id="experience-header">Experience</h1>
                <div id="experience-list">
                    <!-- IBM Experience -->
                    <div class="experience-card">
                        <div
                            style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            <h2 class="company-name">IBM</h2>
                            <img src="@/assets/IBM_logo.png" class="company-logo" style="height: 35px; width: 80px;" />
                        </div>
                        <p class="role-location">Software Engineer and Data Science Co-op | State College, PA</p>
                        <p class="duration">January 2025 - Present</p>
                        <ul class="responsibilities">
                            <li>Engineering data pipelines and analytics tools for Elevance Health to extract insights
                                from AI-driven voice transcription logs. </li>
                            <li>Working with machine learning models to enhance speech-to-text accuracy; identified
                                transcription inefficiencies and improved response precision.</li>
                            <li>Implementing unit testing frameworks to accelerate the transition of AI models from
                                development to production.</li>
                        </ul>
                        <a href="https://newsroom.ibm.com/2024-05-21-IBM-Unveils-Next-Chapter-of-watsonx-with-Open-Source,-Product-Ecosystem-Innovations-to-Drive-Enterprise-AI-at-Scale#:~:text=Elevance%20Health%3A%20Driving%20an%20AI%2Dfirst%20Digital%2Dfirst%20Experience%20in%20Healthcare%20Customer%20Service"
                            target="_blank" rel="noopener noreferrer" class="project-link">Article including project
                            details</a>
                    </div>


                    <!-- IBM Experience -->
                    <div class="experience-card">
                        <div
                            style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            <h2 class="company-name">IBM</h2>
                            <img src="@/assets/IBM_logo.png" class="company-logo" style="height: 35px; width: 80px;" />
                        </div>
                        <p class="role-location">Data Science Intern | State College, PA</p>
                        <p class="duration">June 2024 – January 2025</p>
                        <ul class="responsibilities">
                            <li>Contributed to the development of AI-driven chatbot services for Penn State’s student
                                body using Large Language Models (LLMs) with Python and Watsonx.</li>
                            <li>Utilized Selenium for web scraping to collect diverse data (e.g., student clubs and
                                organizations), enhancing chatbot response capabilities.</li>
                            <li>Engaged in backend authentication using Spring Boot and Microsoft Azure for OAuth
                                integration, ensuring chatbot service security.</li>
                        </ul>
                        <button @click="toggleMore" class="view-more-btn">{{ showMore ? 'View less' : 'View more'
                        }}</button>
                        <transition name="expand">
                            <div v-if="showMore" class="more-content">
                                <img src="@/assets/ibm_team.jpg" alt="Project Image"
                                    style="max-width: 100%; height: auto; border-radius: 5px;" />
                                <a href="https://newsroom.ibm.com/2025-02-17-penn-state-taps-ibm-to-develop-ai-virtual-assistant-to-foster-success-for-student-body"
                                    target="_blank" rel="noopener noreferrer" class="project-link">AI virtual assistant
                                    project article</a>
                            </div>
                        </transition>
                    </div>

                    <!-- Develop for Good Experience -->
                    <div class="experience-card">
                        <div
                            style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            <h2 class="company-name">Develop for Good</h2>
                            <img src="@/assets/develop-for-good.png" class="company-logo"
                                style="height: 40px; width: 140px;" />
                        </div>
                        <p class="role-location">Student Engineer | Remote</p>
                        <p class="duration">January 2025 - February 2025</p>
                        <ul class="responsibilities">
                            <li>Developed a mobile journaling app for Christians worldwide to reflect on their
                                spirituality and foster community engagement.</li>
                            <li>Designed and implemented front-end journal entry features and voice transcription
                                capabilities which allow users to quickly document their reflections.</li>
                            <li>Worked 5-7 hours per week alongside a team of developers; optimized accessibility and
                                user experience.</li>
                            <li>Refined performance and scalability for long-term adoption; the app’s projected to reach
                                1M users.</li>
                        </ul>
                    </div>

                    <!-- Penn State MCREU Experience (2024) -->
                    <div class="experience-card">
                        <div
                            style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            <h2 class="company-name">Penn State - MCREU</h2>
                            <img src="@/assets/psu.png" class="company-logo" style="height: 50px; width: 80px;" />
                        </div>
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
                        <div
                            style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            <h2 class="company-name">Penn State - MCREU</h2>
                            <img src="@/assets/psu.png" class="company-logo" style="height: 50px; width: 80px;" />
                        </div>
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
            showMore: false
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        toggleMore() {
            this.showMore = !this.showMore;
        }
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
    overflow-y: auto;
    max-height: calc(100vh - 100px);
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
    padding-bottom: 30px;
    /* Add padding to bottom */
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

.view-more-btn {
    background-color: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.view-more-btn:hover {
    background-color: #0d9a75;
}

.more-content {
    padding: 10px 0;
}

.project-link {
    display: block;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #0faf87;
    text-decoration: none;
}

.project-link:hover {
    text-decoration: underline;
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.5s ease;
}

.expand-enter,
.expand-leave-to {
    max-height: 0;
    overflow: hidden;
}

.expand-enter-to,
.expand-leave {
    max-height: 500px;
    /* Adjust this value if your content is taller */
    overflow: hidden;
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
    margin: 0;
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

    .project-link {
        display: block;
        margin-top: 10px;
        font-size: 16px;
        color: #0faf87;
        text-decoration: none;
    }

    .project-link:hover {
        text-decoration: underline;
    }
}
</style>