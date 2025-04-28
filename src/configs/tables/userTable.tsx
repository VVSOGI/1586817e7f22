import styled from 'styled-components'
import { Checkbox, TableColumnsType } from 'antd'
import { ActionDropdown, DropdownMenu } from '@/components'
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

export const getUserColumns = (users: User[]): TableColumnsType<User> => [
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
    filters: Array.from(new Set(users.map((item) => item.emailConsent))).map((emailConsent) => ({
      text: emailConsent,
      value: emailConsent
    })),
    filterDropdown: (props) => <DropdownMenu {...props} />,
    render: (emailConsent) => <TableChecked checked={emailConsent} disabled={true} />
  },
  {
    width: 48,
    render: () => <ActionDropdown />
  }
]
