<template>
    <div id="courses-div">
        <h4 id="courses-header">Relevant Coursework</h4>
        <p id="courses-text">CMPSC 465: Data Structures and Algorithms - Fall 2024</p>
        <p id="courses-subtext">This course focuses on fundamental computer science concepts, including data structures,
            algorithm analysis, recursion, trees, sets, and graph theory. Problem sets were primarily implemented in
            <strong>Python</strong> and <strong>C</strong>, with an emphasis on understanding asymptotic notations like Big-O.
        </p>
        <p id="courses-text">CMPSC 311: Systems Programming - Fall 2024</p>
        <p id="courses-subtext">This course covers Unix system programming in <strong>C</strong>, focusing on developing
            software
            components, understanding low-level system influences, and working with tools like compilers, debuggers, and
            memory management. It provides hands-on experience with Unix, exploring system services, performance
            optimization, and practical exposure to "real code" from Linux and GNU utilities.</p>
        <p id="courses-text">CMPSC 421: Netcentric Computing - Spring 2024</p>
        <p id="courses-subtext">Course delves into JavaScript and AJAX for crafting Rich Internet Applications, focusing
            on async programming with API calls.
            Throughout the class I created several projects using the following technologies: <strong>Javascript &
                Typescript,
                jQuery, VueJS, Angular, React, and NodeJS.</strong>
        </p>
        <p id="courses-text">CMPSC 221: Object Oriented Programming with Web-Based Applications - Fall 2023</p>
        <p id="courses-subtext">Major topics include virtual machines, intermediate code generation
            <strong>(Java-specific)</strong>,
            graphical user interfaces (GUI) design, event handling, server-side programming with database queries, and
            security, permissions and file management concepts for client/server systems.
        </p>
        <p id="courses-text">CMPSC 132: Programming and Computation II: Data Structures - Spring 2023</p>
        <p id="courses-subtext">Introduces the foundations of object-oriented programming using <strong>Python</strong>,
            the design and analysis of
            efficient algorithms using important data structures, and programming techniques that support reusable and
            modular program components, including data abstraction, polymorphism, and higher-order functions.
        </p>
        <!-- <h3 id="view-more-courses"><a href="">More...</a></h3> -->
    </div>
</template>

<script>

</script>

<style>
#courses-div {
    margin: 0 auto;
    margin-bottom: 4vh;
    max-width: 800px;
    width: 95%;
    padding: 1rem;
    max-height: 60vh;
    overflow-y: auto;
    animation: fadeInUp 1s ease-out forwards;
}

#courses-text,
#courses-header,
#courses-subtext {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0.5rem 0;
    width: 100%;
}

#courses-header {
    font-size: 1.5rem;
    color: #0faf87;
}

#courses-subtext {
    color: #717378;
    text-indent: 0;
    overflow-wrap: break-word;
}

#view-more-courses {
    text-align: center;
    margin-top: 2rem;
    text-decoration: underline;
}

@media (max-width: 950px) {
    #courses-div {
        padding: 1rem 2%;
        max-height: 50vh;
    }

    #courses-text,
    #courses-header,
    #courses-subtext {
        font-size: 0.85rem;
    }

    #courses-header {
        font-size: 0.9rem;
    }

    #view-more-courses a {
        display: block;
        padding: 0.5rem;
    }
}
</style>