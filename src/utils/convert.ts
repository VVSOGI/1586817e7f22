import { User, UserFormFields } from '@/types'

export function convertUserToFormFields(data: User): UserFormFields {
  return {
    name: {
      field: 'name',
      value: data.name,
      error: false
    },
    address: {
      field: 'address',
      value: data.address,
      error: false
    },
    memo: {
      field: 'memo',
      value: data.memo,
      error: false
    },
    createdAt: {
      field: 'createdAt',
      value: data.createdAt,
      error: false
    },
    job: {
      field: 'job',
      value: data.job,
      error: false
    },
    emailConsent: {
      field: 'emailConsent',
      value: data.emailConsent,
      error: false
    }
  }
}
