<template>
    <div id="app-container">
        <SideBar />
        <div id="main-content">
            <div id="contact-div">
                <h1 id="contact-header">Contact Me</h1>
                <div id="contact-text-div">
                    <p id="contact-text">Your interest in reaching out is greatly appreciated!</p>
                    <p id="contact-text">I strongly value open communication and am happy to hear any inquires,
                        feedback, or
                        collaboration opportunities. Please don't hesitate to reach out via the contact form provided.
                    </p>
                </div>
            </div>
            <div id="contact-form">
                <form @submit.prevent="sendEmail">
                    <div id="form-div" class="card">
                        <h2 id="form-h2">
                            Contact
                            <i class="plane-icon">&#9992;</i>
                        </h2>
                        <div class="inputs-row">
                            <div class="input">
                                <input class="input__field" type="text" id="name" placeholder="Name"
                                    v-model="form.name" />
                            </div>
                            <div class="input">
                                <input class="input__field" type="text" id="email" placeholder="Email"
                                    v-model="form.email" />
                            </div>
                        </div>
                        <div class="input">
                            <input class="input__field" type="text" id="subject" placeholder="Subject"
                                v-model="form.subject" />
                        </div>
                        <div class="input">
                            <textarea class="input__field" id="message" placeholder="Message..." v-model="form.message"
                                style="height: 10vh;"></textarea>
                        </div>
                        <div class="button-group">
                            <button id="form-button">Send</button>
                            <button id="form-button-reset" type="reset">Reset</button>
                        </div>
                    </div>

                </form>
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
            // Initialize form data properties
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        };
    },
    methods: {
        sendEmail() {
            fetch('/contact/submit/', { // Django url endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include CSRF token if CSRF protection is enabled in Django
                    'X-CSRFToken': this.getCookie('csrftoken'),
                },
                body: JSON.stringify(this.form),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    alert("Message sent successfully.");
                    this.resetForm();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("There was a problem with your submission. Please try again.");
                });
        },
        resetForm() {
            this.form = { name: '', email: '', subject: '', message: '' };
        },
        getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
    }

}
</script>

<style>
#contact-div {
    margin-top: 3%;
    margin-left: 3%;
    float: left;
    margin-bottom: 1vh;
}

#contact-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 17px;
    color: #717378;
    width: 30vw;
    page-break-after: auto;
    margin-left: 15px;
    height: fit-content;
    margin: 0;
    margin-bottom: 15px;
    animation: fadeInUp 1s ease-out forwards;
}

#contact-header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 28px;
    color: #0faf87;
    margin: 1vh;
    animation: fadeInUp 1s ease-out forwards;
}

#contact-text-div {
    position: absolute;
    page-break-after: auto;
    margin-top: 10%;
    margin-left: 5%;
}

#contact-form {
    width: 30%;
    float: right;
    margin-right: 8%;
    margin-top: 20%;
    animation: fadeInUp 1s ease-out forwards;
}

@import url('https://rsms.me/inter/inter.css');

#form-div {
    --color-light: white;
    --color-dark: #212121;
    --color-signal: #fab700;

    --color-background: var(--color-light);
    --color-text: var(--color-dark);
    --color-accent: var(--color-signal);

    --size-bezel: .5rem;
    --size-radius: 4px;

    line-height: 1.4;

    font-family: 'Inter', sans-serif;
    font-size: calc(.6rem + .4vw);
    color: var(--color-text);
    background: var(--color-background);
    font-weight: 300;
    padding: 0 calc(var(--size-bezel) * 3);
    margin-top: -2vw;
    margin-left: -8vw;
    padding-bottom: 15px;
}

#form-h2 {
    font-weight: 900;
}

mark {
    background: var(--color-accent);
    color: var(--color-text);
    font-weight: bold;
    padding: 0 0.2em;
}

.card {
    background: var(--color-background);
    padding: calc(4 * var(--size-bezel));
    margin-top: calc(4 * var(--size-bezel));
    border-radius: var(--size-radius);
    border: 3px solid var(--color-shadow, currentColor);
    box-shadow: .5rem .5rem 0 var(--color-shadow, currentColor);

    &--inverted {
        --color-background: var(--color-dark);
        color: var(--color-light);
        --color-shadow: var(--color-accent);
    }

    &--accent {
        --color-background: var(--color-signal);
        --color-accent: var(--color-light);
        color: var(--color-dark);
    }

    *:first-child {
        margin-top: 0;
    }
}


.l-design-widht {
    max-width: 40rem;
    padding: 1rem;
}

.input {
    position: relative;
    margin-bottom: var(--size-bezel);
    flex: 1;
}

.inputs-row {
    display: flex;
    justify-content: space-between;
    gap: 1vw;
}

.input__label {
    position: absolute;
    left: var(--size-bezel);
    top: 50%;
    transform: translateY(-50%);
    padding: 0 var(--size-bezel);
    background: var(--color-background);
    transition: transform 120ms ease-in, font-size 120ms ease-in;
    pointer-events: none;
}

.input__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 2px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: var(--size-radius);
    background-color: #fff;
    color: var(--color-dark);
}

.input__field:focus {
    border-color: #0faf87;
    outline: none;
}

.input {
    position: relative;

    &__label {
        position: absolute;
        left: 0;
        top: 0;
        padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * .5);
        margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
        background: pink;
        white-space: nowrap;
        transform: translate(0, 0);
        transform-origin: 0 0;
        background: var(--color-background);
        transition: transform 120ms ease-in;
        font-weight: bold;
        line-height: 1.2;
    }

    &__field {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: 3px solid currentColor;
        padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
        color: currentColor;
        background: transparent;
        border-radius: var(--size-radius);

        &:focus,
        &:not(:placeholder-shown) {
            &+.input__label {
                transform: translate(.25rem, -65%) scale(.8);
                color: var(--color-accent);
            }
        }
    }
}


.button-group {
    margin-top: calc(var(--size-bezel) * 2.5);
}

#form-button {
    color: currentColor;
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-accent);
    border: none;
    border-radius: var(--size-radius);
    font-weight: 900;
    background-color: #0faf87;

    &[type=reset] {
        background: var(--color-background);
        font-weight: 200;
    }
}

#form-button+button {
    margin-left: calc(var(--size-bezel) * 2);
}

#form-button-reset {
    color: currentColor;
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-accent);
    border: none;
    border-radius: var(--size-radius);
    font-weight: 900;

    &[type=reset] {
        background: #C0C0C0;
        font-weight: 200;
    }
}

.plane-icon {
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
}

.hidden {
    display: none;
}

@media (max-width: 850px) {

    #contact-div,
    #contact-form {
        width: 100%;
        margin: 1.5rem auto;
        float: none;
    }

    #contact-header {
        margin: 10px;
        margin-left: 25px;
    }

    #contact-text-div {
        position: relative;
        width: 90%;
        margin: 0 auto 20px;
        text-align: center;
    }

    #contact-form {
        order: 2;
        width: 90%;
        margin: 40px auto;
        padding: 0;
    }

    #form-div {
        margin: 0;
        width: auto;
    }

    #contact-text {
        width: auto;
        margin: 10px;
    }
}
</style>