import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="text-5-xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share (if you like)
          with the world!
        </p>
      </div>
      <a href="bg-green-500 inline-block rounded-full px-5 py-3 font-alt text-sm uppercase leading-none text-black">
        REGISTER MEMORY
      </a>
    </div>
  )
}
