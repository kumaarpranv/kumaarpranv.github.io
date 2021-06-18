import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    
    <Year>2018</Year>
    <ul>
      <Step title="Started Machine Learning & My Hunt of certifications">
      I stumbled upon Machine Learning unexpectedly. I wanted to learn more about it. that led me to online MOOCS courses and I realized being from a tier-3 college,
      my path to a good career can come from these certifications and self-learning. that made me invest much time in completing the courses, sometimes even disregarding my college subjects.
      </Step>

      <Step title="Got 1st in college's debugging competition, 3rd in web design">
      I used to think I'm bad at time bound coding, but this competition helped me in realizing I can do good. 
      </Step>

      <Step title="My First Collaborative mini-project Automating powerstrip with raspberry pi">
      We were asked to do a mini project in this semester preferably in IOT or robotics. I picked IOT and ideated over a powerstrip that could be operated by voice. from anywhere in the world.
      with me being the most contributed, designed a system for this using firebase, android, raspberry pi, electrical principles ( still remember the shocks ). we made the automated powerstrip in two weeks.
      </Step>

      <Step title="My another mini-project Hexapod robot">
      As the semester still remains, I told my HOD that I would do another mini project with team I choose. I wanted to do something cool in robotics, so I picked building a Hexapod robot that could be wirelessly controlled.
      the task was a bit daunting after working on it, as it required machine design much than coding. however we completed it, using forward kinematics, designed a three gait motion algorithm and the robot used raspberry pi and adafruit servo driver to manage the movement. used flask to create a webapp interface for the robot,
      through which it could be controlled via any computer or phone connecting to the same wireless network.
      </Step>
    
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Joined Chegg.com as freelance Expert Q&A answerer">
        I wanted to make myself useful and Chegg helped me in providing pocket money, in addition to that it made me realize different subjects in CS at different levels from highschool to graduate. It's also satisfying
        to help students across the world.  
      </Step>

      <Step title="Created College's student crediting system">
       I worked with our HOD to develop a student crediting system with both web and mobile interfaces. It's used by lecturers credit students by their hallway manners.  
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Joined Visvodaya Engineering College">
        I was hesitant to join Engineering as I was just average at my math that time ( got 89% in my 12th, 2 off 5 subjects we have per year is from math ). But my fascination with computers and deception
         that engineering doesn't have much math. pushed me in pursuing Computer science and engineering at Visvodaya engineering college, a local engineering college with reputation. 
      </Step>
    </ul>
    <Divider />
    <Year>1999</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>

      <Year>2021</Year>
      <ul>
      <Step title="Joined VMind Technologies Inc.">
      I realized I like learning theory, researching more than engineering. So I joined Vmind back as Research Engineer.
      </Step>
      </ul>
      <Divider/>
      <Year>2020</Year>
      <ul>
        <Step title="Interned at TCS innovation labs">
          I applied for an internship in DL and computer vision at TCS innovation lab, kolkata. I was fortunate to be accepted into it. I spent my last semester of college working in this internship.
          In this Internship,
           <ol>
           <li>I created a system of face recognition that has a client flutter app and server developed in flask, by using one-shot  learning  and  transfer  learning  of  facenet  weights  on  inception-resnet
          V1  using  keras  with  augmentation techniques to recognise profiles too with good accuracy.</li>
          <li>I assisted on a project of gap detection between products in retail racks by applying mask-rcnn with tensorflow.</li>
          </ol>
          Lab's owner got impressed with me and offered to map me to the lab after I join TCS.
        </Step>

        <Step title="Interned at Vmind technologies Inc.">
          This was where I understood, how much I didn't know in theory and how I only abstractly understood ML. In this Internship,
          <ol>
            <li>
            Researched literature regarding transformer architectures and Machine Learning Theory, experimented with BERT, GPT-2, XLM-RoBERTa.
            </li>
            <li>
            Developed various prototypes like a chrome extension for semantics search in a webpage using novel document embeddings from webpage with GPT-2,
            a web app wrapper to play with GPT-2 in an interactive environment to tweak different parameters for search decoding.
            </li>
          </ol>
        </Step>

        <Step title="Joined TCS as Systems Engineer">
          I joined as Systems Engineer at TCS, mapped to Innovation labs. Here,
          <ol>
          <li>
          I Worked in development and maintenance of a bill payments module backend services with tools like springboot, hibernate, postgresql, springbatch developed in a scalable microservices architecture in Azure Environment.
          </li>
          <li>
            I Worked in development of a retrieval-based chatbot using MXNet, that uses a novel LSTM architecture built ontop of BERT for classifying intent of the customer and send predetermined responses according to the intent.
          </li>
          </ol>
        </Step>
      </ul>
      <Divider />

      <Year>2019</Year>
    <ul>
      <Step title="Speedrunning DSA & Interview prep">
        I got into competitive coding, algorithm design which I neglected till then and prepped for the interviews.
      </Step>
      <Step title="Got my First Offer">
        I got my first offer from TCS for the digital profile through offline codevita competition. It was the highest package our college's student got till then. It secured me that I have a job after my graduation next year.
        It also gave me a much needed self-confidence boost. as my lecturer who was introducing us to codevita competition, told us getting digital is hard focus only on ninja ( second-level ).  
      </Step>
    </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
