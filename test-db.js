const admin = require('firebase-admin')
const secret = require('./mydailystatus-f94b8-firebase-adminsdk-7gooz-234940fc31.json')
const { GeoFirestore } = require('geofirestore')
admin.initializeApp({
    credential: admin.credential.cert(secret)
})

const db = admin.firestore()
const dbgeo = new GeoFirestore(db)

dbgeo
.collection('test')
    .add({
        test: 1,
        coordinates: new admin.firestore.GeoPoint(-20.218990, -45.939060)
    })
    .then(()=>{
        console.log('ok')
    })