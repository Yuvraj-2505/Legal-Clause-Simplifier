import React from 'react'; 
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg max-w-sm w-full">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="email"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="password"
                            />
                        </div>
                        <div className="flex justify-center ">
                            <button
                                type="submit"
                                className="px-6 py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 transition-colors"
                            >
                                Login
                            </button>
                            {/* <a href="#" className="text-sm text-blue-600 hover:underline mt-4">Forgot password?</a> */}
                        </div>
                        <div>
                            <p>Don't have an account </p>
                            <Link to="/signup">
                                <button className="w-full mt-2 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                                    signup
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;