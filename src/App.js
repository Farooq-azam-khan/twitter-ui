import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'heroicons-react';

function App() {
  return (
    <main className="bg-blue-800 text-gray-200 flex flex-col md:flex-row justify-between items-center md:items-start  w-screen h-screen">
      <header className="md:hidden inline-flex items-center justify-between w-full px-3 py-1 border-b border-gray-500 shadow-lg">
        <span>img</span>
        <span>icon</span>
      </header>
      <NavbarMD />
      <section className="lg:w-6/12 flex-grow bg-blue-800">
        <Home />
      </section>
      <nav className="block md:hidden w-full flex items-center justify-between px-3 py-2 bg-blue-800 border-t border-gray-500">
        <Link to="#">icon</Link>
        <Link to="#">icon</Link>
        <Link to='#'>icon</Link>
        <Link to="#">icon</Link>
      </nav>
      <aside className="hidden lg:block lg:w-3/12 flex flex-col space-y-3 h-full border-l border-blue-400 px-4 py-2 bg-blue-900">
        <div className="relative mt-2">
          <input class="w-full pl-8 pr-3 rounded-full bg-blue-800 text-gray-600 font-semibold h-8 text-md" placeholder="Search" />
          <span className="absolute inset-0 flex items-center px-2 text-gray-600"><Icons.SearchOutline className="w-7 h-7" /></span>
        </div>
        <div className="flex flex-col space-y-3 overflow-auto">
          <WhatHappening />
          <WhoToFollow />
        </div>
      </aside>
    </main>
  );
}

const WhatHappening = () => {
  return (<div class="flex flex-col w-full rounded-lg bg-blue-800">
    <div className="px-4 py-4 border-b"><h2 className="font-bold text-lg">What's Happening</h2></div>
    <div className="px-4 py-6 border-b">randomasdfasdfasd</div>
    <div><button className="text-blue-600 px-4 py-4">Show More</button></div>
  </div>)
}

const WhoToFollow = () => {
  return (<div className='flex flex-col w-full rounded-lg bg-blue-800'>
    <div className="px-4 py-4 border-b"><h2 className="font-bold text-lg">Who to Follow</h2></div>
    <div><button className="text-blue-600 px-4 py-4">Show More</button></div>

  </div>)
}
const Home = () => {
  return (<div className="flex flex-col">
    <div className="border-b px-4 py-3"><h1 className="text-lg font-bold">Home</h1></div>
    <div className="flex-grow overflow-auto">tweets here</div>
  </div>)
}
const NavbarMD = () => {
  return (<nav class="overflow-auto hidden md:flex flex-col lg:w-3/12 justify-between space-y-3 bg-blue-700 h-full md:pl-8 md:pr-4">
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">icon</Link>
    <Link to="#">profile</Link>
  </nav>)
}
export default App;
