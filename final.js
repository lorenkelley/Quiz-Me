const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const LatestScore = localStorage.getItem('LatestScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = LatestScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveTopScore = (e) => {
    e.preventDefault();

    const score = {
        score: LatestScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};