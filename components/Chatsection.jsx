import Image from 'next/image'
import person from '../public/person.svg'
import leftarrow from '../public/leftarrow.svg'
import trash from '../public/trash.svg'


const Chatsection = () => {
    return (
        <div className='flex flex-col flex-1 ml-[30px] mt-20'>
            <div className='bg-[#2f2f2f] flex justify-between items-center rounded-t-[10px]'>
                <div className="flex items-center">
                    <Image src={person} alt='' className=" ml-8 py-4" >
                    </Image>
                    <p className='font-header font-semibold text-[14px] text-white ml-4'>
                        Carresa jessalin
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
                
            </div>
        </div>
    )
}

export default Chatsection