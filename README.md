# De Zomerse Nachten PWA

This is the repository of the Progressive Web App of a side project of mine. It's merely used as an experiment to test real world case uses of a PWA among multiple platforms.

It uses the following frameworks and systems to run on:
* Angular 1 (as web app framework)
* Google Material Design Lite (for styling and layout components)
* Firebase (for database, authentication and other stuff that a web app needs nowadays, AngularFire is 'bowered' because of its ability to play super nice with Angular)
* Rollbar (for error reporting)
* Gulp (build tool)
* Karma (browser testing)

## Gulp
Gulp can be used to perform a number of build tasks. For now, the following tasks are configured:
* `gulp serve:dev`: Runs a local development server
* `gulp serve:proto`: Runs a local server with LiveReload where the development prototype is visible
* `gulp serve`: Runs both simultaneously

* `gulp build`: Builds a distributable artifact into the `dist/` folder that can be put on a platform.

Off course, unit tests are incorporated into the project. `gulp serve:dev` runs them automatically on change, but there are additional `gulp` tasks:
* `gulp karma:unit` runs all the unit tests once in Chrome, Firefox, and PhantomJS.
* `gulp karma:tdd` runs the unit tests once in PhantomJS.
* `gulp karma:debug` runs all the unit tests once in Chrome so they can be debugged.

## Zomerse Nachten database
The database needs to store the following objects:
* Events
* Users

### Events
An `Event` object will hold all the information of a typical Zomerse Nacht. The homepage of the PWA will hold a list full of `Event`s.

* `[Firebase id] id`: Event ID
* `[string] name`: Event name
* `[string] presenter`: The `User` ID of the presenter
* `[string] description`: A description of the event
* `[Date/Time] date-time`: The time and time of an event
* `[string] location`: The location where the event will be held
* `[array] attendees`: An array of `User` ID's for the event

### Users
An `User` object will hold information about the user. This can be used to give more information if the user is presenting an `Event`, or if he is an `Attendee`. Whenever a `User` presents an `Event`, he's *not* added as an attendee, because he's a presenter.

This object is extended with details cocerning authentication, but Firebase handles all that jazz.

* `[Firebase id] id`: User ID
* `[string] name`: Name of the user
* `[string] image`: URL for the image of the user
* `[array] presented`: An array of `Event` ID's that the `User` has presented
* `[array] attended`: An array of `Event ID's` that the `User` has attended.