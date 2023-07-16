import i18n from "i18next";
import dayjs from "dayjs";
import moment from "jalali-moment";

// *** export handles
export { dateToGeo, dateToPersian, dateToInitializeOnForm, dateToGregorian };

// ***
const dateToGeo = (year, month, day, language = i18n.language || "fa") => {
  let converted = "";
  let selected = `${year}-${month}-${day}`;
  try {
    converted = moment.from(selected, language, "YYYY-MM-DD").format("YYYY-MM-DD");
  } catch (error) {
    converted = "";
  }
  // return
  return { converted, selected };
};

// ***
const dateToPersian = (
  date,
  options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
) => {
  if (date) {
    return new Date(date).toLocaleString("fa-IR-u-nu-latn", {
      // 'fa-IR'
      timeZone: "Asia/Tehran",
      ...options,
    });
  } else {
    return null;
  }
};

// ***
const dateToInitializeOnForm = (date, language = i18n.language || "fa") => {
  if (date) {
    return dayjs(date, "YYYY-MM-DD").locale(language);
  } else {
    return null;
  }
};

const dateToGregorian = (date, language = i18n.language || "fa") => {
  return moment
    .from(
      date, // "YYYY-MM-DD"
      language,
      "YYYY-MM-DD",
    )
    .format("YYYY-MM-DD");
};
