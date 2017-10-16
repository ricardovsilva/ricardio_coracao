function startCountdown(targetYear, targetMonth, targetDay, targetHour, targetMinute){
    simplyCountdown('.simply-countdown-one', {
        year: targetYear,
        month: targetMonth + 1,
        day: targetDay,
        hours: targetHour,
        minutes: targetMinute, 
        enableUtc: false,
        words: {
            hours: 'hora',
            minutes: 'minuto',
            seconds: 'segundo',
            pluralLetter: 's'
        }
    });
}