import { useState, useEffect } from 'react'
import { useData } from './DataContext';

const LogInView = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    
    const [isLoggingIn, setIsLoggingIn] = useState(false); // New loading state
    const { galleries, paintings, artists } = useData();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == "test@gmail.com" && pass =="1234") 
            setIsLoggingIn(true); // Start login process
        else 
            setMsg("Invalid Email or Password, try again");
    }
 
    // Effect to handle transition once data is ready
        useEffect(() => {
            if (isLoggingIn && galleries && paintings && artists) {
                props.handler(true); // Proceed when data is loaded
            }
        }, [isLoggingIn, galleries, paintings, artists]);

    return (
        // Found here: https://flowbite.com/blocks/marketing/login/
        <div className = "h-screen relative w-full bg-[url('/images/starry-night.webp')] bg-no-repeat bg-cover flex items-center relative">
            <div className="flex items-center space-x-4 max-w-5xl mx-auto relative">
                <h1 className="absolute -top-[13%] translate-x-[103%] shadow-xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] text-white rounded-xl font-bold text-4xl">
                    CanvasHub
                </h1>
                <div className = "p-4 bg-white shadow-xl mb-32 rounded-xl w-40">
                    <h1 className="w-full flex justify-center text-lg font-semibold">Email</h1>
                    <p className="w-full flex justify-center">test@gmail.com</p>
                </div>
                <div className="w-120 bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            {isLoggingIn ? "Loading..." : "Sign in to your account"}
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <span className="flex w-full h-4 justify-center text-red-500 font-semibold"> {msg} </span> 
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" value={email} onChange={handleEmail} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" value={pass} onChange={handlePass} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-600">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-button-focus hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-600">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-700 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="p-4 mt-18 shadow-xl bg-white rounded-xl w-40">                    
                    <h1 className="w-full flex justify-center text-lg font-semibold">Password</h1>                    
                    <p className="w-full flex justify-center">1234</p>            
                </div>
            </div>
            <h1 className="absolute right-1/2 translate-x-1/2 shadow-xl bottom-10 bg-white rounded-2xl py-2 px-8 text-sm"><a className="hover:underline" href="https://sanctuarymentalhealth.org/2021/03/04/the-starry-night/">https://sanctuarymentalhealth.org/2021/03/04/the-starry-night/</a></h1>
        </div>
    );
}

export default LogInView
