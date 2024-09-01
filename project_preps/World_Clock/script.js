function updateClock() {
	const timezone = document.getElementById('timezone').value;
	const clockElement = document.getElementById('clock');
	const date = new Date();
	const options = {
		timeZone: timezone,
		timeZoneName: 'short'
	};
	const formattedDate = date.toLocaleTimeString('en-US', options);
	clockElement.textContent = formattedDate;
}

document.getElementById('timezone').addEventListener('change', updateClock);
setInterval(updateClock, 1000);
