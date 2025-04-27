import { StorageInterface, StroageType, User } from '@/types'
import { v4 } from 'uuid'

export function getStorageType(): StroageType {
  if (import.meta.env.VITE_STORAGE_TYPE === 'local-storage') {
    return 'local-storage'
  }

  return 'in-memory'
}

export function createLocalStorage(): StorageInterface {
  const getAll: () => User[] = () => {
    const items = localStorage.getItem('users')
    return items ? JSON.parse(items) : []
  }

  return {
    getAll,

    add: (data) => {
      const users = getAll()
      const newUser = { id: v4(), ...data }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      return newUser
    },

    update: (updated) => {
      const users = getAll()
      const index = users.findIndex((user) => user.id === updated.id)
      if (index !== -1) {
        users[index] = { ...users[index], ...updated }
        localStorage.setItem('users', JSON.stringify(users))
        return users[index]
      }
      return null
    },

    delete: (id) => {
      const users = getAll()
      const filtered = users.filter((user) => user.id !== id)
      localStorage.setItem('users', JSON.stringify(filtered))
    }
  }
}
