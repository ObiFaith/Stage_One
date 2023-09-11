const dayText = document.querySelector('#day');
const timeText = document.querySelector('#time');

const date = new Date();
timeText.innerText = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;

const currentDay = () => {
    const day = new Date().getDay();
    switch(day){
        case 1:
            dayText.innerText = 'Monday'
            break;
        case 2:
            dayText.innerText = 'Tuesday'
            break;
        case 3:
            dayText.innerText = 'Wednesday'
            break;
        case 4:
            dayText.innerText = 'Thursday'
            break;
        case 5:
            dayText.innerText = 'Friday'
            break;            
        case 6:
            dayText.innerText = 'Saturday'
            break;
        default:
            dayText.innerText = 'Sunday';
    }
}

currentDay();