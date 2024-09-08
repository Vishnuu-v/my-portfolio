import { FaLaptopCode, FaCode, FaPlug } from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    color: '#1E90FF',
    title: 'Web Development',
    description: "Creating modern, responsive websites with secure, user-friendly designs."
  },
  {
    icon: FaCode,
    color: '#32CD32',
    title: 'Full Stack Development',
    description: "Offering complete development from front-end to back-end for dynamic web apps and complex systems."
  },
  {
    icon: FaPlug,
    color: '#FF4500',
    title: 'API Integration',
    description: "Integrating third-party services like payment gateways and social media for seamless, secure connections."
  }
];

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0D0E11] w-full p-12 lg:p-0">
      <h3 className="text-3xl m-10 text-[#E3646E]">My Services</h3>
      <div className="flex flex-wrap gap-8 justify-center max-w-screen-lg">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            color={service.color} 
            title={service.title} 
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

interface ServiceProps {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, color, title, description }: ServiceProps) => {
  return (
    <div className="bg-[#292C34] rounded-2xl shadow-lg p-6 w-full sm:w-80 text-center lg:mb-20">
      <div className="text-4xl mb-4">
        <Icon style={{ color }} />
      </div>
      <h4 className="text-2xl text-white mb-2">{title}</h4>
      <p className="text-lg text-[#C0C4CD]">{description}</p>
    </div>
  );
}
