import React from 'react';
import './Break.css';
import  ReactPlayer from 'react-player';
import Img2 from './Images/2.jpg';
import { useNavigate } from 'react-router';

const Stag = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
      }
    return ( 
        <>
            <div className="stage2 p-4">
                <div className="Img2 ">
                    <ReactPlayer width="600px" height="350px" controls url="https://www.youtube.com/watch?v=cLV3hedhz7s"/>
                </div>
            </div>
            <div className="stage3 my-8">
                <div className="T">
                    <p className='T mt-4 text-lg'>PG Academy Student Loan funding is <br /> available for the Diploma of Sport. </p>
                    <p className='T mt-4 text-lg'>PG Education is an approved provider of <br /> the PG funded Diploma of Sport .</p>
                    <p className='T mt-4 text-lg'>This means you can get a head-start on <br /> your career in health and fitness. There <br /> has never been a better time to enrol.</p>
                </div>

                <div className="setup my-12">
                    <p className='font-bold text-5xl D'>PG Academy we are ready<br /> 
                    <div className="flex mt-4 flexs">
                        <div className="w-1/2 text-white p-1 bg-green-900"></div>
                        <div className="w-1/2 text-white p-4 bg-green-400 mx-4"></div>
                        <div className="w-1/2 text-white p-1 bg-green-900"></div>
                    </div>
                    <span className='font-normal ml-8 text-lg T'>to take our student to the next level of their own interest</span></p>
                </div>
            </div>
            <div className="stage4">
                <div className=" py-8">
                    <h3 className='text-2xl KBs'>Schedule a call with our coach adviser</h3>
                    <img src={Img2} alt="loading" className='LG mx-auto'/>
                    <button onClick={handleClick} type='submit' className='LGs KB bg-green-600 p-4 text-white w-1/4 rounded-3xl font-bold text-lg mt-4'>Schedule a call</button>

                </div>
            </div>
            <div className="stage5">
                <h1 className="text-7xl font-bold text-gray-600"  id='set'>PG <span className='text-green-600'> Football Academy</span></h1>
                <div className="flex ">
                    <p className='mx-auto text-3xl font-medium'id='sets'>Personal <span className="mx-16">Training</span> courses</p>
                </div>
            </div>
        </>
     );
}
 
export default Stag;