import React from "react";
import './Navbar.css';

const Nav = () => {

    return ( 
        <nav className="">
            <div className="bg-[url(https://cdn.pixabay.com/photo/2016/06/15/01/11/soccer-1457988_960_720.jpg)] h-full w-full object-cover bg-cover bg-center">
                <div className="first relative BG">
                    <h1 className="text-6xl font-bold text-green-600 H1 Hit">PG Football Academy</h1>
                    <div className="firstling">
                        <div className="not ml-32 mt-52 h-64 H3 p-4 pb-32">
                            <h3 className="text-center text-gray-600 font-bold text-3xl">Start Your Career in Sport Today! with <br /><span className="text-green-700"> PG Football Academy</span></h3>
                            <p className="text-center font-medium">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Consequatur fugit vitae ex at, eveniet <br /> natus exercitationem laudantium, unde sed aliquam <br /> consectetur impedit! Alias, aspernatur consequatur!</p>
                        </div>
                        <div className="form H3 w-1/2 mt-16 pb-4 pt-4">
                            <form className="">
                                <h1 className="text-gray-500 text-3xl font-bold text-center H5">PG Football <span className="text-green-600">Academy</span></h1>
                                <p className="text-center text-l H1">PERSONAL TRAINING COURSES</p>
                                <label className="ml-8">Name*</label><br />
                                <input type="text" required className=" my-4 w-4/5 rounded-2xl p-1 mx-8 H btm"/><br />

                                <label className="ml-8">Email*</label><br />
                                <input type="email" required className=" my-4 w-4/5 rounded-2xl p-1 mx-8 H btm"/><br />

                                <label className="ml-8">Phone Number*</label><br />
                                <input type="text" required className=" my-4 w-4/5 rounded-2xl p-1 mx-8 H btm"/>

                                <p className="ml-8"> when would you prefer start your course?</p>
                                <select className="mt-4 w-4/5 p-1 mx-8 mb-8 H btm">
                                    <option>Immediately</option>
                                    <option>In 3 Months</option>
                                    <option>In 6 Months or More</option>
                                </select>
                                <button type="submit" className="btm whitespace-nowrap rounded-2xl w-3/5 bg-green-600 p-4 text-white">Request Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;