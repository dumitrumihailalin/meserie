
var admin = require("firebase-admin");
var uid = process.argv[2];

var serviceAccount = require("./meserie-client-app-firebase-adminsdk-g1cq9-cad907a027.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "meserie-client-app.appspot.com"
});

admin.auth().setCustomUserClaims(uid, { admin: true })
    .then(() => {
        console.log('custom claims ', uid);
        process.exit();
    })
    .catch( error => {
        console.log(error)
        process.exit(1);
    })
