import { User } from '.'

export type StroageType = 'local-storage' | 'in-memory'

export interface StorageInterface {
  getAll: () => User[]
  add: (item: Omit<User, 'id'>) => User
  update: (item: User) => User | null
  delete: (id: string) => void
}
