

const Home = () => {

  return (
    <div className="flex flex-col space-y-20">

      <div className="grid grid-cols-3 grid-rows-3 w-full text-center">
        <div className="col-start-1 col-end-4 row-start-1 -z-30 row-end-4 blur-xs brightness-50">
            <img className="w-full" src="https://images.unsplash.com/photo-1739732119808-0aeef88d14d9?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero-bg" />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col space-y-8 items-center text-white">
          <p className="font-semibold lg:text-6xl md:text-3xl text-2xl ">Welcome !</p>
          <p className="font-semibold text-3xl md:block hidden">We serve nothing of value</p>
          <p className="font-semibold text-xl hidden lg:block px-10 py-3 rounded-3xl w-fit bg-white text-black">Press here to go nowhere</p>
          
        </div>

      </div>
      <div className="bg-white">
        <div className="flex flex-col space-y-15 p-3 mx-auto max-w-[1200px] mb-36">
          <p className=" font-semibold md:text-4xl text-xl text-center my-72">Try Our New Services !</p>
          <div className=" flex flex-col lg:flex-row gap-4 items-center">
            <img className="rounded-2xl w-lg" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex flex-col justify-center space-y-5 p-3 rounded-2xl lg:h-[370px]">
              <p className="w-fit py-2 px-4 rounded-2xl font-bold text-gray-800">Our Product</p>
              <p className="font-semibold  indent-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 items-center">
            <div className="lg:h-[370px] overflow-clip rounded-2xl w-full">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="lg:order-first flex flex-col justify-center space-y-5 p-3 rounded-2xl lg:h-[370px]">
              <p className="w-fit py-2 px-4 rounded-2xl font-bold text-gray-800">Our Recipes</p>
              <p className="font-semibold indent-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 items-center">
            <img className="rounded-2xl w-lg" src="https://images.unsplash.com/photo-1616509091334-2be806ea7a3b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex flex-col justify-center space-y-5 p-3 rounded-2xl lg:h-[380px]">
              <p className="w-fit py-2 px-4 rounded-2xl font-bold text-gray-800">Our Post</p>
              <p className="font-semibold indent-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 items-center">
            <div className="lg:h-[370px] overflow-clip rounded-2xl w-full">
              <img src="https://images.unsplash.com/photo-1573186692821-cddd1dc7453c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="lg:order-first flex flex-col justify-center space-y-5 p-3 rounded-2xl lg:h-[370px]">
              <p className="w-fit py-2 px-4 rounded-2xl font-bold text-gray-800">Our Comments</p>
              <p className="font-semibold indent-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 items-center">
            <img className="rounded-2xl w-lg" src="https://images.unsplash.com/photo-1641261689141-ee46b8a0470c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex flex-col justify-center space-y-5 p-3 rounded-2xl lg:h-[380px]">
              <p className="w-fit py-2 px-4 rounded-2xl font-bold text-gray-800">Our Todo</p>
              <p className="font-semibold indent-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>

        

    </div>
  )
}

export default Home