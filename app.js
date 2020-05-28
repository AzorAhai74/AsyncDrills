function wordUp(message) {
    console.log(`Hey homie what is the ${message}`);
    setTimeout(function() {
        console.log('Hey homie, time waits for no one');
    }, 2000);
};

wordUp('word');

function getWords(message) {
    console.log(`Hey brother, ${message}`);
    setTimeout(function() {
        console.log('Hey brother, word');
    }, 3000);
    setTimeout(function() {
        console.log('Hey sister, word');
    }, 2000);
    setTimeout(function() {
        console.log('Hey little man, word');
    }, 1000);
};

getWords('word');



