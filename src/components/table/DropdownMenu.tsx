import { styled } from 'styled-components'
import { Checkbox, Menu } from 'antd'
import { FilterDropdownProps } from 'antd/es/table/interface'

const MenuContainer = styled.div`
  padding: 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
  const { filters, selectedKeys, setSelectedKeys, confirm } = props

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
    </MenuContainer>
  )
}
