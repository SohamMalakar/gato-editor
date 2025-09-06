import { useState, useRef } from 'react'
import './App.css'
import Menubar from './components/Menubar'
import Viewport from './components/Viewport'
import Sidebar from './components/Sidebar'

function App() {
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null)

  const [viewportWidth, setViewportWidth] = useState(80)
  const isResizing = useRef(false)

  const handleMouseDown = () => {
    isResizing.current = true
  }

  const handleMouseMove = (e) => {
    if (!isResizing.current) return
    const newWidth = (e.clientX / window.innerWidth) * 100
    if (newWidth > 60 && newWidth < 90) {
      setViewportWidth(newWidth)
    }
  }

  const handleMouseUp = () => {
    isResizing.current = false
  }

  const handleOpen = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div>
        <Menubar onOpen={handleOpen} />
      </div>

      <input
        type="file"
        accept='image/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        className='hidden'
      />

      <div className="flex flex-grow overflow-hidden">
        <div
          className="bg-zinc-900 text-zinc-100 flex items-center justify-center"
          style={{ width: `${viewportWidth}%` }}
        >
          <Viewport image={image} />
        </div>

        <div
          className="w-2 bg-zinc-950 cursor-col-resize hover:bg-zinc-400"
          onMouseDown={handleMouseDown}
        />

        <div
          className="bg-zinc-900 text-zinc-100 flex items-center justify-center"
          style={{ width: `${100 - viewportWidth}%` }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
