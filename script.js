const quotes = [
"Act as if what you do makes a difference. It does.",
"Happiness depends upon ourselves.",

"Out of the mountain of despair, a stone of hope.", 

"Change the world by being yourself.",

"Every moment is a fresh beginning.",

"Die with memories, not dreams.",

"Aspire to inspire before you expire.",

"Whatever you are, be a good one.",

"Wherever you go, go with all your heart.",

"Leave no stone unturned.",

"Dream big and dare to fail.",

"What we think, we become.",

"Turn your wounds into wisdom.",

"Be yourself; everyone else is already taken.",

"Doubt kills more dreams than failure ever will.",

"Good things take time.",

"Life is short, and it's up to you to make it sweet.",

"Do more of what makes you happy.",

"Make each day your masterpiece.",

"Inhale courage, exhale fear.",

"It always seems impossible until it's done.",

"Stay foolish to stay sane.",

"Whatever you do, do it well.",


"Act without expectation.",

"Be yourself. The world worships the original.",

"Simplicity is the ultimate sophistication.",

"Do what you can, with what you have, where you are.",

 "Don't regret the past, just learn from it.",

"It's never too late to be what you might've been.",

"Be the change that you wish to see in the world.",

"Limit your 'always' and your 'nevers'.",

"Believe you can and you’re halfway there.",

"Don’t wait. The time will never be just right.",

"Be so good they can’t ignore you.",

"Do what you love, love what you do.",

"Success is the sum of small efforts." ,

"Focus on being productive instead of busy.",

"Choose people who choose you.",

"Create your own sunshine.",

"You are enough just as you are.",

"To be the best, you must be able to handle the worst.",

 "Live simply. Dream big.",

"Keep going. Be all in.",

"Be the energy you want to attract.",

"You only fail when you stop trying.",

"Wake up with determination. Go to bed with satisfaction.",

"You do not find the happy life. You make it.",

"Perseverance is not a long race; it is many short races one after the other.",

"If opportunity doesn’t knock, build a door.",

"Light tomorrow with today.",
]


const setDate = new Date();
document.getElementById("date").innerHTML = setDate;

function createQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex]
}

document.getElementById("getquote").addEventListener("click", function (){
    const quote = createQuote();
    document.getElementById("quotedisplay").value = quote;
    console.log(quote)
})