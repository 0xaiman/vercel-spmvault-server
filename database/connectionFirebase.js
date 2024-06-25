import admin from 'firebase-admin';
import "dotenv/config";


async function connectionFirebase(){

   
    try{
        const base64Key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        const serviceAccount = JSON.parse(Buffer.from(base64Key, 'base64').toString('utf8'));


        // deprecated : access firebase_key using file system. now using json encoding on .env
        // const serviceAccount = JSON.parse(readFileSync(serviceAccountPath,'utf-8'));
        // Initialize Firebase Admin SDK
        admin.initializeApp({
            credential : admin.credential.cert(serviceAccount),
            // storageBucket :`${firebaseConfig.projectId}.app.spot.com`
            storageBucket :process.env.FIREBASE_STORAGE_BUCKET
            // storageBucket :`fir-uploadspmvault.appspot.com`
        });
        
        
        console.log(`CONNECTION TO FIREBASE DOMAIN OK`)

    }catch(error){
        console.log(` ${process.env.FIREBASE_PROJECT_DOMAIN}  : firebase connection fails. ERROR,`,error)

    }
}

export default connectionFirebase;
