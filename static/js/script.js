// Challenge 1: Your Age in Days


function ageInDays() {
     var birthYear = prompt('What year were you born.... Good Freind?');
     var ageInDayss = (2021 - birthYear) * 365;
     var h1 = document.createElement('h1');
     var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days in old');
     h1.setAttribute('id', 'ageInDays');
     h1.appendChild(textAnswer);
     document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
     document.getElementById('ageInDays').remove();
}

