import Image from "next/image";
import person from "@/public/person.svg"

const Chatselector = () => {
    return (
        <div className="bg-[#050505]">
            <div className="rounded-full">
                <Image src={person} alt=""></Image>
            </div>
        </div>
    )
}

export default Chatselector