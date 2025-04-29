import { Input } from 'antd'
import { Error } from '@/components'
import { PreprocessedUser, UserFormFields } from '@/types'

interface Props {
  formData: {
    field: keyof PreprocessedUser
    value: string
    error: boolean
  }
  handleChange: <K extends keyof UserFormFields>(field: K, value: UserFormFields[K]) => void
}

export function UserFormModalInput({ formData, handleChange }: Props) {
  return (
    <>
      <Input
        value={formData.value}
        status={formData.value.length >= 20 ? 'error' : ''}
        onChange={(event) => {
          if (event.target.value.length > 20) {
            handleChange(formData.field, {
              ...formData,
              value: formData.value,
              error: true
            })
            return
          }

          handleChange(formData.field, {
            ...formData,
            value: event.target.value,
            error: false
          })
        }}
        placeholder="Name"
      />
      {formData.error && <Error.textError />}
    </>
  )
}
