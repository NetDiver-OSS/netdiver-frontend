import Head from "next/head";
import Image from "next/image";

export default function Header() {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="bg-slate-800 text-white flex justify-between items-center px-7 h-16">
      <span className="font-semibold text-xl">NetDiver</span>
      <a href="#" className="text-gray-400 pl-8">Dashboard</a>
      <div className="flex items-center bg-slate-700 p-2 rounded-md flex-grow mx-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" className="bg-transparent" placeholder="Search..." />
      </div>
      <div className="flex items-center">
        <a href="#" className="text-gray-400 pr-4 border-r border-gray-400">Administration</a>
        <span className="px-4">My Account</span>
        <Image className="rounded-full h-10 w-10" src="https://placekitten.com/70/70" width={40} height={40} alt="Profile picture"/>
      </div>
    </header>
  </>
}