import { DateTime } from "luxon";

const TIME_ZONE = "Europe/Moscow";

class DateUtils {
  static getCurrentDate(): DateTime {
    return DateTime.now().setZone(TIME_ZONE);
  }

  static getNextCgr(): number {
    return this.getCurrentDate().plus({ minutes: 30 }).toSeconds();
  }

  static unixToString(unix: number): string {
    let seconds = unix;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    const years = Math.floor(days / 365);
    const remainingDaysAfterYears = days % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const remainingDays = remainingDaysAfterYears % 30;

    let result: string = "";

    if (years > 0) {
      result += `${years} ${this.getYearString(years)} `;
    }
    if (months > 0) {
      result += `${months} ${this.getMonthString(months)} `;
    }
    if (remainingDays > 0) {
      result += `${remainingDays} ${this.getDayString(remainingDays)} `;
    }
    if (remainingHours > 0) {
      result += `${remainingHours} ${this.getHourString(remainingHours)} `;
    }
    if (remainingMinutes > 0) {
      result += `${remainingMinutes} ${this.getMinuteString(remainingMinutes)}`;
    }

    if (result === "") result = "меньше минуты";

    return result;
  }

  static getYearString(years: number): string {
    if (years === 1) return "год";
    if (years >= 2 && years <= 4) return "года";
    return "лет";
  }

  static getDayString(days: number): string {
    if (days === 1) return "день";
    if (days >= 2 && days <= 4) return "дня";
    return "дней";
  }

  static getMonthString(months: number): string {
    if (months === 1) return "месяц";
    if (months >= 2 && months <= 4) return "месяца";
    return "месяцев";
  }

  static getHourString(hours: number): string {
    if (hours === 1) return "час";
    if (hours >= 2 && hours <= 4) return "часа";
    return "часов";
  }

  static getMinuteString(minutes: number): string {
    if (minutes === 1) return "минута";
    if (minutes >= 2 && minutes <= 4) return "минуты";
    return "минут";
  }
}

export default DateUtils;
