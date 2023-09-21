import { changeThemeState } from "../../../store";

function getUserPreference() {
	return localStorage.getItem('theme') || 'light';
}
function saveUserPreference(userPreference) {
	localStorage.setItem('theme', userPreference);
}

function setAppliedMode(mode) {
	document.documentElement.dataset.theme = mode;
}

function rotatePreferences(userPreference) {
	return userPreference == 'light' ? 'dark' : 'light';
}

export async function switchTheme() {
	let userPreference = getUserPreference();
	const newUserPref = rotatePreferences(userPreference);

	saveUserPreference(newUserPref);
	setAppliedMode(newUserPref);
	changeThemeState(newUserPref)

}
