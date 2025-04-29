import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Checkbox, DatePicker, Modal, Select } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { COLORS } from '@/styles'
import { DefaultButton, ModalFormItem, UserModalInput, UserModalTextarea, Typography } from '@/components'
import { PreprocessedUser, UserFormFields } from '@/types'
import { defaultUserModalData } from '@/configs'

const ModalContainer = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }

  top: 30px;

  @media (min-height: 768px) {
    top: 87px;
  }
`

const ModalHeader = styled.div`
  height: 46px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY_300};
  padding: 12px 16px;
`

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 24px 20px 24px;
  border-bottom: 1px solid ${COLORS.GRAY_300};
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px 16px;
`

interface Props {
  isModalOpen: boolean
  handleModalClose: () => void
  handleSubmit: (formdata: UserFormFields) => void
}

export function UserModal({ isModalOpen, handleModalClose, handleSubmit }: Props) {
  const [formData, setFormData] = useState<UserFormFields>(defaultUserModalData)
  const [activateSubmit, setActivateSubmit] = useState(true)

  const jobOptions = [
    { value: '개발자', label: '개발자' },
    { value: 'PO', label: 'PO' },
    { value: '디자이너', label: '디자이너' }
  ]

  const handleChange = <K extends keyof PreprocessedUser>(field: K, value: UserFormFields[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateSubmit = () => {
    return Object.values(formData).every((data) => {
      if (data.required) {
        return data.error === false && (data.value as string).length > 0
      }

      return data.error === false
    })
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

  return (
    <ModalContainer open={isModalOpen} footer={false} closeIcon={false}>
      <ModalHeader>
        <div>회원 추가</div>
        <CloseOutlined style={{ fontSize: '16px', color: COLORS.GRAY_600 }} onClick={handleModalClose} />
      </ModalHeader>

      <ModalContents>
        <ModalFormItem label="이름" required={true}>
          <UserModalInput formData={formData.name} handleChange={handleChange} />
        </ModalFormItem>
        <ModalFormItem label="주소" required={false}>
          <UserModalInput formData={formData.address} handleChange={handleChange} />
        </ModalFormItem>
        <ModalFormItem label="메모" required={false}>
          <UserModalTextarea formData={formData.memo} handleChange={handleChange} />
        </ModalFormItem>
        <ModalFormItem label="가입일" required={true}>
          <DatePicker onChange={(date) => handleChange('createdAt', { ...formData.createdAt, value: date.format('YYYY-MM-DD') })} />
        </ModalFormItem>
        <ModalFormItem label="직업" required={false}>
          <Select defaultValue="개발자" onChange={(value) => handleChange('job', { ...formData.job, value })} options={jobOptions} />
        </ModalFormItem>
        <ModalFormItem label="이메일 수신 동의" required={false}>
          <Checkbox onChange={(event) => handleChange('emailConsent', { ...formData.emailConsent, value: event.target.checked })} />
        </ModalFormItem>
      </ModalContents>

      <ModalFooter>
        <div style={{ display: 'flex', gap: '8px' }}>
          <DefaultButton
            onClick={() => {
              handleModalClose()
            }}
            style={{ padding: '0 16px' }}
            type="default"
          >
            <Typography.h2 style={{ width: '23px' }}>취소</Typography.h2>
          </DefaultButton>
          <DefaultButton
            onClick={() => {
              handleModalClose()
              handleSubmit(formData)
            }}
            style={{ padding: '0 16px' }}
            type="primary"
            disabled={activateSubmit}
          >
            <Typography.h2 style={{ width: '23px' }}>추가</Typography.h2>
          </DefaultButton>
        </div>
      </ModalFooter>
    </ModalContainer>
  )
}
