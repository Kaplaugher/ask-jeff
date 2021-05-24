import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Avatar from '../components/Avatar';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    console.log('search');
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div flex className="flex flex-col items-center h-screen">
      <Head>
        <title>Search Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar */}
          <Avatar url="/jeff.jpg" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-full ">
        <Image
          src="/jeff.jpg"
          height={300}
          width={300}
          className="rounded-full"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col space-y-2 justify-center sm:flex-row sm:space-x-4 mt-4">
          <button onClick={search} className="btn">
            Ask Jeff
          </button>
          <button onClick={search} className="btn">
            Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
