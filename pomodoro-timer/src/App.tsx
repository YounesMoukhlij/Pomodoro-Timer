import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Content from './components/Content.tsx'
import { useState, useEffect } from 'react'
import { FaS } from 'react-icons/fa6';


export default function App()
{
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)'); // sm breakpoint in Tailwind is 640px, md is 768px

    const handleScreenChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Screen is small (sm or smaller)
        setActive(false);
      }
    };

    // Set initial state
    if (mediaQuery.matches) {
      setActive(false);
    }

    // Add listener
    mediaQuery.addEventListener('change', handleScreenChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleScreenChange);
    };
  }, []);

  if (isActive)
  {
    return (
          <div className='bg-zinc-900 w-full h-full grid grid-cols-[15%_85%] grid-rows-[5%_95%] md:grid-cols-[250px_1fr] md:grid-rows-[5%_95%]'>
          <div className={`col-span-1 row-span-2 hidden md:block`}>
            <Sidebar isActive={isActive} setActive={setActive} />
          </div>
          <div className='col-span-1 row-span-1'>
            <Header/>
          </div>
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1">
            <Content/>
          </div>
        </div>
    )
  }
  return (
    <div className='w-full h-full  grid grid-cols-1 grid-rows-[5%_95%]   md:grid-cols-[70px_1fr] md:grid-rows-[5%_95%] '>
          <div className="hidden  md:col-span-1 md:row-span-2 md:block ">
            <Sidebar isActive={isActive} setActive={setActive} />
          </div>
          <div className='col-span-1 row-span-1 yy  md:col-span-1 md:row-span-1'>
            <Header/>
          </div>
          <div className="col-span-1 row-span-1 bg-black md:col-span-1 md:row-span-1 ">
            <Content/>
          </div>
        </div>
    )
}
