import Header from "./Header"
import Footer from "./Footer"

const AboutView = (props) => {



    const headerFocus = "About"



    return (
        
        <article className="flex flex-col w-full min-h-screen"> {/* clean up Background color EVENTUALLY */} 
            <Header headerFocus={headerFocus} />
            
            <div className="flex flex-row flex-grow h-full">
                <div className="w-2/3">
                    <figure className="relative">
                    <a href="#">
                        <img className="w-full h-[800px]" src="./images/art-images/paintings/full/019040.jpg" alt="image description"/>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                    </a>
                    <figcaption className="absolute px-4 text-9xl text-white bottom-1 font-bold">
                        <p>ABOUT</p>
                    </figcaption>
                    </figure>

                    <div className="bg-linear-to-t from-[#121212] to-[#212121] p-6 h-[806px]">
                        <p className="text-white">Temp text</p>

                    </div>
                </div>
                <aside className="w-1/3">
                    <div className="relative">
                        <a href="#">
                            <img className="w-full h-1/3" src="./images/art-images/paintings/square/019150.jpg" alt="image description"/>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                        </a>
                    </div>

                    <div className="relative">
                        <a href="#">
                            <img className="w-full h-1/3" src="./images/art-images/paintings/square/021060.jpg" alt="image description"/>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                        </a>
                    </div>

                </aside>
            </div>
        
            <Footer/>
        </article>
        
    )
}

export default AboutView