// pages/chats/[id].jsx
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { ContactContext } from '../../components/Contactcontext';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Startchat from "@/components/Startchat";

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the contact ID from the URL
  const { contacts, addMessageToContact } = useContext(ContactContext);
  const [newMessage, setNewMessage] = useState('');

  // Fetch the specific contact based on the ID from the contacts state
  const selectedContact = contacts.find(contact => contact.id === parseInt(id));

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
    <div className="bg-[#050505] flex flex-col px-[20px] md:px-[50px] lg:px-[80px] xl:px-[110px] 2xl:px-[150px] transition-all duration-300 pt-10 h-screen relative">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Startchat />
      </div>
      <div className="relative pt-20 pb-[100px]">
      <Footer />
      </div>
    </div>
  );
};

export default ChatPage;
