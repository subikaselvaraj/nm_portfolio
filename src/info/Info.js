import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Subika",
    lastName: "S",
    initials: "S", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Back End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in the INDIA'
        },
        {
            emoji: "💼",
            text: "Final Year Student"
        },
        {
            emoji: "📧",
            text: "subikapgpcet@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/subikaselvaraj",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/subikaselvaraj/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Subika S Final-Year BE Computer Science and Engineering Student As a dedicated final-year student pursuing a Bachelor of Engineering in Computer Science and Engineering at PGP College of Engineering and Technology, I have developed a strong foundation in programming, software development, and data analysis. Throughout my studies, I have gained hands-on experience in [Python], along with a solid understanding of algorithms and data structures. I am passionate about applying technical skills to solve real-world challenges and am eager to contribute to innovative projects in the tech industry.",
    skills:
        {
            proficientWith: ['python', 'Web Development'],
            exposedTo: ['nodejs']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ]
    
}
