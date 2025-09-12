
import * as React from 'react'
import { FaLinux, FaPlaystation, FaXbox } from "react-icons/fa";

function Toolbar({ handleClick }) {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="h-8 rounded px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none cursor-pointer"
        onClick={handleClick}
        data-action="add-rect"
      >
        <FaXbox />
      </button>
      <button
        className="h-8 rounded px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none cursor-pointer"
        onClick={handleClick}
        data-action="add-circle"
      >
        <FaPlaystation />
      </button>
      <button
        className="h-8 rounded px-3 text-sm font-medium text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 select-none cursor-pointer"
        onClick={handleClick}
        data-action="add-square"
      >
        <FaLinux />
      </button>
    </div>
  )
}

export default Toolbar