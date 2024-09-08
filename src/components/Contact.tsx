import Link from 'next/link';
import { FaArrowRight, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const contacts = [
  {
    link: 'https://www.linkedin.com/in/vishnu-v-fullstack/',
    icon: <FaLinkedin />,
    title: 'LinkedIn'
  },
  {
    link: 'https://www.instagram.com/yourprofile',
    icon: <FaInstagram />,
    title: 'Instagram'
  },
  {
    link: 'https://github.com/Vishnuu-v',
    icon: <FaGithub />,
    title: 'GitHub'
  },
  {
    link: 'vishnu.v.fullstack@gmail.com',
    icon: <FaEnvelope />,
    title: 'Email'
  }
];

export default function Contact() {
  return (
    <div className="bg-[#16181D] w-full flex flex-col items-center justify-center text-xl gap-8 py-16 px-4">
      <h4 className='text-[#E3646E] text-2xl'>Contact</h4>
      <p className='text-[#E2E4E8] text-3xl text-center'>Did you like my work?</p>
      <p className='text-[#C0C4CD] text-xl text-center'>Get in touch or follow me on social media!</p>
      <div className="flex flex-col gap-4 w-full max-w-md items-center">
        {contacts.map((contact, index) => (
          <Link
            key={index}
            href={contact.link}
            className="flex items-center justify-between w-2/3 lg:w-full text-blue-500 hover:text-blue-700 transition bg-[#292C34] py-4 px-6 rounded-lg"
          >
            <div className="flex items-center gap-2">
              {contact.icon}
              <span>{contact.title}</span>
            </div>
            <FaArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
}
