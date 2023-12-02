
export function formatDate(inputDate) {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export function getDayFromDate(inputDate) {
    const date = new Date(inputDate);
    return String(date.getDate()).padStart(2, "0");
};

export function getDay(inputDate) {
    const date = new Date(inputDate);
    let day = date.toLocaleString("es-ES", { weekday: "long" });
    return day.charAt(0).toUpperCase() + day.slice(1);
};