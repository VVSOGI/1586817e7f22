import { COLORS } from '@/styles'
import { Typography } from '@/components'

interface Props {
  label: string
  required: boolean
  children: React.ReactNode
}

export function ModalFormItem({ label, required, children }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography.h1 style={{ color: COLORS.GRAY_600 }}>{label}</Typography.h1>
        {required && <Typography.h1 style={{ color: COLORS.ERROR, fontWeight: 400 }}>*</Typography.h1>}
      </div>
      {children}
    </div>
  )
}
