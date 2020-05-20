export const currentDate = new Date();

export function getDayOfWeek(datetime) {
    const dateObj = new Date(datetime);
    return dateObj.getDay() - 1;
}

export function setDynamicTime() {
    const currentDate = new Date();
    const timer = document.getElementById('timer');
    timer.textContent = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
