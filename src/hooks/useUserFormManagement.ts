import { useEffect, useState } from 'react'
import { convertUserToFormFields } from '@/utils'
import { User, UserFormFields } from '@/types'
import { defaultUserModalData } from '@/configs'

interface Props {
  isModalOpen: boolean
  initialUserData: User | undefined
}

/**
 * handleChange를 통한 Form 데이터 변경
 * Form 데이터 제출 버튼 활성화 상태 관리
 * 해당 hooks는 무엇보다 Form 데이터를 변경할 수 있는 기능이 있기에 Management로 명칭.
 */
export function useUserFormManagement({ isModalOpen, initialUserData }: Props) {
  const [formData, setFormData] = useState<UserFormFields>(defaultUserModalData)
  const [activateSubmit, setActivateSubmit] = useState(true)

  /**
   * @param field 전처리 유저 상태 key값
   * @param value UserFormFields[Key]
   */
  const handleChange = <K extends keyof UserFormFields>(field: K, value: UserFormFields[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  /**
   * 추가 버튼 Validation check
   * @returns boolean
   */
  const validateSubmit = () => {
    return (
      Object.values(formData).every((data) => {
        return data.error === false
      }) &&
      formData.name.value.length > 0 &&
      formData.createdAt.value.length > 0
    )
  }

  useEffect(() => {
    if (!isModalOpen) setFormData(defaultUserModalData)
  }, [isModalOpen])

  useEffect(() => {
    if (validateSubmit()) {
      setActivateSubmit(false)
    } else {
      setActivateSubmit(true)
    }
  }, [formData])

  useEffect(() => {
    if (initialUserData) {
      setFormData(convertUserToFormFields(initialUserData))
    }
  }, [initialUserData])

  return {
    formData,
    activateSubmit,
    handleChange
  }
}
