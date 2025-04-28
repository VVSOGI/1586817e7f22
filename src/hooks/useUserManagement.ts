import { v4 } from 'uuid'
import { useRef, useState } from 'react'
import { createLocalStorage, getStorageType } from '@/utils'
import { StorageInterface, User } from '@/types'
import { mockUsers } from '@/configs'

export function useUserManagement() {
  const storageRef = useRef<StorageInterface | null>(getStorageType() === 'local-storage' ? createLocalStorage() : null)
  const [users, setUsers] = useState<User[]>(() => {
    return storageRef.current ? storageRef.current.getAll() : [...mockUsers]
  })

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      id: v4(),
      ...userData
    }

    setUsers((prev) => [...prev, newUser])

    if (storageRef.current) {
      storageRef.current.add(newUser)
    }

    return newUser
  }

  const updateUser = (updated: User) => {
    setUsers((prev) => {
      return prev.map((user) => {
        if (user.id === updated.id) {
          if (storageRef.current) {
            storageRef.current.update({
              ...user,
              ...updated
            })
          }

          return updated
        }
        return user
      })
    })
  }

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))

    if (storageRef.current) {
      storageRef.current.delete(id)
    }
  }

  return {
    users,
    addUser,
    updateUser,
    deleteUser
  }
}
