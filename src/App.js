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
      <nav className="md:hidden w-full flex items-center justify-between px-3 py-2 bg-blue-800 border-t border-gray-500">
        <Link to="#">icon</Link>
        <Link to="#">icon</Link>
        <Link to='#'>icon</Link>
        <Link to="#">icon</Link>
      </nav>
      <aside className="hidden lg:w-3/12 lg:flex flex-col space-y-3 h-full border-l px-4 py-2 bg-blue-900">
        <div className="relative mt-2">
          <input className="w-full pl-8 pr-3 rounded-full bg-blue-800 font-semibold h-8 text-md" placeholder="Search" />
          <span className="absolute inset-0 flex items-center px-2 text-gray-300"><Icons.SearchOutline className="w-7 h-7" /></span>
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
    <div className="inline-flex items-center justify-between px-5 py-4 border-b">
      <h1 className="text-lg font-bold">Home</h1>
      <span><Icons.StarOutline className="w-7 h-7 text-blue-500" /></span>
    </div>
    <div className="flex-grow overflow-auto">tweets here</div>
  </div>)
}
const NavbarMD = () => {
  return (<nav className="overflow-auto hidden md:flex flex-col space-y-1 items-end py-5 px-5 lg:w-3/12 justify-between space-y-3 bg-blue-900 h-full md:pl-8 md:pr-4">
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.FireOutline className="w-10 h-10" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.Home className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.HashtagOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.BellOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.MailOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.BookmarkOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.BookOpenOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.UsersOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><Icons.DotsCircleHorizontalOutline className="w-8 h-8" /></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2"><span className="p-4 rounded-full bg-blue-700">tw</span></Link>
    <Link to="#" className="hover:bg-blue-600 rounded-full p-2">profile</Link>
  </nav>)
}
export default App;
