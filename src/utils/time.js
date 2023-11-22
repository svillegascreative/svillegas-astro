export const formatDate = (date, formatName) => {
  switch (formatName) {
    // e.g. October 2023
    case "monthYear":
      return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "long",
        timeZone: "America/Toronto",
      }).format(new Date(date));

    default:
      return date;
  }
};
