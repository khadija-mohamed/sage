const { google } = require('googleapis')

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2('521684474640-t2uq1kgpptdlf9uk30r5rsrai0s7ahdh.apps.googleusercontent.com', 
'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'
)

oAuth2Client.setCredentials({refresh_token: '1//04L7MwiHZZO3LCgYIARAAGAQSNwF-L9Ir6ne6EML8C2TmVpUEVDINc-b3Bln1mEWFhE7J3P0eWi4IdkWxNHNTjGPsD8mw-J8F2aw'
})


// here we should be using some sort of form to making these times -- to send this backend//
//using static times //

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 22)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 23)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 25)

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with Sage group`,
  location: `Discord`,
  description: `Get this ridiculous project out the way.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },
}

const sage = '83f4i6cd807d82eiok2q56bu3k@group.calendar.google.com'
// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: sage }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars[sage].busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: sage, resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)