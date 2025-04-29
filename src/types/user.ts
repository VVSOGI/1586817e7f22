export interface User {
  id: string
  name: string
  address: string
  memo: string
  createdAt: string
  updatedAt: string
  job: string
  emailConsent: boolean
}

export type PreprocessedUser = Omit<User, 'id' | 'updatedAt'>

export type UserFormFields = {
  [K in keyof PreprocessedUser]: {
    field: keyof PreprocessedUser
    value: PreprocessedUser[K]
    error: boolean
  }
}
