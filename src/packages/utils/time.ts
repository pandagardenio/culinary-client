export type TimeUnit = 'seconds' | 'minutes' | 'hours';

export const guessSecondsConversionBestTimeUnit = (time: number): TimeUnit => {
    return time > 3600 ? 'hours' :
        time > 60 ? 'minutes' :
        'seconds';
}

export const convertSeconds = (time: number, timeUnit: TimeUnit) => {
    switch (timeUnit) {
        case 'hours':
            return time / 3600;
        case 'minutes':
            return time / 60;
        case 'seconds':
            return time;
    }
}

export const formatSeconds = (
    time: number,
    timeUnit: TimeUnit = guessSecondsConversionBestTimeUnit(time),
    round: boolean = true
) => {
    const convertedTime = convertSeconds(time, timeUnit);
    const timeToRender = round ? Math.round(convertedTime) : convertedTime;
    return `${timeToRender} ${timeUnit}`;
};