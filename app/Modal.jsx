import { Fragment, useState, useEffect, useRef } from 'react'
export default function Modal({title, buttons, modalOpenState, setModalOpenState, children}) {

	// use useState and useEffect to create a delay in setting the 'hidden' class on the modal
	// This is so that the nice animations can run

	const [hiddenval, setHiddenval] = useState('hidden')
	const modalClickPoint = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			setHiddenval(modalOpenState ? '' : 'hidden')			
		}, 200)

		//remove the modal if someone clicks away from it

		function handleClickOutside(event) {

			if (modalClickPoint.current && !modalClickPoint.current.contains(event.target)) {
				setModalOpenState(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	})

	return (
	<Fragment>
		<div className={`modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto transition-opacity duration-150 ease-linear z-50 ${hiddenval} ${modalOpenState ? 'opacity-100' : 'opacity-0'}`}
			tabIndex="-1">
			<div ref={modalClickPoint} className={`max-w-lg mx-auto m-7 relative w-auto pointer-events-none ${modalOpenState ? 'animate-modalup' : 'animate-modaldown'}`}>
				<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					<div
						className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{title}</h5>
						<button type="button"
								className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
								onClick={() => setModalOpenState(!modalOpenState)}>X
						</button>
					</div>

					<div className="modal-body relative p-4">
						{children}
					</div>

				</div>
			</div>
		</div>
	</Fragment>	
	)
}
