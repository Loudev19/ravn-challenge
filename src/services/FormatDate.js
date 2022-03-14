export function FormatDate(date) {
    const value = new Date(date)
    const left = Math.floor((new Date() - value) / (1000*60*60*24))
    const months = {
        0: 'JANUARY',
        1: 'FEBRUARY',
        2: 'MARCH',
        3: 'APRIL',
        4: 'MAY',
        5: 'JUNE',
        6: 'JULY',
        7: 'AUGUST',
        8: 'SEPTEMBER',
        9: 'OCTOBER',
        10: 'NOVEMBER',
        11: 'DECEMBER'
    }
    if (left === 0) return 'TODAY'
    if (left === -1) return 'TOMORROW';
    if (left === 1) return 'YESTERDAY';
    return value.getDate() + " " + months[value.getMonth()] + ", " + value.getFullYear()
}