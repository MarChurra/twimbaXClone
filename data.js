import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const tweetsData = [
    {
        handle: `@ObnoxiousBot💲💲💲`,
        profilePic: `./T/images/troll.jpg`,
        likes: 15,
        retweets: 5,
        tweetText: `Buy Dogecoin, Make 💰💰💰 with low low prices. 
            Guaranteed return on investment.DMs open, dont miss this chance!!`,
        replies: [
            {
                handle: `@scammedPerson ✅`,
                profilePic: `./T/images/scammedPerson.jpg`,
                tweetText: `How can I buy?!`,
            }
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@SpaceX ✅`,
        profilePic: `./T/images/spaceXLogo.png`,
        likes: 10500,
        retweets: 500,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
            {
                handle: `@TomCruise ✅`,
                profilePic: `./T/images/tcruise.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
            {
                handle: `@ChuckNorris ✅`,
                profilePic: `/images/chucknorris.jpeg`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@Elon ✅`,
        profilePic: `./T/images/musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `Let it sink in 🚽`,
        replies: [
            {
                handle: `@RealJeff ✅`,
                profilePic: `/images/jeff.png`,
                tweetText: `Bold move cowboy 🐎`,
            },
            {
                handle: `@RealMark ✅`,
                profilePic: `./T/images/Mark.jpg`,
                tweetText: `Has anybody heard about the "Metaverse" yet 🤖`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@AwesomeCoder29`,
        profilePic: `./T/images/flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Who wants to see my awesome project, only done with HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: `./T/images/overflow.png`,
                tweetText: `How can you even call yourself a coder?! Go work at Starbucks!`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `./T/images/love.png`,
                tweetText: `Yes please, show us! You are doing great ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
]
