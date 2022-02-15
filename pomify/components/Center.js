import { shuffle } from 'lodash';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { playlistIdState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';

const colours = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500'
];

function Center() {
  const { data: session } = useSession();
  const [ colour, setColour ]= useState(null);
  const playlistId = useRecoilValue(playlistIdState);

  useEffect(() => {
    setColour(shuffle(colours).pop());
  }, [playlistId]);

  return (
    <div className='flex-grow'>
      <header className='absolute top-5 right-8'>
        <div className='flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
          <img 
            className='rounded-full w-10 h-10'
            src={session?.user.image}
            alt='' 
          />
          <h2>{session?.user.name}</h2>
          <IoChevronDownSharp />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white padding-8`}>
        <h1>hello</h1>
      </section>
    </div>
  )
}

export default Center;