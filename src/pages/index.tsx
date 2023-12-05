import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    //first mobile

    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Image
        src={'/color_palette.png'}
        alt='The color scheme of the site, temporally inserted in the top corner. Hover to disappear'
        width={100}
        height={100}
        quality={100}
        className='absolute sm:w-12 md:w-24 lg:w-48 xl:w-48 sm:h-12 md:h-24 lg:h-48 xl:h-48 top-0 right-0
        transition-all ease-in-out hover:opacity-20
        '
      >

      </Image>
      <NavBar/>
      
    </main>
  )
}
