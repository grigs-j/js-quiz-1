const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score-btn");
const finalScore = document.getElementById("final-score");

//get from storage
const mostRecentScore = localStorage.getItem("mostRecentScore");

//or will initialize highscores array if first time saving
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

//grabs input value
username.addEventListener("keyup", () => {
    //disable btn if falsy username value
    saveScoreBtn.disabled = !username.value;
    // console.log(username.value);
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    //add score to array
    highScores.push(score);

    //return score if b score is higher than a score
    //will iterate thru array
    highScores.sort((a, b) => b.score - a.score);

    //cut off everything after index 5 of sorted array
    highScores.splice(5);

    //add highscores back into local storage after truning it back into json string
    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("./index.html");
};
