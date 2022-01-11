/*
    This file calculates the time from the Unix Epoch.

    Author: Josh Archer
    Date: 1/11/2022
    Filename: time.js
 */

//replace my "magic numbers" with named constants (all in one place)
const MILLIS_TO_SECS = 1000;
const SECS_TO_MIN = 60;
const MINS_TO_HOUR = 60;
const HOURS_TO_DAY = 24;
const DAYS_TO_YEAR = 365; //fudge a bit here...

let millis = new Date().getTime();
let seconds = millis / MILLIS_TO_SECS;
let minutes = seconds / SECS_TO_MIN;
let hours = minutes / MINS_TO_HOUR;
let days = hours / HOURS_TO_DAY;
let years = days / DAYS_TO_YEAR;

//round our numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//display them
let millisElement = document.querySelector("div#millis span");
millisElement.innerHTML = millis;

let secondsElement = document.querySelector("div#seconds span");
secondsElement.innerHTML = seconds;

let minutesElement = document.querySelector("div#minutes span");
minutesElement.innerHTML = minutes;

let hoursElement = document.querySelector("div#hours span");
hoursElement.innerHTML = hours;

let daysElement = document.querySelector("div#days span");
daysElement.innerHTML = days;

let yearsElement = document.querySelector("div#years span");
yearsElement.innerHTML = years;