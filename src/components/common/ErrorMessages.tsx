import React from 'react'
import { Typography } from '.'
import { COLORS } from '@/styles'

export const ErrorMessages = {
  textError: React.memo((props) => (
    <Typography.h3 style={{ color: COLORS.ERROR }} {...props}>
      글자수 20을 초과할 수 없습니다.
    </Typography.h3>
  )),
  textareaError: React.memo((props) => (
    <Typography.h3 style={{ color: COLORS.ERROR }} {...props}>
      글자수 50을 초과할 수 없습니다.
    </Typography.h3>
  ))
}
