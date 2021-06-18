import Link from 'next/link';
import Timeline from '../components/Timeline';
import Container from '@/components/Container';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About – Pranav Kumar Pulusu">

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Pranav. I'm an ML Engineer, Developer and Aspiring Researcher.
            &nbsp;currently I'm working <ExternalLink href="https://www.vmind.io">@VMind</ExternalLink> technologies Inc as Research Engineer. 
          </p>
          <p>
            I’m passionate about theoretical computer science, machine reasoning, system design and hacky-development to get things done!&nbsp;
            
          </p>
          <p>
            I grew up in small-town called Kavali from Andhra pradesh, India. did my Bachelors there itself, in Visvodaya Engineering College
            graduating with a degree in Computer Science & Engineering.
          </p>
          <p>
            With the help of Internet, I got into machine learning and web development in my 2nd year of undergraduation that helped me in dreaming bigger than 
            I could before. using codevita, I got digital profile from Tata consultancy services. through Internship I got mapped to prestigious tcs innovation labs.
            after the internship with tcs innovation labs, I got a chance to work as intern at Vmind technologies Inc. I joined back TCS mapped to innovation labs, but
            It made me realize that I loved learning, researching than development. that made me exit the company joining VMind as a Research engineer.
          </p>
          <p>  
            In my free time, I would be reading some math/CS book, watching some anime, playing some video game.
          </p>

          <Timeline />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Selected Workshops & Talks I Attended
        </h2>

        <Talk
          title="STOC 2021: 53rd Annual ACM Symposium on Theory of Computing"
          link="http://acm-stoc.org/stoc2021/"
        >
          STOC 2021 is part of a 5-day TheoryFest with an expanded program of STOC papers, poster sessions, and a broad cross-section of invited talks, workshops, and tutorials. 
        </Talk>
        
      </div>
    </Container>
  );
}
