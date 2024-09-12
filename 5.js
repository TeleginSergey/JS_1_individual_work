function formatDate(date){
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

const currentDate = new Date();
console.log(formatDate(currentDate));


function diffDates(date1, date2){
    return Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
}
