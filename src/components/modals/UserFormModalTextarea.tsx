import { Input } from 'antd'
import { ErrorMessages } from '@/components'
import { UserFormFields } from '@/types'

interface Props {
  formData: {
    field: keyof UserFormFields
    value: string
    error: boolean
  }
  handleChange: <K extends keyof UserFormFields>(field: K, value: UserFormFields[K]) => void
}

export function UserFormModalTextarea({ formData, handleChange }: Props) {
  return (
    <>
      <Input.TextArea
        value={formData.value}
        status={formData.value.length >= 50 ? 'error' : ''}
        onChange={(event) => {
          if (event.target.value.length > 50) {
            handleChange(formData.field, {
              ...formData,
              field: formData.field,
              value: formData.value,
              error: true
            })
            return
          }

          handleChange(formData.field, {
            ...formData,
            field: formData.field,
            value: event.target.value,
            error: false
          })
        }}
        style={{ height: '64px' }}
        placeholder={formData.field}
        rows={4}
      />
      {formData.error && <ErrorMessages.textareaError />}
    </>
  )
}
