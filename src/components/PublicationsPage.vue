<template>
    <div class="app">
        <div id="app-container" :class="{ 'app-container-shifted': isSidebarVisible }">
            <SideBar @toggleSidebar="toggleSidebar" />
            <div id="main-content">
                <div id="content-div">
                    <div id="publications-wrapper">
                        <h1 id="publications-header">Publications</h1>
                        <div id="publications-container">
                            <ul>
                                <li class="publications-text">Cui, J., Araujo, D. A., Saha, S., & Kabir, M. F. (2024).
                                    CS-Mixer: A Cross-Scale Vision Multi-Layer Perceptron with Spatial–Channel Mixing.
                                    IEEE Transactions on Artificial Intelligence, 1(01), 1-13. <a href="https://www.computer.org/csdl/journal/ai/5555/01/10562192/1XSjzEhU5uo">Link</a></li>
                                <li class="publications-text">Cui, J. & Araujo, D. A. (2024). Rethinking use-restricted
                                    open-source
                                    licenses for regulating abuse of generative models. Big Data & Society 11(1). <a
                                        href="https://doi.org/10.1177/20539517241229699">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="links-container">
                        <h3 id="links-header">Links</h3>
                        <a class="links" href="https://orcid.org/0009-0008-3321-9195">ORCID</a>
                        <a class="links" href="https://scholar.google.com/citations?user=NeF7b_IAAAAJ&hl=en">Google
                            Scholar</a>
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
#content-div {
    margin-top: 3%;
    margin-left: 0;
    margin-right: auto;
    max-width: 95%;
    animation: fadeInUp 1s ease-out forwards;
}

#publications-wrapper,
#links-container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
}

.publications-text,
.links {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: clamp(22px, 2.5vw, 18px);
    margin-bottom: 1rem;
}

#publications-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh;
}

#links-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
    color: #0faf87;
    text-align: center;
}

#links-header {
    margin-top: 0;
}

#links-container {
    padding-top: 2rem;
}

.links {
    text-decoration: underline;
    margin-bottom: 0.5rem;
}

@media (min-width: 850px) {

    #publications-wrapper,
    #links-container {
        text-align: left;
        margin-left: 3%;
    }

    #publications-header,
    #links-header {
        text-align: left;
    }

    .publications-text,
    .links {
        text-align: justify;
        font-size: clamp(18px, 2.5vw, 18px);
    }

    #content-div {
        padding-right: 0;
    }
}

@media (max-width: 850px) {
    #content-div {
        padding-left: 5%;
        padding-right: 5%;
    }

    #publications-wrapper,
    #links-container {
        padding: 0;
    }

    #links-container {
        margin: 0 auto 0 20px;
    }

    .publications-text,
    .links {
        text-align: justify;
        font-size: clamp(16px, 2.5vw, 18px);
    }

    #publications-header,
    #links-header {
        text-align: left;
    }

    #publications-container a {
        text-decoration: underline;
    }
}
</style>
