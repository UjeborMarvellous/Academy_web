import React from "react";
import './Setup.css'

const Setup = () => {
    return ( 
        <div className="">
            <nav>
                <div className="flex">
                        <p className="bg-blue-400 text-white text-1xl font-bold p-4 PG">𝓹𝓰</p>
                    <div className="sec1">
                        <h4 className="text-blue-600 font-bold text-3xl mt-4">PG Football Academy</h4>
                    </div>
                    <div className="flex whitespace-nowrap">
                        <ul className="flex mx-auto">
                            <li className="text-2xl pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0"><a href="#">Trending</a></li>
                            <li className="text-2xl ml-4 pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0"><a href="#">Top Rated</a></li>
                            <li className="text-2xl ml-4 pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0"><a href="#">Action</a></li>
                            <li className="text-2xl ml-4 pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0"><a href="#">Wrestling</a></li>
                            <li className="text-2xl ml-4 pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0"><a href="#">Boxing</a></li>
                            <li className="text-2xl ml-4 pt-4 hover:border-blue-400 hover:border-b-4 hover:p-0 "><a href="#">Animation</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Setup;