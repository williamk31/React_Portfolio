const projects = [
    {
        id: 1,
        name: 'PWA Text Editor',
        url: 'https://pwa-text-editor-y1nw.onrender.com/',
        repo: 'https://github.com/williamk31/PWA-Text_Editor',
        image: {
            src: '/assets/JATE_screenshot.png',
            alt: 'A Screenshot of the text-editor application'
        },
        description: 'This project is a simple text editor that is deployed as a Progressive Web Application, allowing the user to install the application on their own machine and run it locally. This application was built with Webpack and Workbox.'
    },
    {
        id: 2,
        name: 'Tech Blog',
        url: 'https://tech-blog-bnxf.onrender.com/',
        repo: 'https://github.com/williamk31/Tech_Blog',
        image: {
            src: '/assets/Tech-Blog_screenshot.png',
            alt: 'A Screenshot of a blog about tech-related topics'
        },
        description: 'This project is a CMS-style blog that can be used to post about tech-topics. Users can log-in, create a post, and add comments to other user\'s posts. This project was built using a PostgreSQL database and Sequelize, Node, and Express on the server side, and handlebars on the client side.'
    },
    {
        id: 3,
        name: 'Note Taker',
        url: 'https://note-taker-wpz5.onrender.com',
        repo: 'https://github.com/williamk31/note_taker',
        image: {
            src: '/assets/11-express-homework-demo.gif',
            alt: 'A GIF of the working application'
        },
        description: 'This project is an application that collects users notes and saves them to a JSON file for later use. Users can add, update, and delete notes. This project was built using Node and Express; the front-end was provided by the EdX BootCamp team.'
    },
    {
        id: 4,
        name: 'JavaScript Timed Quiz',
        url: 'https://williamk31.github.io/04-Challenge_Quiz/',
        repo: 'https://github.com/williamk31/04-Challenge_Quiz',
        image: {
            src: '/assets/quiz-screenshot.png',
            alt: 'A screenshot of a question in the quiz, with answer buttons underneath'
        },
        description: 'This project is a quiz that users can take to test their knowledge of basic JavaScript fundamentals. The quiz is timed, and every wrong answer subtracts five seconds from the remaining time. This project was built primarily with JavaScript, HTML, and CSS.'
    },
    {
        id: 5,
        name: 'Pindemonium',
        url: 'https://pindemonium.onrender.com/',
        repo: 'https://github.com/justin-hunter1/pindemonium',
        image: {
            src: '/assets/pindemonium_screenshot.png',
            alt: 'A screenshot of the homepage of the application'
        },
        description: 'This project was a group project that allows users to keep track of their favorite pinball machines and their highscores for each machine. Users can login, add a new machine to the database, and add a highscore to their machines. This project was built using the PostgreSQL, Sequelize, Node, Express, and Handlebars, as well as the Skeleton CSS library.'
    },
    {
        id: 6,
        name: 'CineSpin: The Reel Roulette',
        url: 'https://haleighelkins.github.io/CineSpin-The-Reel-Roulette-/',
        repo: 'https://github.com/HaleighElkins/CineSpin-The-Reel-Roulette-',
        image: {
            src: '/assets/cinespin_screenshot.png',
            alt: 'A screenshot of the homepage of the application'
        },
        description: 'This project was a group project that allows users to choose a genre of movie and will then randomly select a movie within that genre for them to watch. It was built using HTML, CSS, and JavaScript, as well as the Bulma CSS library.'
    },
]
export default projects