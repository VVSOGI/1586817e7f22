import { v4 } from 'uuid'
import { useRef, useState } from 'react'
import { createLocalStorage, formatDate, getStorageType } from '@/utils'
import { PreprocessedUser, StorageInterface, User } from '@/types'
import { mockUsers } from '@/configs'

/**
 * getStorageType 함수 리턴값에 따른 local-storage 이용 여부 결정
 * in-memory 이용시 편의성 mockUsers 반환.
 * Storage에 CRUD 기능이 있기에 좀 더 명확하게 Management라는 네이밍 추가
 */
export function useStorageManagement() {
  const storageRef = useRef<StorageInterface | null>(getStorageType() === 'local-storage' ? createLocalStorage() : null)
  const [users, setUsers] = useState<User[]>(() => {
    return storageRef.current ? storageRef.current.getAll() : [...mockUsers]
  })

  const handleAdd = (userData: PreprocessedUser) => {
    const newUser: User = {
      id: v4(),
      updatedAt: formatDate(new Date()),
      ...userData
    }

    setUsers((prev) => [...prev, newUser])

    if (storageRef.current) {
      storageRef.current.add(newUser)
    }

    return newUser
  }

  const handleUpdate = (updated: User) => {
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

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))

    if (storageRef.current) {
      storageRef.current.delete(id)
    }
  }

  return {
    users,
    handleAdd,
    handleUpdate,
    handleDelete
  }
}
