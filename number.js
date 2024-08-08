
document.addEventListener('DOMContentLoaded', () => {
    const guessForm = document.getElementById('guess-form');
    const sumInput = document.getElementById('sum-input');
    const resultDiv = document.getElementById('result');
    const computerGuessSpan = document.getElementById('computer-guess');
    const feedbackP = document.getElementById('feedback');
    const restartButton = document.getElementById('restart-btn');
    const backToMainButton = document.getElementById('back-to-main');

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const sum = parseInt(sumInput.value);

        if (isNaN(sum)) {
            feedbackP.textContent = 'Please enter a valid number.';
            resultDiv.classList.remove('hide');
            return;
        }

        const middleNumber = Math.floor(sum / 3);
        const firstNumber = middleNumber - 1;
        const thirdNumber = middleNumber + 1;

        if (sum !== firstNumber + middleNumber + thirdNumber) {
            feedbackP.textContent = 'There is no set of three consecutive numbers that add up to this sum.';
        } else {
            computerGuessSpan.textContent = `${firstNumber}, ${middleNumber}, ${thirdNumber}`;
            feedbackP.textContent = '';
        }

        resultDiv.classList.remove('hide');
    });

    restartButton.addEventListener('click', function() {
        sumInput.value = '';
        resultDiv.classList.add('hide');
    });

    backToMainButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
