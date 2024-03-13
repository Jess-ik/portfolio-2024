import Link from 'next/link'
import Logo404 from "./components/Logo404";
 
export default function NotFound() {
  return (
    <div className='bg-dark h-screen w-screen flex flex-col justify-center items-center gap-8'>
      <Logo404 />
      <p className='text-light'>Ooops! Looks like you got lost...</p>
      <Link href="/" className='text-light rounded-full px-4 py-2 border hover:bg-light hover:text-dark transition ease-in-out !duration-500'>Let's go home</Link>
    </div>
  )
}