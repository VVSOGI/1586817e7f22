### BC 과제 - 김우석

### 개발 환경

- React, TypeScript
- custom hooks
- Styled-components
- pnpm
- vite
- antd, dayjs

### 폴더 구조

```
└── 📁src
    └── 📁components
        └── index.ts
        └── 📁buttons
            └── DefaultButton.tsx
            └── index.ts
        └── 📁common
            └── ErrorMessages.tsx
            └── Header.tsx
            └── index.ts
            └── Title.tsx
        └── 📁modals
            └── index.ts
            └── ModalFormItem.tsx
            └── UserFormModal.tsx
            └── UserFormModalInput.tsx
            └── UserFormModalTextarea.tsx
        └── 📁table
            └── DropdownMenu.tsx
            └── index.ts
            └── TableContainer.tsx
    └── 📁configs
        └── index.ts
        └── 📁mocks
            └── index.ts
            └── users.ts
        └── 📁modals
            └── index.ts
            └── userModal.ts
        └── 📁tables
            └── index.ts
            └── userTable.tsx
    └── 📁hooks
        └── index.ts
        └── useStorageManagement.ts
        └── useUserFormHandler.ts
        └── useUserFormManagement.ts
    └── 📁styles
        └── colors.ts
        └── index.ts
        └── typography.ts
    └── 📁types
        └── index.ts
        └── storage.ts
        └── user.ts
    └── 📁utils
        └── convert.ts
        └── formatDate.ts
        └── index.ts
        └── storage.ts
    └── App.tsx
    └── index.css
    └── main.tsx
    └── vite-env.d.ts
```

### 과제 요구사항

1. React, Typescript, AntD는 필수로 사용해야 합니다. ✅
2. 레코드 목록을 테이블 형태로 볼 수 있어야 합니다. ✅
3. 레코드를 조회, 추가, 수정, 삭제 할 수 있어야 합니다. ✅
4. 개발 서버를 켤 때, env로 STORAGE를 in-memory 또는 local-storage로 설정 가능해야 합니다. ✅
