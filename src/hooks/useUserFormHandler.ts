import { useState } from 'react'
import { v4 } from 'uuid'
import { formatDate } from '@/utils'
import { User, UserFormFields } from '@/types'

/**
 * User form modal visibility 속성 관리 및 제출 함수를 가지고 있지만,
 * 직접적인 User form 데이터에 대한 작업이 아니기에 visibility와 제출 기능을 고려해 handler로 명칭
 */
export function useUserFormHandler() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialUserData, setInitialUserData] = useState<User>()

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setInitialUserData(undefined)
  }

  const handleUpdateModalOpen = (data: User) => {
    setInitialUserData(data)
    handleModalOpen()
  }

  /**
   *
   * @param id 생성할 유저 혹은 업데이트할 유저의 id 값 없으면 uuid로 생성
   * @param formdata 생성 혹은 수정된 UserFormFields 타입 데이터
   * @param submitCallback 가공한 데이터를 처리할 콜백함수 handleAdd, handleUpdate를 콜백 함수로 받는다.
   */
  const handleSubmit = (id: string | null, formdata: UserFormFields, submitCallback: (data: User) => void) => {
    const result: User = {
      id: id || v4(),
      name: formdata.name.value,
      address: formdata.address.value,
      memo: formdata.memo.value,
      createdAt: formdata.createdAt.value,
      updatedAt: formatDate(new Date()),
      job: formdata.job.value,
      emailConsent: formdata.emailConsent.value
    }

    submitCallback(result)
  }

  return {
    isModalOpen,
    initialUserData,
    handleSubmit,
    handleModalOpen,
    handleModalClose,
    handleUpdateModalOpen
  }
}
