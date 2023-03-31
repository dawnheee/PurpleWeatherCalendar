export interface WeatherInfo {
  nowTemp?: NowTemp;
  realFeelTemp?: string;
  iconNum?: number;
  describe?: string;
  maxTemp?: number;
  minTemp?: number;
}

export type NowTemp = number | null;

export type DateTime = string;
export type TimeZone = 'Asia/Seoul';
export interface StartEnd {
  dateTime: DateTime;
  timeZone: TimeZone;
}
export interface Event {
  summary: string;
  start: StartEnd;
  end: StartEnd;
}

export type SelectedDate = DateTime;

export interface GoogleEventItem {
  created: string;
  creator: object;
  start: StartEnd;
  end: StartEnd;
  etag: string;
  eventType: string;
  htmlLink: string;
  iCalUID: string;
  id: string;
  kind: string;
  organizer: object;
  reminders: object;
  sequence: number;
  status: string;
  summary: string;
  updated: string;
  link: string;
}

export interface GoogleEvents {
  kind: string;
  etag: string;
  summary: string;
  updated: string;
  timeZone: string;
  accessRole?: string;
  defaultReminders?: object[];
  nextSyncToken?: string;
  items: GoogleEventItem[];
}
