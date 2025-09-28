import { useState, useRef } from 'react'
import './App.css'
import AppMenubar from './components/AppMenubar'
import Viewport from './components/Viewport'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import Statusbar from './components/Statusbar'

function App() {
  const viewportRef = useRef(null)

  const [viewportWidth, setViewportWidth] = useState(80)
  const [isResizing, setResizing] = useState(false)

  const [statusbarText, setStatusbarText] = useState("")

  const handleClick = (event) => {
    const text = event.currentTarget.dataset.action

    switch (text) {
      case "add-rect":
        if (viewportRef.current) {
          viewportRef.current.addRectangle()
        }
        break

      default:
        break
    }

    setStatusbarText(`${text} clicked`)

    console.log(`${text} clicked`)
  }

  const handleMouseDown = () => {
    setResizing(true)
    document.body.style.cursor = "e-resize"
  }

  const handleMouseMove = (e) => {
    if (!isResizing) return
    const newWidth = (e.clientX / window.innerWidth) * 100
    if (newWidth > 60 && newWidth < 90) {
      setViewportWidth(newWidth)
    }
  }

  const handleMouseUp = () => {
    setResizing(false)
    document.body.style.cursor = "default"
  }

  return (
    <div
      className='flex flex-col min-h-screen'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={(e) => e.preventDefault()}
    >
      <AppMenubar handleClick={handleClick} />

      <div className="flex flex-grow overflow-hidden">

        <div className="bg-neutral-900 p-0.5 overflow-scroll">
          <Toolbar handleClick={handleClick} />
        </div>

        <div
          className="relative bg-neutral-900 text-neutral-100 overflow-scroll"
          style={{ width: `${viewportWidth}%` }}
        >
          <Viewport ref={viewportRef} handleClick={handleClick} />
        </div>

        <div
          className="w-1 bg-neutral-950 hover:bg-neutral-400 active:bg-neutral-500 cursor-e-resize"
          onMouseDown={handleMouseDown}
        />

        <div
          className="relative bg-neutral-900 text-neutral-100 flex overflow-scroll"
          style={{ width: `${100 - viewportWidth}%` }}
        >
          <Sidebar />
        </div>
      </div>

      <div className="flex bg-neutral-900">
        <Statusbar text={statusbarText} />
      </div>
    </div>
  )
}

export default App
