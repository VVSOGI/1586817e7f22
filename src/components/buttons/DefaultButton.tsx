import { styled } from 'styled-components'
import { Button, ButtonProps } from 'antd'
import { COLORS } from '@/styles'

const ButtonContainer = styled(Button)<ButtonProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
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
  if (props.type === 'default' || props.disabled === true) {
    return <Button {...props}>{children}</Button>
  }

  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
