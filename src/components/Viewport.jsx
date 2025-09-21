import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { ContextMenu } from '@base-ui-components/react/context-menu'
import { Canvas, Rect } from 'fabric'

const itemClass =
  'flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 m-0.5 text-sm leading-4 outline-none select-none hover:bg-neutral-100 hover:text-neutral-900 data-[popup-open]:bg-neutral-100 data-[popup-open]:text-neutral-900 transition-all duration-200 ease-in-out'

const popupClass =
  'border border-neutral-700 rounded-md text-neutral-100 bg-neutral-900 outline-none shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0'

function ContextMenuItem({ action, children, handleClick }) {
  return (
    <ContextMenu.Item
      className={itemClass}
      data-action={action}
      onClick={handleClick}
    >
      {children}
    </ContextMenu.Item>
  )
}

function RenderContextMenuItems({ items, handleClick }) {
  return items.map((item, i) => {
    if (item === 'separator') {
      return (
        <ContextMenu.Separator
          key={i}
          className="mx-4 my-1.5 h-px bg-neutral-700"
        />
      )
    }

    if (item.submenu) {
      return (
        <ContextMenu.SubmenuRoot key={item.label}>
          <ContextMenu.SubmenuTrigger className={itemClass}>
            {item.label}
            <ChevronRightIcon />
          </ContextMenu.SubmenuTrigger>
          <ContextMenu.Portal>
            <ContextMenu.Positioner sideOffset={-2}>
              <ContextMenu.Popup className={popupClass}>
                <RenderContextMenuItems
                  items={item.submenu}
                  handleClick={handleClick}
                />
              </ContextMenu.Popup>
            </ContextMenu.Positioner>
          </ContextMenu.Portal>
        </ContextMenu.SubmenuRoot>
      )
    }

    return (
      <ContextMenuItem
        key={item.action}
        action={item.action}
        handleClick={handleClick}
      >
        {item.label}
      </ContextMenuItem>
    )
  })
}

const contextMenuItems = [
  { action: 'add-to-library', label: 'Add to Library' },
  { action: 'add-to-playlist', label: 'Add to Playlist' },
  'separator',
  {
    label: 'Play Options',
    submenu: [
      { action: 'play-next', label: 'Play Next' },
      { action: 'play-last', label: 'Play Last' },
      {
        label: 'Advanced',
        submenu: [
          { action: 'shuffle', label: 'Shuffle' },
          { action: 'repeat', label: 'Repeat' },
        ],
      },
    ],
  },
  'separator',
  { action: 'favorite', label: 'Favorite' },
  { action: 'share', label: 'Share' },
]

const Viewport = forwardRef((props, ref) => {
  const { handleClick } = props

  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState(null)

  const addRectangle = () => {
    if (!canvas) return
    const rectWidth = 100
    const rectHeight = 50

    const rect = new Rect({
      left: (canvas.getWidth() - rectWidth) / 2,
      top: (canvas.getHeight() - rectHeight) / 2,
      width: rectWidth,
      height: rectHeight,
      fill: '#fff',
    })

    canvas.add(rect)
  }

  useImperativeHandle(ref, () => ({
    addRectangle,
  }))

  useEffect(() => {
    if (!canvasRef.current) return

    const initCanvas = new Canvas(canvasRef.current, {
      width: 1280,
      height: 720,
    })

    initCanvas.backgroundColor = '#000'
    initCanvas.renderAll()

    setCanvas(initCanvas)

    return () => {
      initCanvas.dispose()
    }
  }, [])

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="absolute inset-0 flex justify-center-safe items-center-safe">
          <canvas id="canvas" ref={canvasRef} />
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup className={popupClass}>
            <RenderContextMenuItems
              items={contextMenuItems}
              handleClick={handleClick}
            />
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
})

export default Viewport

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
