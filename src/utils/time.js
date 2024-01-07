export const formatDate = (date, formatName) => {
  switch (formatName) {
    // e.g. October 2023
    case "monthYear":
      return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "long",
        timeZone: "America/Toronto",
      }).format(new Date(date));

    // e.g. Jun 6, 2023
    case "MMMDYYYY":
      return new Intl.DateTimeFormat("en-CA", {
        dateStyle: "medium",
        timeZone: "America/Toronto",
      }).format(new Date(date));

    // e.g. 1/8/2024, 10:13 a.m.
    case "qqq":
      return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "America/Toronto",
      }).format(new Date(date));

    default:
      return date;
  }
};
