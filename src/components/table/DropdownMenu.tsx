import { styled } from 'styled-components'
import { Checkbox, Menu } from 'antd'
import { FilterDropdownProps } from 'antd/es/table/interface'
import { DefaultButton } from '../buttons'
import { COLORS } from '@/styles'

const MenuContainer = styled.div`
  padding: 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px !important;
    padding-bottom: 4px !important;
    border-bottom: 1px solid ${COLORS.GRAY_300} !important;
  }
`

const MenuItem = styled(Menu.Item)`
  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export function DropdownMenu(props: FilterDropdownProps) {
  const { filters, selectedKeys, setSelectedKeys, confirm, clearFilters } = props

  return (
    <MenuContainer>
      <Menu>
        {filters?.map((name) => (
          <MenuItem
            onClick={() => {
              setSelectedKeys([name['text'] as React.Key])
              confirm()
            }}
          >
            <Checkbox checked={selectedKeys[0] === name.value} />
            <div>{name['text']}</div>
          </MenuItem>
        ))}
      </Menu>
      <DefaultButton
        onClick={() => {
          if (clearFilters) {
            clearFilters()
          }
          confirm()
        }}
        style={{ width: '100%', height: '24px' }}
        type="primary"
      >
        리셋
      </DefaultButton>
    </MenuContainer>
  )
}
