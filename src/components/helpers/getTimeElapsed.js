const getTimeElasped = (date) => {
    const started = new Date(date);
    const elapsed = Date.now() - started.getTime();

    const seconds = Math.floor((elapsed / 1000) % 60);
    const minute = Math.floor(((elapsed / (1000 * 60)) % 60))
    const hour = Math.floor(((elapsed / (1000 * 60 * 60))))

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

export default getTimeElasped;