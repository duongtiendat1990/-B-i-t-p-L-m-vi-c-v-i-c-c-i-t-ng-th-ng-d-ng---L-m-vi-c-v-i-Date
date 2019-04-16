function checkTimeLived(birthday) {
    let timeOfBirth = birthday;
    let Birthday = new Date(timeOfBirth);
    let presentTime = new Date();
    let yearsLived = Math.round((presentTime.getTime() -Birthday.getTime())/31536000000);
    let monthsLived = Math.round((presentTime.getTime() -Birthday.getTime())/2628000000);
    let daysLived = Math.round((presentTime.getTime() -Birthday.getTime())/86400000);
    let hoursLived = Math.round((presentTime.getTime() -Birthday.getTime())/3600000);
    let minutesLived = Math.round((presentTime.getTime() -Birthday.getTime())/60000);
    let secondsLived = Math.round((presentTime.getTime() -Birthday.getTime())/1000);
    return 'You have lived for: ' +'\n' + yearsLived + ' Years' +'\n' + 'Or ' + monthsLived + ' Months' + '\n'
        + 'Or ' + daysLived + ' Days' + '\n' + 'Or ' + hoursLived + ' Hours' + '\n' + 'Or ' + minutesLived + ' Minutes' + '\n' + 'Or ' + secondsLived + ' Seconds';
}