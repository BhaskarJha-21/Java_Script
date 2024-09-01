function updateTime(zone, elementId) {
    const options = {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const formatter = new Intl.DateTimeFormat([], options);
    document.getElementById(elementId).textContent = formatter.format(new Date());
}

function updateClocks() {
    updateTime('America/New_York', 'time-ny');
    updateTime('Asia/Delhi', 'time-delhi');
    updateTime('Europe/London', 'time-london');
    updateTime('Asia/Tokyo', 'time-tokyo');
    updateTime('Australia/Sydney', 'time-sydney');
}

setInterval(updateClocks, 1000);
