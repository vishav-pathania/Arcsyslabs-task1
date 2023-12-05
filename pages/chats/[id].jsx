// pages/chats/[id].jsx
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../../components/Contactcontext';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import person from '@/public/person.svg'
import leftarrow from '@/public/leftarrow.svg'
import trash from '@/public/trash.svg'
import You from '@/public/You.svg'
import send from '@/public/send.svg'


const ChatPage = () => {
    const router = useRouter();
    const { id } = router.query; // Access the contact ID from the URL
    const { contacts, addMessageToContact } = useContext(ContactContext);
    const [newMessage, setNewMessage] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        // Fetch the specific contact based on the ID from the contacts state
        const contact = contacts.find(contact => contact.id === parseInt(id));
        if (contact) {
            setSelectedContact(contact);
        }
    }, [id, contacts])



    // Function to handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const messageData = {
                id: Date.now(), // Unique ID for the new message
                sender: 'You',
                text: newMessage,
                timestamp: new Date(),
            };

            addMessageToContact(selectedContact.id, messageData);
            setNewMessage('');
        }
    };

    

    return (
        <div className="bg-[#050505] flex flex-col px-[10px] md:px-[50px] lg:px-[80px] xl:px-[110px] 2xl:px-[150px] transition-all duration-300 lg:pt-10 relative">
            <Header />
            <div className="flex">
                <div className='hidden lg:block'>
                <Sidebar />
                </div>
                <div className='flex flex-col flex-1 lg:ml-[30px] lg:mt-20'>
                    <div className='bg-[#2f2f2f] flex justify-between items-center  rounded-t-[10px]'>
                        <div className="flex items-center">
                            <Image src={person} alt='' className="lg:ml-8 lg:py-4 sm:ml-4 sm:py-2 ml-2 py-1" >
                            </Image>
                            {selectedContact ? (
                                <p className='font-header font-semibold text-[14px]  text-white lg:ml-4 sm:ml-2 ml-1'>
                                    {selectedContact.name}
                                </p>) : null}
                        </div>
                        <div className='flex items-center'>
                            <Image src={leftarrow} alt='' className='py-6'></Image>
                            <p className='ml-3 font-body font-normal text-white text-[18px]'>Back</p>
                            <Image src={trash} alt='' className='ml-4'></Image>
                            <p className='ml-3 mr-6 font-body font-normal text-white text-[18px]'>Delete</p>
                        </div>
                    </div>
                    <div className='bg-[#181818] flex-1 flex flex-col lg:max-h-[450px] overflow-y-auto rounded-b-[10px] p-[30px]'>
                        <div className='flex-1 flex flex-col justify-end'>
                            <div className='flex flex-col justify-end'>
                                {/* Displaying existing messages */}
                                {selectedContact && selectedContact.messages.map((message, index) => {
                                    const prevMessage = index > 0 ? selectedContact.messages[index - 1] : null;
                                    const isSameSender = prevMessage && prevMessage.sender === message.sender;
                                    const isYouSender = message.sender === 'You';

                                    let marginLeft = '';
                                    let marginRight = '';

                                    if (isSameSender && !isYouSender) {
                                        marginLeft = '58px';
                                    } else if (isSameSender && isYouSender) {
                                        marginRight = '58px';
                                    }

                                    return (
                                        <div
                                            key={message.id}
                                            className={`flex items-center my-[6px] ${isYouSender ? 'justify-end' : ''}`}
                                        >
                                            {!isSameSender && !isYouSender && (
                                                <Image src={person} alt='' />
                                            )}
                                            <p
                                                className={`text-white font-body text-normal text-[14px] font-normal p-[10px] ${isYouSender ? 'bg-[#F3AE9F] rounded-t-lg rounded-l-lg mr-4' : 'bg-[#2F2F2F] rounded-t-lg rounded-r-lg ml-4'}`}
                                                style={{ marginLeft, marginRight }}
                                            >
                                                {message.text}
                                            </p>
                                            {!isSameSender && isYouSender && (
                                                <Image src={You} alt='' />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                        {/* Input for sending new messages */}
                        <div className='flex items-center'>
                            <input
                                type="text"
                                value={newMessage}
                                onChange={e => setNewMessage(e.target.value)}
                                placeholder="Message"
                                className='bg-[#2F2F2F] w-[25px] flex-1 mt-[15px] rounded-full border-none h-[50px] pl-5 font-body font-normal text-[#7F8781] text-[16px]'
                            />
                            <button onClick={handleSendMessage} className='lg:pl-4 lg:mt-4 pl-2 mt-[8px]'><Image src={send} alt=''></Image></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative pt-20 pb-10">
                <Footer />
            </div>
        </div>
    );
};

export default ChatPage;
