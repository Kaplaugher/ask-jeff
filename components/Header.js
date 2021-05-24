import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    console.log('search');
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <>
      <header className="sticky top-0 bg-white">
        <div className="flex justify-between items-center w-full p-6">
          <Image
            src="/jeff.jpg"
            height={80}
            width={80}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
          <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 shadow-lg max-w-3xl items-center rounded-full">
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow w-full focus:outline-none "
            />
            <XIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
              onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
            <button onClick={search} hidden type="submit">
              Search
            </button>
          </form>

          <Avatar className="justify-self-end" url="/jeff.jpg" />
        </div>
        <HeaderOptions />
      </header>
    </>
  );
}

export default Header;
