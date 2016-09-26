/* Magic Mirror Config
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left',
			config: {
				displayType: 'digital'
			}

		},
		{
			module: 'calendar',
			header: 'Liz\'s Calendar',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar',
						url: 'HIDDEN'
					}
				]
			}
		},
		{
			module: 'calendar',
			header: 'Birthdays/holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'birthday-cake',
						url: 'HIDDEN'
					},
					{
						symbol: 'suitcase',
						url: 'HIDDEN'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Tauranga, NZ',
				locationID: '2208032',  //ID from http://www.openweathermap.org
				appid: 'HIDDEN'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Tauranga, NZ',
				locationID: '2208032',  //ID from http://www.openweathermap.org
	            appid: 'HIDDEN'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "BBC UK News",
						url: "http://feeds.bbci.co.uk/news/uk/rss.xml"
					}
				],
				showDescription: false,
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					//{
					//	title: "BBC Sport - F1",
					//	url: "http://feeds.bbci.co.uk/sport/0/formula1/rss.xml"
					//}
					{
						title: "NZ Herald top stories",
						url: "http://rss.nzherald.co.nz/rss/xml/nzhtsrsscid_000000698.xml"
					}
				],
				showDescription: false,
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
