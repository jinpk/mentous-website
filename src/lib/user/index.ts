import { db } from '@/lib/firebase'

export interface CreateUserRequest {
    phoneNumber: string
    displayName: string
}

export interface User {
    id: string
    phoneNumber: string
    displayName: string
    createdAt: Date
}

export const createUser = async (request: CreateUserRequest) => {
    const ref = db.collection('users')

    const user = {
        ...request,
        createdAt: new Date(new Date().toUTCString()),
    } as User

    const result = await ref.add(user)

    return {
        ...user,
        id: result.id,
    }
}

export interface GetUserRequest {
    phoneNumber: string
}

export const getUser = async (request: GetUserRequest) => {
    const ref = db.collection('users')

    const snapshot = await ref
        .where('phoneNumber', '==', request.phoneNumber)
        .limit(1)
        .get()

    if (snapshot.empty) {
        return null
    }

    const doc = snapshot.docs[0]

    const user = doc.data() as User

    return { ...user, id: doc.id }
}
