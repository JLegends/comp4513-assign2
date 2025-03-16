import { forwardRef } from "react";

const PaintingPopup = forwardRef((props, ref) => {
    return (
        <dialog ref={ref} className="flex items-center w-108 h-108" >
            <div className="relative flex h-64 w-96 cursor-pointer flex-col overflow-hidden rounded-lg bg-white bg-clip-border shadow-sm transition-opacity hover:opacity-90" data-dialog-target="image-dialog">
                <img alt="nature" className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"/>
            </div>
            <div data-dialog-backdrop="image-dialog" data-dialog-backdrop-close="true" className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
                <div className="relative m-4 w-2/4 rounded-lg bg-white shadow-sm" role="dialog" data-dialog="image-dialog">
                    <div className="flex shrink-0 flex-wrap items-center justify-between p-4 text-blue-gray-500">
                        <button onClick={()=>ref.current.close()} className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 mr-1.5">
                                <path d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"></path>
                            </svg>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    )
});

export default PaintingPopup