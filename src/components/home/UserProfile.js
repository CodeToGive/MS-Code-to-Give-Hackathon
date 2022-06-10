import React from 'react'
import arrow1 from '../../assets/images/arrow1.png'
import arrow2 from '../../assets/images/arrow2.png'
import { UploadDocs } from '../UploadDocs'
import { Link,useNavigate } from 'react-router-dom'
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { useState } from 'react';
import { ProfilePageFinancial } from '../ProfilePageFinancial'

export const UserProfile = () => {
    
    const navigate = useNavigate();
    const toComponentB=(typeOfAid)=>{
    navigate('/ProfilePageFinancial',{state:{name:typeOfAid}});
        }

    const initialNodes = [
        {
          id: '1',
          type: 'input',
          data: { label: <div class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Apply AID</h5>
          </div> },
          position: { x: 250, y: 25 },
        },
      
        {
          id: '2',
          // you can also pass a React component as a label
          data: { label: <div class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Financial AID</h5>
          </div> },
          position: { x: 50, y: 125 },
        },
        {
          id: '4',
          // you can also pass a React component as a label
          data: { label: <div class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Non Financial AID</h5>
          </div> },
          position: { x: 450, y: 125 },
        },
        {
            id: '2a',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Education")}} class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Education</h5>
            </a> },
            position: { x: -350, y: 250 },
          },
          {
            id: '2b',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Health")}} class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Health</h5>
            </a> },
            position: { x: -175, y: 250 },
          },
          {
            id: '2c',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Livelihood")}} class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Livelihood</h5>
            </a> },
            position: { x: 0, y: 250 },
          },
          {
            id: '2d',
            data: { label:
                    <a onClick={()=>{toComponentB("Life_Skills")}} class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
                    <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Life Skills</h5>
                    </a> },
            position: { x:175, y: 250 },

          },
          {
            id: '41',
            // you can also pass a React component as a label
            data: { label: 
                <div>
                    <div class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
                    <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">Recommend</h5>
                    </div>
                </div>
            },
            position: { x:450, y: 250 },
          },
          {
            id: '4a',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Job")}} class="block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Job</h5>
            </a> },
            position: { x:350, y: 375 },
          },
          {
            id: '4b',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Counselling")}}  class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Counselling</h5>
            </a> },
            position: { x:525, y: 375 },
          },
          {
            id: '4c',
            // you can also pass a React component as a label
            data: { label: <a onClick={()=>{toComponentB("Business")}} class=" block max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Business</h5>
            </a> },
            position: { x:700, y: 375 },
          },
      ];
      
      const initialEdges = [
        { id: 'e1-2', source: '1', target: '2' ,animated: true},
        { id: 'e1-4', source: '1', target: '4' ,animated: true},
        { id: 'e2-2a', source: '2', target: '2a', animated: true },
        { id: 'e2-2b', source: '2', target: '2b', animated: true },
        { id: 'e2-2c', source: '2', target: '2c', animated: true },
        { id: 'e2-2d', source: '2', target: '2d', animated: true },
        { id: 'e41-4a', source: '41', target: '4a', animated: true },
        { id: 'e41-4b', source: '41', target: '4b', animated: true },
        { id: 'e41-4c', source: '41', target: '4c', animated: true },
        { id: 'e4-41', source: '4', target: '41', animated: true },
      ];
        const [nodes, setNodes] = useState(initialNodes);
        const [edges, setEdges] = useState(initialEdges);

  return (
    <div className='h-screen overflow-x-scroll  bg-gray-200 p-10 '>
    <div className='flex items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center m-auto'>
    <a href="#scheduleMeet" class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Schedule Meet</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </a>
    {/* <Link></Link> */}
    <a href="#" class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upload Documents</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </a>
    <Link to="/ApplyAID">
    <a href="#" class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apply to AID</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </a>
    </Link>
    {/* <hr style="border: none;"/> */}
    {/* <div class="divide-y divide-gray-400 hover:divide-y-8"></div> */}
    </div>

    <hr className='m-20 text-black'></hr>

    {/* Schedule Meet */}
    <div id='scheduleMeet'>
        <h1 className='text-4xl font-mono'>Schedule Meet</h1>
        <br></br>
        
    <a href="#" class="flex divide-x block w-full p-6 bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-yellow-100">
        <div className='p-6'>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Offline Meet</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <br></br>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Confirm appointment
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>          
        </div>
        <div className='p-6'>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Meet</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <br></br>
        <div className='flex gap-10 items-center justify-center'>
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Gmeet
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> 

            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Zoom
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> 
        </div>
                 
        </div>
        </a>
    </div>

    <hr className='m-20 text-black'></hr>

    {/* Apply To AID */}

    {/* <div id="applyToAid" className='grid items-center justify-center'>
    <div className='grid items-center justify-center'>
        <a href="#applyToAid" class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apply to AID</h5>
           
            </a>
        </div>
        <br></br>
        <div  className='flex '>
            
            <div className='flex'>
            <Link to="/ProfilePageFinancial">
                <div>
                    <a class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financial AID</h5>
                
                    </a>
                </div>
            </Link>
            
            <img src={arrow2} className="w-20">
            </img>

            </div>
            <div className='w-20'></div>
            <div className='flex'>
            <img src={arrow1} className="w-20">
            </img>
            <div>
                <a href="#" class=" block p-6 max-w-sm bg-pink rounded-lg border border-gray-200 shadow-md dark:border-gray-700  transition ease-in-out delay-100 bg-gradient-to-r from-sky-500 to-indigo-500  hover:-translate-y-1 hover:scale-110  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500  duration-300 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Non Financial AID</h5>
            
                </a>
            </div>
            </div>
        </div>

        
    </div> */}
    {/* {Flow()} */}

    <ReactFlow id='applyToAid' nodes = {nodes} edges ={edges} fitView>
    <br></br>
    {/* <MiniMap /> */}
    <Controls />
    </ReactFlow>
    </div>
  )
}
