import * as React from 'react'
import { Menubar } from '@base-ui-components/react/menubar'
import { Menu } from '@base-ui-components/react/menu'

export default function AppMenubar({ handleClick }) {
  return (
    <Menubar className="flex bg-neutral-900 p-0.5">
      <Menu.Root>
        <Menu.Trigger className="h-8 rounded px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none cursor-pointer">
          File
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup className="border border-neutral-100 rounded-md text-neutral-100 bg-neutral-900 shadow-lg">
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="file-new"
              >
                New
              </Menu.Item>
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="file-open"
              >
                Open
              </Menu.Item>
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="file-save"
              >
                Save
              </Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger className="flex rounded cursor-pointer w-full items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:text-neutral-900 hover:bg-neutral-100">
                  Export
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner sideOffset={6}>
                    <Menu.Popup className="border border-neutral-100 rounded-md bg-neutral-900 text-neutral-100 shadow-lg">
                      <Menu.Item
                        onClick={handleClick}
                        className="flex rounded cursor-pointer hover:bg-neutral-100 hover:text-neutral-900 items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none"
                        data-action="file-export-pdf"
                      >
                        PDF
                      </Menu.Item>
                      <Menu.Item
                        onClick={handleClick}
                        className="flex rounded cursor-pointer hover:bg-neutral-100 hover:text-neutral-900 items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none"
                        data-action="file-export-png"
                      >
                        PNG
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator className="mx-4 my-1.5 h-px bg-neutral-100" />

              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="file-print"
              >
                Print
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className="h-8 rounded cursor-pointer px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none">
          Edit
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup className="border border-neutral-100 rounded-md text-neutral-100 bg-neutral-900 shadow-lg">
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="edit-undo"
              >
                Undo
              </Menu.Item>
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="edit-redo"
              >
                Redo
              </Menu.Item>

              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="edit-cut"
              >
                Cut
              </Menu.Item>

              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="edit-copy"
              >
                Copy
              </Menu.Item>

              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="edit-paste"
              >
                Paste
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className="h-8 rounded cursor-pointer px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none">
          View
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup className="border border-neutral-100 rounded-md text-neutral-100 bg-neutral-900 shadow-lg">
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="view-zoom_in"
              >
                Zoom In
              </Menu.Item>
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="view-zoom_out"
              >
                Zoom Out
              </Menu.Item>

              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="view-fullscreen"
              >
                Fullscreen
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className="h-8 rounded cursor-pointer px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none">
          Help
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6}>
            <Menu.Popup className="border border-neutral-100 rounded-md text-neutral-100 bg-neutral-900 shadow-lg">
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="help-doc"
              >
                Documentation
              </Menu.Item>
              <Menu.Item
                onClick={handleClick}
                className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900"
                data-action="help-about"
              >
                About
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
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
