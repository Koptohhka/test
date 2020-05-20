export const currentDate = new Date();

export function getDayOfWeek(datetime) {
    const dateObj = new Date(datetime);
    return dateObj.getDay() - 1;
}