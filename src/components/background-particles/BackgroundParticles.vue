<template>
    <div id="particles-js" class="particles-container"></div>
</template>

<script>
import 'particles.js';

export default {
    mounted() {
        this.$nextTick(() => {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80, // Increased number of particles
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: '#ffffff',
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.5, // opacity
                        anim: {
                            enable: false,
                        }
                    },
                    size: {
                        value: 5, // Larger particles
                        random: true,
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#4d4d4e', // Line color
                        opacity: 0.4, // Lines visiblity
                        width: 1, // Lines thickness
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true,
                    },
                },
            });
        });
    }
};
</script>

<style>
.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>