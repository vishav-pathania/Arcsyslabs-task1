import Image from "next/image";
import Link from "next/link";
import Chat from "@/public/Chat.svg"
import person from "@/public/person.svg"
import { useState } from "react";


const Sidebar = () => {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Caressa Jessalin',
      lastMessage: 'Lorem ipsum dolor sit am..',
      messages: [
        { id: 1, sender: 'Caressa Jessalin', text: 'Hey!', timestamp: new Date() },
        { id: 2, sender: 'You', text: 'Hi there!', timestamp: new Date() },
        // Add more messages as needed
      ]
    },
    {
      id: 2,
      name: 'Letty Bride',
      lastMessage: 'Lorem ipsum dolor sit am..',
      messages: [
        { id: 1, sender: 'Letty Bride', text: 'Hello!', timestamp: new Date() },
        { id: 2, sender: 'You', text: 'Hi Letty!', timestamp: new Date() },
        // Add more messages as needed
      ]
    },
    // Add more contacts as needed
  ]);

  return (
    <div className="bg-[#181818] p-10 mt-20 max-w-lg flex flex-col items-center rounded-[10px]">
      <div className="mb-3">
        <p className=" font-body font-normal text-white text-[26px] text-opacity-70">
          ALL YOUR CHATS
        </p>
        <button className="bg-primary flex items-center justify-center font-header font-semibold text-lg mt-[30px] text-[#050505] rounded-[10px] py-[21px] w-full">
          <Image src={Chat} alt="" className="mr-[6px]" />
          <span>Chat Images: ON</span>
        </button>
        <p className="mt-5 text-white font-regular font-body text-opacity-70">
          When a bot sends you images, you will be charged one secondary image
        </p>
      </div>
      {contacts.map(contact => (
        <Link href={`/chats/${contact.id}`} key={contact.id} className="w-full">
          <div className="flex mt-2 hover:bg-[#2F2F2F] hover:cursor-pointer rounded-full p-2">
            <Image src={person} alt=""></Image>
            <div>
              <p className="font-header font-semibold text-[16px] text-white ml-3">{contact.name}</p>
              <p className="font-body font-normal text-[14px] text-[#7F8781] ml-3">{contact.lastMessage}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
