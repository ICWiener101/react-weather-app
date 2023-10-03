export function weekdayConverter(dateString) {
      const date = new Date(dateString);
      const day = date.getDay();

      const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
      ];
      const weekday = daysOfWeek[day];

      return weekday;
}

export function degreesToWindDirection(degrees) {
      const directions = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW',
      ];

      const index = Math.round((degrees % 360) / 22.5);
      return directions[index % 16];
}
