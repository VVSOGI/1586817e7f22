import { styled } from 'styled-components'
import { Typography } from '@/components'
import { COLORS } from '@/styles'

const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FormItemTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
`

interface Props {
  label: string
  required: boolean
  children: React.ReactNode
}

export function ModalFormItem({ label, required, children }: Props) {
  return (
    <FormItemContainer>
      <FormItemTitle style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography.h1 style={{ color: COLORS.GRAY_600 }}>{label}</Typography.h1>
        {required && <Typography.h1 style={{ color: COLORS.ERROR, fontWeight: 400 }}>*</Typography.h1>}
      </FormItemTitle>
      {children}
    </FormItemContainer>
  )
}
