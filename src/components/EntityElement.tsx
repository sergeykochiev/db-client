type ElementProps = {
    label: string
    onClick: () => void
}

export function EntityElement({ onClick, label }: ElementProps) {
    return (
        <div onClick={onClick} className='transition-all cursor-pointer p-2 px-4 rounded-full text-fpurple outline outline-2 -outline-offset-2 outline-fpurple hover:bg-fpurple hover:text-fbeige flex items-center bg-fbeige'>{label}</div>
    )
}
  
