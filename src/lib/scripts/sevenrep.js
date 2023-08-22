function createRepeatDate() {
    const DATE = new Date();

    let year = DATE.getFullYear();
    let month = DATE.getMonth() + 1;
    let day = DATE.getDate();

    const MaxDaysInMonth = new Date(year, month, 0).getDate();

    let supposedNextDate = day + 7;

    if (supposedNextDate > MaxDaysInMonth) {
        let difference = supposedNextDate - MaxDaysInMonth;
        month = month + 1;
        if (month == 13) {
            year += 1;
            month = 1;
        }
        day = difference;
    } else {
        day = supposedNextDate;
    }
    return `${year}-${month}-${day}`;
}



export function create7DayRep(box) {
    const newBox = box

    newBox.repeat.count = 0
    newBox.repeat.date = createRepeatDate()
    newBox.repeat.type = 'seven'

    
    return newBox
}