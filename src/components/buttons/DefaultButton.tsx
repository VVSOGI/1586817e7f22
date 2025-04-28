import { styled } from 'styled-components'
import { Button, ButtonProps } from 'antd'
import { COLORS } from '@/styles'

const ButtonContainer = styled(Button)<ButtonProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-right: 14px;
  padding: 0 12px;
  background-color: ${COLORS.BLUE_400};

  &:hover {
    background-color: ${COLORS.BLUE_300} !important;
  }

  &:active {
    background-color: ${COLORS.BLUE_500} !important;
  }
`

interface Props extends ButtonProps {}

export function DefaultButton({ children, ...props }: Props) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
