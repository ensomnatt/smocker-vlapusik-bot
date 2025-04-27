import { DateTime } from "luxon";

const TIME_ZONE = "Europe/Moscow";

class DateUtils {
  static getCurrentDate(): DateTime {
    return DateTime.now().setZone(TIME_ZONE);
  }

  static getNextCgr(): number {
    return this.getCurrentDate().plus({ minutes: 30 }).toSeconds();
  }
}

export default DateUtils;
