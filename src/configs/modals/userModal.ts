import { UserFormFields } from '@/types'

export const defaultUserModalData: UserFormFields = {
  name: {
    field: 'name',
    value: '',
    error: false
  },
  address: {
    field: 'address',
    value: '',
    error: false
  },
  memo: {
    field: 'memo',
    value: '',
    error: false
  },
  createdAt: {
    field: 'createdAt',
    value: '',
    error: false
  },
  job: {
    field: 'job',
    value: '개발자',
    error: false
  },
  emailConsent: {
    field: 'emailConsent',
    value: false,
    error: false
  }
}
