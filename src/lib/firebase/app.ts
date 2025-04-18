import admin from 'firebase-admin'

const cert = JSON.parse(process.env.FIREBASE_CERT as string)

export const app = !admin.apps.length
    ? admin.initializeApp({
          credential: admin.credential.cert(cert),
      })
    : admin.app()
