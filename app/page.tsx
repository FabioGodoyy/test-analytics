import Image from 'next/image'
import { Analitycs } from './components/analytics'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-arround p-24">
     <h1>Hello World!</h1>
     <Analitycs />
    </main>
  )
}
