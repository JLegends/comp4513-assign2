import Header from "./Header"
import Footer from "./Footer"

const AboutView = (props) => {



    const headerFocus = "About"



    return (
        
        <article className="flex flex-col w-full min-h-screen"> {/* clean up Background color EVENTUALLY */} 
            <Header headerFocus={headerFocus} />
            
            <div className="flex flex-row h-full">
                <div className="w-2/3 flex flex-col">
                    <figure className="relative">
                    
                        <img className="w-full h-[800px]" src="./images/art-images/paintings/full/019040.jpg" alt="image description"/>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                    
                    <figcaption className="absolute px-4 text-9xl text-white bottom-1 font-bold">
                        <p>ABOUT</p>
                    </figcaption>
                    </figure>

                    <div className="bg-linear-to-t from-[#121212] to-[#212121] p-6 flex-grow">
                        <p className="text-white text-2xl font-light">
                        CanvasHub provides users with an immersive experience to browse art-related data through multiple views: Gallery, Artist, Painting, and Genre. Users can log in (simulated), filter and sort paintings, view detailed painting information in a modal dialog, manage a favorites list, and explore gallery locations on a map. The application fetches data from a custom API hosted at `https://w2025-assign1.onrender.com/api` and persists user preferences using local storage.
                        </p>

                        <p className="text-white mt-8 font-light text-2xl">
                        This project was done as part of our WEB 3: Advanced Web Dev Class. It served as an introuduction to the React Framework. Using React to build this project the organization of the code for the web application much easier thanks to the React Component System. We also got to explore new feaures in a single page application that we had not done before previously. The React Router allowed us to have all the benefits of a single page application while still enabling the use of the browser back button to navigate between different views.   
                        </p>

                        <p className="text-white mt-8 font-light text-2xl">
                        Additionnaly, This project was also another oppurtunity to gain more experience using TailwindCSS. TailWindCSS pairs quite nicely with the structure of React as everything that relates to how a particular component functions and looks is all contained within that component's JSX file. This makes it much easier to colloborate and assign components between group members.
                        </p>

                        <p className="text-white mt-8 font-light text-2xl">
                        As to where we go from here, working on more advanced functionality such as real working authentication, and more advanced user interfaces would be a great next step in our Web Development Journey.
                        </p>

                    </div>
                </div>
                <aside className="w-1/3">
                    <div className="relative">
                
                        <img className="h-1/3" src="./images/art-images/paintings/square/019150.jpg" alt="image description"/>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                        
                    </div>

                    <div className="relative">
                        
                            <img className="h-1/3" src="./images/art-images/paintings/square/021060.jpg" alt="image description"/>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                        
                    </div>

                    
                    <div className="relative">
                        
                            <img className="h-1/3" src="./images/art-images/paintings/square/019010.jpg" alt="image description"/>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
                        
                    </div>

                </aside>
            </div>
        
            <Footer/>
        </article>
        
    )
}

export default AboutView