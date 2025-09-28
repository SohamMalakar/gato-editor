function Statusbar({ text }) {
  return (
    <div className="flex justify-end items-center h-8 w-full px-3 text-sm font-medium text-neutral-100 select-none">
      <div>{text || "Status will appear here"}</div>
    </div>
  )
}

export default Statusbar