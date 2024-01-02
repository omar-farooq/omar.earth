export default function MobileNav({navState}) {

    const [open, setOpen] = navState

    return (
        <>
            <div className={`absolute h-screen w-screen z-50 bg-white ${open ? '' : 'hidden'}`}>
                <div className="flex">
                    here
                </div>
            </div>
        </>
    )
}
