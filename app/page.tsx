import Columns from '@/components/columns'

export default function Home() {
  return (
    <section className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
      <div className='w-full max-w-7xl'>
        <Columns />
      </div>
    </section>
  )
}
