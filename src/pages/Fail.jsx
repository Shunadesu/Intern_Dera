import React from 'react'
import { Link } from 'react-router-dom'
import path from '../Ulities/path'

const Fail = () => {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 h-[100vh] w-full px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="flex flex-col gap-4">
                            <h1 class="my-2 text-gray-800 font-bold text-3xl">
                                Looks like you've found the
                                doorway to the great nothing
                                Sunny said!
                            </h1>
                            <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link 
                            to={path.HOME}
                            class="
                            hover:bg-white hover:text-[#658C4A] hover:border-[#658C4A]

                            bg-[#658C4A]
                            text-white
                            border border-white rounded-2xl md py-4 px-8 text-center w-[200px] font-bold">Back to Home!</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt='fixing'/>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt='fixing' class="w-full h-full object-cover"/>
            </div>
    </div>
  )
}

export default Fail