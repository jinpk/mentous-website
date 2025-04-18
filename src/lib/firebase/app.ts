import admin from 'firebase-admin'
import { getApp, getApps } from 'firebase-admin/app'

const cert = JSON.parse(process.env.FIREBASE_CERT as string)

export const app = !getApps().length
    ? admin.initializeApp({
          credential: admin.credential.cert(cert),
      })
    : getApp()
