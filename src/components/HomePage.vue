<template>
    <div id="content-container">
        <img src="../assets/profile.jpg" alt="Avatar" class="avatar">
        <div id="main-div">
            <h1 class="home-headers">Hello, I'm David Araujo,</h1>
            <h2 class="home-headers">a computer science student at Penn State working hard to become an excellent
                Computer Scientist & Software Engineer.</h2>
            <div class="button-container">
                <button @click="navigateToAboutMe" class="home-page-button" ref="aboutMeButton">About Me</button>
            </div>
        </div>
    </div>
    <BackgroundParticles />
</template>

<script>
import BackgroundParticles from './background-particles/BackgroundParticles.vue'

export default {
    name: 'HomePage',
    props: ['HomeVisibility'],
    components: { BackgroundParticles },
    methods: {
        leaveHome() {
            this.$emit('leaveHome')
        },
        navigateToAboutMe() {
            const btn = this.$refs.aboutMeButton;
            if (btn) {
                btn.classList.add('fade-out-right');

                setTimeout(() => {
                    this.$router.push('/about-me');
                }, 500);
            }
        },
    },
}
</script>

<style>
#main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin: auto;
    padding: 0 5%;
    max-width: 800px;
    animation: fadeInUp 1s ease-out forwards;
}

#content-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    animation: fadeInUp 1s ease-out forwards;
}

.home-headers {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 4vw;
    color: #717378;
    margin: 0 auto;
    padding: 0 10px;
    max-width: 95%;
}

#learn-more-button {
    background: #0faf87;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
}

.avatar {
    width: 50%;
    max-width: 300px;
    height: auto;
    border-radius: 20%;
    border: 3px solid black;
    margin: 5% 0;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
}

.home-page-button {
    display: block;
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    width: auto;
}

@media (min-width: 800px) {
    #content-container {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }

    #main-div {
        align-items: flex-start;
        flex: 1;
        margin: 5% 0 0 0;
        max-width: 900px;
    }

    .avatar {
        width: 80%;
        margin: 0 5% 0 0;
        order: 2;
    }

    .home-headers {
        font-size: 32px;
        text-align: left;
        margin: 0 0 20px;
        width: 100%;
    }
}

@keyframes fadeOutRight {
    to {
        opacity: 0;
        transform: translateX(100%);
    }
}

.fade-out-right {
    animation: fadeOutRight 0.5s ease-out forwards;
}
</style>