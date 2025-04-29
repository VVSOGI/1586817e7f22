import { css } from 'styled-components'
import { RuleSet } from 'styled-components/dist/types'

export const typography: Record<'h1' | 'h2' | 'h3', RuleSet> = {
  h1: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  `,

  h2: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  `,

  h3: css`
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  `
}
