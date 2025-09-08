import { useState, useRef } from 'react'
import './App.css'
import AppMenubar from './components/AppMenubar'
import Viewport from './components/Viewport'
import Sidebar from './components/Sidebar'

function App() {
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null)

  const [viewportWidth, setViewportWidth] = useState(80)
  const [isResizing, setResizing] = useState(false)

  const handleClick = (event) => {
    const text = event.currentTarget.dataset.action

    switch (text) {
      case "file-open":
        handleOpen()
        break

      default:
        break
    }

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

  const handleOpen = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div
      className='flex flex-col min-h-screen'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <AppMenubar handleClick={handleClick} />
      <input
        type="file"
        accept='image/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        className='hidden'
      />

      <div className="flex flex-grow overflow-hidden">
        <div
          className="bg-neutral-900 text-neutral-100 flex items-center justify-center"
          style={{ width: `${viewportWidth}%` }}
        >
          <Viewport image={image} />
        </div>

        <div
          className={`w-2 bg-neutral-950 hover:bg-neutral-400 active:bg-neutral-500 cursor-e-resize`}
          onMouseDown={handleMouseDown}
        />

        <div
          className="bg-neutral-900 text-neutral-100 flex items-center justify-center"
          style={{ width: `${100 - viewportWidth}%` }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
