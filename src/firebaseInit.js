import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ScoutBadgesTest App's Firebase configuration
// This comes from the FB console at:
//
const firebaseConfig = {
  apiKey: "AIzaSyD7e4lY6cZAbhbjSF_U5BvBivFRR9-icck",
  authDomain: "scoutbadgestest.firebaseapp.com",
  projectId: "scoutbadgestest",
  storageBucket: "scoutbadgestest.appspot.com",
  messagingSenderId: "36155991641",
  appId: "1:36155991641:web:22fc33ce7cff1081e4f348",
};

export { FireApp, FireDB, FireAuth };

var FireAuth = (function () {
  var instance;

  function createInstance() {
    return getAuth();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var FireApp = (function () {
  var instance;

  function createInstance() {
    // Initialize Firebase
    var object = initializeApp(firebaseConfig);

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var FireDB = (function () {
  var instance;

  function createInstance() {
    var object = getFirestore(FireApp.getInstance());
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
