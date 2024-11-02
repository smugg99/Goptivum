export default {
	greeting: 'Witaj świecie',
	language: {
		name: 'Język',
		select: 'Wybierz język',
	},
	theme: {
		name: 'Motyw',
		options: {
			dracula: 'Drakula',
			dark: 'Ciemny',
			light: 'Jasny',
			auto: 'Automatyczny',
		},
	},
	day: {
		monday: 'Poniedziałek',
		tuesday: 'Wtorek',
		wednesday: 'Środa',
		thursday: 'Czwartek',
		friday: 'Piątek',
		saturday: 'Sobota',
		sunday: 'Niedziela',
	},
	weather: {
		temperature: 'Temperatura',
		weather: 'Pogoda',
		conditions: {
			// Grupa 2xx: Burza
			'thunderstorm': 'Burza',
			'thunderstorm with light rain': 'Burza z lekkim deszczem',
			'thunderstorm with rain': 'Burza z deszczem',
			'thunderstorm with heavy rain': 'Burza z ulewnym deszczem',
			'light thunderstorm': 'Lekka burza',
			'heavy thunderstorm': 'Silna burza',
			'ragged thunderstorm': 'Burza z porywistym wiatrem',
			'thunderstorm with light drizzle': 'Burza z lekką mżawką',
			'thunderstorm with drizzle': 'Burza z mżawką',
			'thunderstorm with heavy drizzle': 'Burza z silną mżawką',

			// Grupa 3xx: Mżawka
			'drizzle': 'Mżawka',
			'light intensity drizzle': 'Lekka mżawka',
			'heavy intensity drizzle': 'Silna mżawka',
			'light intensity drizzle rain': 'Lekki deszcz z mżawką',
			'drizzle rain': 'Deszcz z mżawką',
			'heavy intensity drizzle rain': 'Silny deszcz z mżawką',
			'shower rain and drizzle': 'Przelotny deszcz i mżawka',
			'heavy shower rain and drizzle': 'Silny przelotny deszcz i mżawka',
			'shower drizzle': 'Przelotna mżawka',

			// Grupa 5xx: Deszcz
			'rain': 'Deszcz',
			'light rain': 'Lekki deszcz',
			'moderate rain': 'Umiarkowany deszcz',
			'heavy intensity rain': 'Silny deszcz',
			'very heavy rain': 'Bardzo silny deszcz',
			'extreme rain': 'Ekstremalnie silny deszcz',
			'freezing rain': 'Marznący deszcz',
			'light intensity shower rain': 'Lekki przelotny deszcz',
			'shower rain': 'Przelotny deszcz',
			'heavy intensity shower rain': 'Silny przelotny deszcz',
			'ragged shower rain': 'Przerywany przelotny deszcz',

			// Grupa 6xx: Śnieg
			'snow': 'Śnieg',
			'light snow': 'Lekki śnieg',
			'heavy snow': 'Silny śnieg',
			'sleet': 'Deszcz ze śniegiem',
			'light shower sleet': 'Lekki przelotny deszcz ze śniegiem',
			'shower sleet': 'Przelotny deszcz ze śniegiem',
			'light rain and snow': 'Lekki deszcz i śnieg',
			'rain and snow': 'Deszcz i śnieg',
			'light shower snow': 'Lekki przelotny śnieg',
			'shower snow': 'Przelotny śnieg',
			'heavy shower snow': 'Silny przelotny śnieg',

			// Grupa 7xx: Atmosfera
			'mist': 'Mgła',
			'smoke': 'Dym',
			'haze': 'Zamglenie',
			'sand/dust whirls': 'Wirujące piaski/pyły',
			'fog': 'Mgła',
			'sand': 'Piasek',
			'dust': 'Pył',
			'volcanic ash': 'Popiół wulkaniczny',
			'squalls': 'Szkwały',
			'tornado': 'Tornado',

			// Grupa 800: Bezchmurnie
			'clear sky': 'Bezchmurne niebo',
			'clear': 'Bezchmurnie',

			// Grupa 80x: Chmury
			'few clouds': 'Małe zachmurzenie (11-25%)',
			'scattered clouds': 'Rozproszone chmury (25-50%)',
			'broken clouds': 'Pochmurno (51-84%)',
			'overcast clouds': 'Całkowite zachmurzenie (85-100%)',
			'clouds': 'Chmury',
		},
	},
	page: {
		title: 'Optivum - Lepszy Plan Lekcji',
		not_found: 'Nie znaleziono strony',
		home: 'Strona główna',
		divisions: 'Klasy',
		division: 'Klasa - {id}',
		teachers: 'Nauczyciele',
		teacher: 'Nauczyciel - {id}',
		rooms: 'Sale',
		room: 'Sala - {id}',
		settings: 'Ustawienia',
	},
	search: {
		division: 'Wyszukaj klase...',
		teacher: 'Wyszukaj nauczyciela...',
		room: 'Wyszukaj sale...',
	},
	schedule: {
		ordered_number: 'Nr',
		time_range: 'Godzina',
	}
};
