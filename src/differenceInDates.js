const differenceInDates = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let timeDiff = date2.getTime() - date1.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    return dayDiff;
}

export default differenceInDates;