import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { ContextMenu } from '@base-ui-components/react/context-menu';

import { Canvas, Rect } from 'fabric'

const Viewport = forwardRef((props, ref) => {

  const { handleClick } = props

  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState(null)

  const addRectangle = () => {
    if (canvas) {
      const rectWidth = 100
      const rectHeight = 50

      const rect = new Rect({
        left: (canvas.getWidth() - rectWidth) / 2,
        top: (canvas.getHeight() - rectHeight) / 2,
        width: rectWidth,
        height: rectHeight,
        fill: "#fff",
      })

      canvas.add(rect)
    }
  }
  useImperativeHandle(ref, () => ({
    addRectangle
  }))

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 1280,
        height: 720,
      })

      initCanvas.backgroundColor = "#000"
      initCanvas.renderAll()

      setCanvas(initCanvas)

      return () => {
        initCanvas.dispose()
      }
    }
  }, []);


  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="absolute inset-0 flex justify-center-safe items-center-safe">
          <canvas id="canvas" ref={canvasRef} />
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup className="outline outline-neutral-700 rounded-md text-neutral-100 bg-neutral-900 shadow-lg">
            <ContextMenu.Item
              className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out"
              onClick={handleClick}
              data-action="add-to-library"
            >
              Add to Library
            </ContextMenu.Item>
            <ContextMenu.Item className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out">
              Add to Playlist
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-neutral-700" />
            <ContextMenu.Item className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out">
              Play Next
            </ContextMenu.Item>
            <ContextMenu.Item className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out">
              Play Last
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-neutral-700" />
            <ContextMenu.Item className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out">
              Favorite
            </ContextMenu.Item>
            <ContextMenu.Item className="flex rounded cursor-pointer items-center justify-between gap-4 px-4 py-2 text-sm leading-4 select-none hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-200 ease-in-out">
              Share
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
})

export default Viewport
