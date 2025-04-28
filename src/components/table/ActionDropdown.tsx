import { Dropdown } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { COLORS } from '@/styles'

const OutlineContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function ActionDropdown() {
  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items: [{ key: '1', label: '수정' }, { type: 'divider' }, { key: '2', label: '삭제', style: { color: COLORS.ERROR } }],
        style: {
          width: '181px',
          transform: 'translateX(-6px)'
        }
      }}
    >
      <OutlineContainer>
        <MoreOutlined />
      </OutlineContainer>
    </Dropdown>
  )
}
