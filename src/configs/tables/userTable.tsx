import styled from 'styled-components'
import { Checkbox, Dropdown, TableColumnsType } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { DropdownMenu } from '@/components'
import { User } from '@/types'
import { COLORS } from '@/styles'

const TableChecked = styled(Checkbox)`
  .ant-checkbox > span {
    background: ${COLORS.WHITE};
  }

  .ant-checkbox-checked > span {
    background: ${COLORS.BLUE_400};
    border-color: ${COLORS.BLUE_400};
  }

  .ant-checkbox-inner::after {
    border-color: ${COLORS.WHITE};
  }
`

const OutlineContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  users: User[]
  handleDelete: (id: string) => void
  handleUpdateModalOpen: (data: User) => void
}

/**
 * Table Columns 모음집
 * @param users 테이블에 추가할 User[] 데이터
 * @param handleDelete Dropdown의 삭제 기능에 사용될 delete 함수
 * @param handleUpdateModalOpen Dropdown의 수정 기능에 사용될 Form 데이터 모달 관련 함수
 */
export const getUserColumns = ({ users, handleDelete, handleUpdateModalOpen }: Props): TableColumnsType<User> => [
  {
    title: '이름',
    dataIndex: 'name',
    width: 120,
    filters: Array.from(new Set(users.map((item) => item.name))).map((name) => ({ text: name, value: name })),
    onFilter: (value, record) => record.name.includes(value as string),
    filterDropdown: (props) => <DropdownMenu {...props} />
  },
  {
    title: '주소',
    dataIndex: 'address',
    width: 249,
    filters: Array.from(new Set(users.map((item) => item.address))).map((address) => ({ text: address, value: address })),
    onFilter: (value, record) => record.address.includes(value as string),
    filterDropdown: (props) => <DropdownMenu {...props} />
  },
  {
    title: '메모',
    dataIndex: 'memo',
    width: 249,
    filters: Array.from(new Set(users.map((item) => item.memo))).map((memo) => ({ text: memo, value: memo })),
    onFilter: (value, record) => record.memo.includes(value as string),
    filterDropdown: (props) => <DropdownMenu {...props} />
  },
  {
    title: '가입일',
    dataIndex: 'createdAt',
    width: 200,
    filters: Array.from(new Set(users.map((item) => item.createdAt))).map((createdAt) => ({ text: createdAt, value: createdAt })),
    onFilter: (value, record) => record.createdAt.includes(value as string),
    filterDropdown: (props) => <DropdownMenu {...props} />
  },
  {
    title: '직업',
    dataIndex: 'job',
    width: 249,
    filters: Array.from(new Set(users.map((item) => item.job))).map((job) => ({ text: job, value: job })),
    onFilter: (value, record) => record.job.includes(value as string),
    filterDropdown: (props) => <DropdownMenu {...props} />
  },
  {
    title: '이메일 수신 동의',
    dataIndex: 'emailConsent',
    width: 150,
    minWidth: 150,
    filters: [
      { text: '선택됨', value: '선택됨' },
      { text: '선택 안함', value: '선택 안함' }
    ],
    filterDropdown: (props) => <DropdownMenu {...props} />,
    onFilter: (value, record) => {
      const compare = value === '선택됨' ? true : false
      return record.emailConsent === compare
    },
    render: (emailConsent) => <TableChecked checked={emailConsent} disabled={true} />
  },
  {
    width: 48,
    render: (_, record) => (
      <Dropdown
        trigger={['click']}
        menu={{
          items: [
            { key: '1', label: '수정', onClick: () => handleUpdateModalOpen(record) },
            { type: 'divider' },
            { key: '2', label: '삭제', style: { color: COLORS.ERROR }, onClick: () => handleDelete(record.id) }
          ],
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
]
