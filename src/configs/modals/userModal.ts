import { UserFormFields } from '@/types'

export const defaultUserModalData: UserFormFields = {
  name: {
    type: 'text',
    field: 'name',
    value: '',
    error: false,
    required: true
  },
  address: {
    type: 'text',
    field: 'address',
    value: '',
    error: false,
    required: false
  },
  memo: {
    type: 'textarea',
    field: 'memo',
    value: '',
    error: false,
    required: false
  },
  createdAt: {
    type: 'date',
    field: 'createdAt',
    value: '',
    error: false,
    required: true
  },
  job: {
    type: 'select',
    field: 'job',
    value: '개발자',
    error: false,
    required: false
  },
  emailConsent: {
    type: 'checkbox',
    field: 'emailConsent',
    value: false,
    error: false,
    required: false
  }
}
