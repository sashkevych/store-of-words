export function currentDate() {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const date = new Date();

	const number = date.toString().split(' ')[2];
	const month = monthNames[date.getMonth()].toUpperCase().slice(0, 3);
	const day = days[date.getDay()].toUpperCase();

	return `${day}, ${number}. ${month}`;
}
