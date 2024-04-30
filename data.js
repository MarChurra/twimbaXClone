import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const tweetsData = [
    {
        handle: `@ObnoxiousBot💲💲💲`,
        profilePic: require('./images/troll.jpg'),
        likes: 15,
        retweets: 5,
        tweetText: `Buy Dogecoin, Make 💰💰💰 with low low prices. 
            Guaranteed return on investment.DMs open, dont miss this chance!!`,
        replies: [
            {
                handle: `@scammedPerson ✅`,
                profilePic: require('./images/scammedPerson.jpg'),
                tweetText: `How can I buy?!`,
            }
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@SpaceX ✅`,
        profilePic: require('./images/spaceXLogo.png'),
        likes: 10500,
        retweets: 500,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
            {
                handle: `@TomCruise ✅`,
                profilePic: require('./images/tcruise.png'),
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
            {
                handle: `@ChuckNorris ✅`,
                profilePic: require('./images/chucknorris.jpeg'),
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@Elon ✅`,
        profilePic: require('./images/musk.png'),
        likes: 6500,
        retweets: 234,
        tweetText: `Let it sink in 🚽`,
        replies: [
            {
                handle: `@RealJeff ✅`,
                profilePic: require('/images/jeff.png'),
                tweetText: `Bold move cowboy 🐎`,
            },
            {
                handle: `@RealMark ✅`,
                profilePic: require('./images/Mark.jpg'),
                tweetText: `Has anybody heard about the "Metaverse" yet 🤖`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
    {
        handle: `@AwesomeCoder29`,
        profilePic: require('./images/flower.png'),
        likes: 10,
        retweets: 3,
        tweetText: `Who wants to see my awesome project, only done with HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: require('./images/overflow.png'),
                tweetText: `How can you even call yourself a coder?! Go work at Starbucks!`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: require('./images/love.png'),
                tweetText: `Yes please, show us! You are doing great ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    },
]
