import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images7.alphacoders.com/138/1383207.png)] h-screen pt-8 flex justify-between flex-col w-full '>
            <img className='w-16 ml-8' src='https://cdn.mos.cms.futurecdn.net/M4hbiWhoo8n3bQQ2hKg5s3.jpg' alt='logo' />
            <div className='bg-white pb-7 py-4 px-4 '>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start