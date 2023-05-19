import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="blur-full absolute right-0 top-1/2 h-[288px] w-[526] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50" />
        {/* Stripes */}
        <div className="bg-stripes absolute bottom-0 right-2 top-0 w-2"></div>
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </a>
      </div>
      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You still not register anyone remember, start{''}{' '}
            <a href="" className="underline hover:text-gray-50">
              create now
            </a>{' '}
          </p>
        </div>
      </div>
    </main>
  )
}
