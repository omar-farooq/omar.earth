export default function MobileNavButton({navState}) {

    const [open, setOpen] = navState
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

    return (
        <>
					<button
     					 className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
				         onClick={() => setOpen(!open)}
				    >
					  <div
						className={`${genericHamburgerLine} ${
						  open
							? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
						}`}
					  />
					  <div
						className={`${genericHamburgerLine} ${
						  open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
						}`}
					  />
					  <div
						className={`${genericHamburgerLine} ${
						  open
							? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
						}`}
					  />
					</button>
        </>
    )
}
