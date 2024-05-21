import { getMonthName } from "./getMonthName";

const getDateInfo = (dateString: string) => {
    const date = new Date (dateString);
    const year = date.getFullYear();
    const month = getMonthName (date.getMonth());
    const datee = date.getDate();

    return month + ' ' + datee + ', ' + year;
}

export { getDateInfo };