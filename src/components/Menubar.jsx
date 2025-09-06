import { useState, useEffect, useRef } from "react"
import "../styles/Menubar.css"

function Menubar({ onOpen }) {
  const [openMenu, setOpenMenu] = useState(null)
  const menuRef = useRef(null)

  const menus = {
    File: ["New", "Open", "Save", "Exit"],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste"],
    View: ["Zoom In", "Zoom Out", "Fullscreen"],
    Help: ["Documentation", "About"],
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={menuRef}
      className="flex bg-zinc-900 text-zinc-100 p-2 relative select-none"
      onMouseDown={() => setOpenMenu(null)}
    >

      {Object.keys(menus).map((menu) => (
        <div
          key={menu}
          className="relative"
          onMouseDown={(e) => {
            e.stopPropagation()
            setOpenMenu(menu)
          }}
          onMouseEnter={() => {
            if (openMenu) setOpenMenu(menu)
          }}
        >
          <div
            className={`px-2 mx-1 rounded cursor-pointer ${openMenu === menu
                ? "bg-zinc-100 text-zinc-900"
                : "hover:bg-zinc-100 hover:text-zinc-900"
              }`}
          >
            {menu}
          </div>

          {openMenu === menu && (
            <div className="absolute left-0 mt-3 w-40 text-zinc-100 bg-zinc-900 border-1 border-zinc-100 rounded shadow-lg overflow-hidden">
              {menus[menu].map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-1 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                  onClick={() => {
                    console.log(`${menu} -> ${item}`)
                    menu === 'File' && item === 'Open' && onOpen()
                    setOpenMenu(null)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Menubar
