import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
import { tweetsData } from '/data.js'

// Click Event Listener
document.addEventListener('click', function (e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
    else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if (e.target.dataset.reply) {
        handleReplyClick(e.target.dataset.reply)
    }
    else if (e.target.id === 'tweet-btn') {
        handleTweetBtnClick()
    } else if (e.target.id === 'submitReply') {
        pushResponse(e.target.dataset.newReply)
    } else if (e.target.id === 'moon') {
        toggleDarkMode()
    } else if (e.target.id === 'sun') {
        toggleLightMode()
    }
});


// Handle the click in the Like Btn 
function handleLikeClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked) {
        targetTweetObj.likes--
    }
    else {
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}


// Handle the click in the Retweet btn
function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    }
    else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render()
}


//Handle the click in the Reply btn
function handleReplyClick(replyId) {
    let repliesContainer = document.getElementById(`replies-${replyId}`);
    repliesContainer.classList.toggle('hidden');
    let textAreaExists = repliesContainer.querySelector('textarea');
    if (!textAreaExists) {
        let replyTextArea = document.createElement('div')
        replyTextArea.innerHTML +=
            ` 
        <div class = "reply-container" >
        <textarea
            class="reply-textarea"
            placeholder="How do you want to respond?" 
            id="response-input"
        ></textarea>
        <i class="fa-solid fa-arrow-right submit-icon" id="submitReply" data-new-reply="${replyId}" ></i>
        </div>
                `
        let firstReply = repliesContainer.firstChild;
        repliesContainer.insertBefore(replyTextArea, firstReply);
    }
}

//Push a Response 
function pushResponse(replyId) {
    const replyInput = document.getElementById('response-input');
    console.log(replyInput.value)
    const targetTweetObj = tweetsData.find(function (tweet) {
        return tweet.uuid === replyId;
    });

    if (replyInput.value && targetTweetObj) {
        targetTweetObj.replies.unshift({
            handle: '@Scrimba',
            profilePic: '/images/scrimbalogo.png',
            tweetText: replyInput.value,
        });
    }

    render();
    replyInput.value = '';
}


// Handle the Tweet Submission
function handleTweetBtnClick() {
    const tweetInput = document.getElementById('tweet-input')

    if (tweetInput.value) {
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `/images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        render()
        tweetInput.value = ''
    }
}

//Renders the HTML of the Feed
function getFeedHtml() {
    let feedHtml = ``

    tweetsData.forEach(function (tweet) {

        let likeIconClass = ''

        if (tweet.isLiked) {
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''

        if (tweet.isRetweeted) {
            retweetIconClass = 'retweeted'
        }

        let repliesHtml = ''

        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function (reply) {
                repliesHtml += `
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }


        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`
    })
    return feedHtml
}

// Renders the returned HTML Feed 
function render() {
    document.getElementById('feed').innerHTML = getFeedHtml()
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode')
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false')
    updateIconDisplay(isDarkMode);
}

function toggleLightMode() {
    const isDarkMode = document.body.classList.contains('dark-mode')
    if (isDarkMode) {
        toggleDarkMode()
    }
}

function updateIconDisplay(isDarkMode) {
    const moonIcon = document.getElementById('moon')
    const sunIcon = document.getElementById('sun')
    moonIcon.style.display = isDarkMode ? 'none' : 'block'
    sunIcon.style.display = isDarkMode ? 'block' : 'none'
}

function loadUserPreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    if (isDarkMode) {
        document.body.classList.add('dark-mode')
    }
    updateIconDisplay(isDarkMode);
}

loadUserPreference()
render()
