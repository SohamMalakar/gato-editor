import { Menu } from '@base-ui-components/react/menu'
import { Menubar } from '@base-ui-components/react/menubar'

const triggerClass =
  'h-8 rounded px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 data-[popup-open]:bg-neutral-100 data-[popup-open]:text-neutral-900 select-none cursor-pointer transition-all duration-200 ease-in-out'

const itemClass =
  'flex cursor-pointer rounded items-center justify-between gap-4 px-4 py-2 m-0.5 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 data-[popup-open]:bg-neutral-100 data-[popup-open]:text-neutral-900 transition-all duration-200 ease-in-out'

const popupClass =
  'border border-neutral-700 rounded-md text-neutral-100 bg-neutral-900 shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0'

function MenuItem({ action, children, handleClick }) {
  return (
    <Menu.Item
      onClick={handleClick}
      data-action={action}
      className={itemClass}
    >
      {children}
    </Menu.Item>
  )
}

function RenderMenuItems({ items, handleClick }) {
  return items.map((item, i) => {
    if (item === 'separator') {
      return (
        <Menu.Separator
          key={i}
          className="mx-4 my-1.5 h-px bg-neutral-700"
        />
      )
    }

    if (item.submenu) {
      return (
        <Menu.SubmenuRoot key={item.label}>
          <Menu.SubmenuTrigger className={itemClass}>
            {item.label}
            <ChevronRightIcon />
          </Menu.SubmenuTrigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={-2}>
              <Menu.Popup className={popupClass}>
                <RenderMenuItems
                  items={item.submenu}
                  handleClick={handleClick}
                />
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.SubmenuRoot>
      )
    }

    return (
      <MenuItem
        key={item.action}
        action={item.action}
        handleClick={handleClick}
      >
        {item.label}
      </MenuItem>
    )
  })
}

const menus = [
  {
    label: 'File',
    items: [
      { action: 'file-new', label: 'New' },
      { action: 'file-open', label: 'Open' },
      {
        label: 'Export',
        submenu: [
          { action: 'file-export-pdf', label: 'PDF' },
          {
            label: 'Images',
            submenu: [
              { action: 'file-export-png', label: 'PNG' },
              { action: 'file-export-jpg', label: 'JPG' },
              {
                label: 'Vector',
                submenu: [
                  { action: 'file-export-svg', label: 'SVG' },
                  { action: 'file-export-eps', label: 'EPS' },
                ],
              },
            ],
          },
        ],
      },
      'separator',
      { action: 'file-print', label: 'Print' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { action: 'edit-undo', label: 'Undo' },
      { action: 'edit-redo', label: 'Redo' },
      { action: 'edit-cut', label: 'Cut' },
      { action: 'edit-copy', label: 'Copy' },
      { action: 'edit-paste', label: 'Paste' },
    ],
  },
]

export default function AppMenubar({ handleClick }) {
  return (
    <Menubar className="flex bg-neutral-900 p-0.5">
      {menus.map((menu) => (
        <Menu.Root key={menu.label}>
          <Menu.Trigger className={triggerClass}>
            {menu.label}
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={6}>
              <Menu.Popup className={popupClass}>
                <RenderMenuItems
                  items={menu.items}
                  handleClick={handleClick}
                />
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      ))}
    </Menubar>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
