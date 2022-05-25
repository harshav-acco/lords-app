import moment from 'moment';

const DEFAULT_DATE_FORMAT = `MMMM D, YYYY`;
const DEFAULT_TIME_FORMAT = `HH:MM:SS`;

export const getDate = (format = DEFAULT_DATE_FORMAT) => {
    return moment().format(format);
};

export const getTime = (format = DEFAULT_TIME_FORMAT) => {
    return moment().format(format);
};

export const changeFormat = (defaultTime, format) => {
    return moment(defaultTime).format(format);
};

export const getDiff = (firstDate, secondDate = moment()) => {
    const firstA = moment(firstDate);
    const secondA = moment(secondDate);

    return firstA.diff(secondA, 'hours');
}
