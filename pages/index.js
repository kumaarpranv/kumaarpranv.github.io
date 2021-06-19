import Link from 'next/link';

import Container from '../components/Container';
import CertificateCard from '../components/CertificateCard';
import { SocialIcon } from 'react-social-icons';

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

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Pranav Kumar
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-4">
          I'm an ML Engineer, Developer and Aspiring Researcher. I'm currently working as Research Engineer <ExternalLink href="https://www.vmind.io">@VMind</ExternalLink> technologies Inc.
          –&nbsp;
          <Link href="/about">
            <a>learn about me.</a>
          </Link>
        </h2>


        <h2 className="prose text-gray-600 dark:text-gray-400 mb-8">
          Here's my <ExternalLink href="https://drive.google.com/file/d/1ifT-2lH4p4xNdDQVrHCl6YurdmXmpvTT/view?usp=sharing">CV</ExternalLink>
        </h2>
        <div className="flex flex-row items-center gap-4 mb-16">
        <SocialIcon url="https://linkedin.com/in/kumaarpranv" />
        <SocialIcon url="https://github.com/kumaarpranv" />
        <SocialIcon url="https://mail.google.com/mail/?view=cm&fs=1&to=kumaarpranv@gmail.com&su=CAREER" />
        <SocialIcon url="https://instagram.com/_kumaarpranv" />
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Selected Certifications
        </h3>
        
        <CertificateCard
        title="Deeplearning.ai"
        href="https://www.coursera.org/account/accomplishments/specialization/DQ8M73D2M3CP"
        image="DLAI_deeplearning.png"
        priority={true}
        loading="eager"
        />
        <CertificateCard
        title="GCP DataEngineering"
        href="http://www.coursera.org/account/accomplishments/professional-cert/N4TQSWPCY4NW"
        image="GCP_dataengineering.png"
        priority={true}
        loading="eager"
        />
        <CertificateCard
        title="IBM datascience"
        href="https://www.coursera.org/account/accomplishments/specialization/MUU4GAQDXMYK"
        image="IBM_datascience.png"
        />
        <CertificateCard
        title="UB Blockchain"
        href="https://www.coursera.org/account/accomplishments/specialization/LXCCQ9NCH6N6"
        image="UB_blockchain.png"
        />

        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        <ExternalLink href="github.com/kumaarpranv/certifications">click here</ExternalLink> to check all my certifications that are part of / independent of above specializations.
        </h2>

        
        
        
     
      </div>
    </Container>
  );
}
