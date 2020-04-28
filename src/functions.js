export const getTomorrow = () => {
    const d = new Date();
    const now_utc =  Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 2,8, 0, 0);
    return new Date(now_utc);
};

const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Мая",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
]

export function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = months[date.getMonth()]

    let yy = date.getFullYear();

    return `${dd} ${mm} ${yy}`
}