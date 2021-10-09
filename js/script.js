const num = 10;
const question = confirm(`Хочешь ли ты, парень, сыграть в игру?`);

if (question === true) {
    let userNum = +prompt(`Тогда введи любое число!`);

    if (!isNaN(userNum) && userNum === num) {
        alert(`Круто! Ты победил!`);
    } else if (!isNaN(userNum) && userNum !== num) {
        alert(`Ты проиграл:(`);
    } else if (isNaN(userNum)) {
        alert(`Извини, но это не число!!!`);
    }
} else {
    alert(`Ну и зря!`);
}