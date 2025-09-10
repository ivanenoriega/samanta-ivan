import { WeddingData } from "@/data/weddingData";

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  allDay: boolean;
}

export function generateCalendarEvent(data: WeddingData): CalendarEvent {
  // Parse the wedding date (format: DD.MM.YYYY)
  const [day, month, year] = data.weddingDate.split(".");
  const weddingDateTime = new Date(
    `${year}-${month}-${day}T${data.weddingTime}:00`
  );

  // Create end time (event ends at midnight)
  const endDateTime = new Date(weddingDateTime);
  endDateTime.setHours(24, 0, 0, 0);

  return {
    title: `Boda de ${data.coupleNames}`,
    description: `${data.quote}\n\n${data.dressCodeInfo}\n\n${data.tipsInfo}`,
    location: `${data.eventLocation}, ${data.eventAddress}`,
    startDate:
      weddingDateTime.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
    endDate: endDateTime.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
    allDay: false,
  };
}

export function generateGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.startDate}/${event.endDate}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateOutlookCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title,
    startdt: event.startDate,
    enddt: event.endDate,
    body: event.description,
    location: event.location,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function generateYahooCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    v: "60",
    view: "d",
    type: "20",
    title: event.title,
    st: event.startDate,
    et: event.endDate,
    desc: event.description,
    in_loc: event.location,
  });

  return `https://calendar.yahoo.com/?${params.toString()}`;
}

export function generateAppleCalendarUrl(event: CalendarEvent): string {
  // For Apple Calendar, we'll use the ICS file download approach
  // This is more reliable than the webcal:// subscription method
  return "ics-download";
}

export function downloadICSFile(event: CalendarEvent): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Calendar//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `boda-${event.title.toLowerCase().replace(/\s+/g, "-")}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
