import React from "react";

function Login() {
  return (
    <div>
      <div className="first h-screen flex  ">
        <div className="main  bg-gray-800 m-auto rounded-xl ">
          <div className="text text-white text-xl font-semibold text-center my-3">
            <h1>Login</h1>
          </div>
          <div className="login px-5">
            <input
              placeholder="Email"
              type="email"
              className=" bg-gray-600 w-full mb-4 px-2 py-2 placeholder:text-gray-200 outline-none text-white rounded-lg "
            />
          </div>
          <div className="password px-5">
            <input type="password" placeholder="Password" className="bg-gray-600 w-full px-2 py-2 mb-4 rounded-lg outline-none placeholder:text-gray-200 text-white " />
          </div>
         <div className="div px-5 ">
         <button className="w-full bg-yellow-500 mb-4 px-2 py-2 rounded-lg " > 
          Login
          </button>
         </div>
         <div className="div text-sm px-5 flex space-x-1">
            <h1 className="text-white font-semibold mb-4">Don't have an account</h1>
            <h2 className="text-yellow-400 font-semibold mb-4">Signup</h2>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
