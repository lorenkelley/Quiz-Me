const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const LatestScore = localStorage.getItem('LatestScore');

const topScores = JSON.parse(localStorage.getItem('topScores')) || [];

const TOP_HIGH_SCORES = 5;

finalScore.innerText = LatestScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});

saveTopScore = (e) => {
    e.preventDefault();

    const score = {
        score: LatestScore,
        name: username.value,
    };
    topScores.push(score);
    topScores.sort((a, b) => b.score - a.score);
    topScores.splice(5);

    localStorage.setItem('topScores', JSON.stringify(topScores));
    window.location.assign('/');
};