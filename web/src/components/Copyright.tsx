import { Heart } from 'lucide-react'

export default function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Make with <Heart /> in NLW{' '}
      <a
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
        // eslint-disable-next-line prettier/prettier
        ></a>
      Rocketseat
    </div>
  )
}
