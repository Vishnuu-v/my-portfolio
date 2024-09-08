import { FaGithub, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { DiJsBadge, DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiGraphql, SiPrisma, SiRedux, SiJest, SiCypress, SiRedis, SiSentry, SiTypescript } from 'react-icons/si';
import { RiLockPasswordFill } from 'react-icons/ri';

const skills = [
  { name: 'JavaScript', icon: <DiJsBadge title="JavaScript" />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript title="TypeScript" />, color: '#3178C6' },
  { name: 'React', icon: <FaReact title="React" />, color: '#61DBFB' },
  { name: 'Next.js', icon: <SiNextdotjs title="Next.js" />, color: '#000000' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss title="Tailwind CSS" />, color: '#38BDF8' },
  { name: 'Node.js', icon: <FaNodeJs title="Node.js" />, color: '#8CC84B' },
  { name: 'Express', icon: <FaNodeJs title="Express" />, color: '#000000' }, 
  { name: 'RESTful APIs', icon: <FaNodeJs title="RESTful APIs" />, color: '#8CC84B' }, 
  { name: 'GraphQL', icon: <SiGraphql title="GraphQL" />, color: '#E535AB' },
  { name: 'PostgreSQL', icon: <DiPostgresql title="PostgreSQL" />, color: 'lightblue' },
  { name: 'MongoDB', icon: <DiMongodb title="MongoDB" />, color: '#47A248' },
  { name: 'Prisma ORM', icon: <SiPrisma title="Prisma ORM" />, color: '#2D3748' },
  { name: 'Zustand', icon: <SiNextdotjs title="Zustand" />, color: '#000000' },
  { name: 'Redux', icon: <SiRedux title="Redux" />, color: '#764ABC' },
  { name: 'NextAuth.js', icon: <RiLockPasswordFill title="NextAuth.js" />, color: '#000000' }, 
  { name: 'JWT', icon: <RiLockPasswordFill title="JWT" />, color: '#000000' }, 
  { name: 'Jest', icon: <SiJest title="Jest" />, color: '#C21325' },
  { name: 'Cypress', icon: <SiCypress title="Cypress" />, color: 'white' },
  { name: 'Git', icon: <FaGithub title="Git" />, color: '#F05032' },
  { name: 'GitHub Actions', icon: <FaGithub title="GitHub Actions" />, color: '#333' },
  { name: 'Redis', icon: <SiRedis title="Redis" />, color: '#DC382D' },
  { name: 'Sentry', icon: <SiSentry title="Sentry" />, color: '#FB4226' },
  { name: 'Docker', icon: <FaDocker title="Docker" />, color: '#2496ED' },
];


const TechIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center max-w-screen-lg mx-auto mt-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-[#1E1E1E] rounded-2xl flex items-center gap-2 px-4 py-2"
          style={{ color: skill.color }}
        >
          <div className='text-3xl'>
            {skill.icon}
          </div>
          <p className="text-white text-center text-sm md:text-base">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};
export default TechIcons;
