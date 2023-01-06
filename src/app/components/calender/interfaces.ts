/**
 * Interface representing month data
 */
export interface Month {
  name: string; // name of the month
  days: number, // number of days in the months e.g. 30, 31, 29, 28
  start: string, // what day of the week the month start
  holidays: Holiday[], // array of all the holidays in the month
  events: Event[], // array of events created for the month
  reminders: Reminder[], //array of the reminders created for the month
}

/**
 * Interface representing a holiday
 */
export interface Holiday {
  day: number,
  title: string,
}

/**
 * Interface representing an Event
 */
export interface Event {
  day: number,
  title: string,
}

/**
 * Interface representing a reminder
 */
export interface Reminder {
  day: number,
  title: string,
}
