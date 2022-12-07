// The Cloud Functions for Firebase SDK
// to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


exports.beforeCreate = functions
    .region("australia-southeast1")
    .auth.user()
    .beforeCreate((user, context) => {
      const whitelist = ["darrenpiersekelly@gmail.com",
        "sayerclaudia@gmail.com"];

      if (!whitelist.includes(user.email)) {
        throw new Error( "Unauthorized email '{{user.email}}'. " +
            "Contact administrators and request whitelist membership.");
      }
    });
