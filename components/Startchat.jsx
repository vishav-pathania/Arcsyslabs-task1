import Image from 'next/image'
import profile from '@/public/profile.svg'
import leftarrow from '../public/leftarrow.svg'
import trash from '../public/trash.svg'
import chaticon from '../public/chaticon.png'

const Startchat = () => {
    return (
        <div className='flex flex-col flex-1 ml-[30px] mt-20'>
            <div className='bg-[#2f2f2f] flex justify-between items-center rounded-t-[10px]'>
                <div className="flex items-center">
                    <Image src={profile} alt='' className="ml-8 py-4" >
                    </Image>
                    <p className='font-header font-semibold text-[14px] text-white ml-4'>
                        Start a chat !
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image src={leftarrow} alt='' className='py-6'></Image>
                    <p className='ml-3 font-body font-normal text-white text-[18px]'>Back</p>
                    <Image src={trash} alt='' className='ml-4'></Image>
                    <p className='ml-3 mr-6 font-body font-normal text-white text-[18px]'>Delete</p>
                </div>
            </div>
            <div className='bg-[#181818] flex-1 rounded-b-[10px]'>
                <div className='m-5'>
                <Image src={chaticon} alt='' className='m-auto'></Image>
                <p className='font-body font-semibold text-white text-xl text-center'>Click on a chat on left to start!</p>
                </div>
            </div>
        </div>
    )
}

export default Startchat