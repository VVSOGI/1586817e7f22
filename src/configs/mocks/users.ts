import { User } from '@/types'
import { v4 } from 'uuid'

export const mockUsers: User[] = [
  {
    id: v4(),
    name: 'John doe',
    address: 'Seoul',
    memo: '외국인',
    createdAt: '2024-12-12',
    updatedAt: '2024-12-12',
    job: '개발자',
    emailConsent: true
  }
]
