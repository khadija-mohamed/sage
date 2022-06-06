const { google } = require("googleapis");

const { OAuth2 } = google.auth;

/** * calendar    *
 * * @param {*} Name
 * * @param {*} mentor
 * * @param {*} description
 * * @param {*} eventStartTime
 * * @param {*} eventEndTime
 * * @return {*}
 * */

const calendar = ({ date, description, endTime, mentor, name, startTime }) => {
  console.log("test test tesy", {
    date,
    description,
    endTime,
    mentor,
    name,
    startTime,
  });
  const oAuth2Client = new OAuth2(
    "521684474640-t2uq1kgpptdlf9uk30r5rsrai0s7ahdh.apps.googleusercontent.com",
    "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"
  );

  oAuth2Client.setCredentials({
    refresh_token:
      "1//04L7MwiHZZO3LCgYIARAAGAQSNwF-L9Ir6ne6EML8C2TmVpUEVDINc-b3Bln1mEWFhE7J3P0eWi4IdkWxNHNTjGPsD8mw-J8F2aw",
  });

  // here we should be using some sort of form to making these times -- to send this backend//
  //using static times //

  // Create a new calender instance.
  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

  // Create a new event start date instance for temp uses in our calendar.
  const eventStartTime = new Date(`${date} ${startTime}`);
  eventStartTime.setDate(eventStartTime.getDay() + 17);
  eventStartTime.setMinutes(eventStartTime.getMinutes() + 1);

  // Create a new event end date instance for temp uses in our calendar.
  const eventEndTime = new Date(`${date} ${endTime}`);
  eventEndTime.setDate(eventEndTime.getDay() + 17.1);
  eventEndTime.setMinutes(eventEndTime.getMinutes() + 2);

  // Create a dummy event for temp uses in our calendar
  const event = {
    summary: `Sage Meet with ${name} and ${mentor}`,
    location: `On Sage`,
    description,
    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: "America/Toronto",
    },
    end: {
      dateTime: eventEndTime,
      timeZone: "America/Toronto",
    },
  };

  const sage = "ikao06ql38u1e7hepcc6jlo8b8@group.calendar.google.com";
  // Check if we a busy and have an event on our calendar for the same time.
  calendar.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: "America/Toronto",
        items: [{ id: sage }],
      },
    },

    (err, res) => {
      // Check for errors in our query and log them if they exist.
      if (err) return console.error("Free Busy Query Error: ", err);

      // Create an array of all events on our calendar during that time.
      const eventArr = res.data.calendars[sage].busy;

      // Check if event array is empty which means we are not busy
      if (eventArr.length === 0)
        // If we are not busy create a new calendar event.
        return calendar.events.insert(
          { calendarId: sage, resource: event },
          (err) => {
            // Check for errors and log them if they exist.
            if (err)
              return console.error("Error Creating Calender Event:", err);
            // Else log that the event was created.
            return console.log("Calendar event successfully created.");
          }
        );

      // If event array is not empty log that we are busy.
      return console.log(`Sorry I'm busy...`);
    }
  );
};

module.exports = calendar;
