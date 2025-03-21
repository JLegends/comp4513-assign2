import { useState } from 'react'


const LogInView = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == "test@123.com" && pass =="123") 
            props.handler(true);
        else 
            setMsg("Invalid");
    }
 
    return (
        // Found here: https://flowbite.com/blocks/marketing/login/
        <div className = "h-screen w-full bg-[url('/images/starry-night.webp')] bg-no-repeat bg-cover flex items-center justify-center">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <span className= "mr-8"> Email: test@123.com </span> <span> Password: 123 </span>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <span> {msg} </span> 
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
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
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p className="text-sm font-light text-gray-600">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-700 hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogInView
