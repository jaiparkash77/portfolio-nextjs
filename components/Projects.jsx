import React from 'react';
import eCom from '../public/assets/projects/e-commerce-firebase.png';
import booking from '../public/assets/projects/booking-app-react.png'
import music from '../public/assets/projects/music-player-javascript.png'
import snake from '../public/assets/projects/snake-game-js.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-Commerce with Firebase'
            backgroundImg={eCom}
            projectUrl='/ecom'
            tech='React JS, Firebase'
          />
          <ProjectItem
            title='Booking App'
            backgroundImg={booking}
            projectUrl='/booking'
            tech='React JS, CSS'
          />
          <ProjectItem
            title='Music Player'
            backgroundImg={music}
            projectUrl='/music'
            tech='HTML, CSS, JavaScript'
          />
          <ProjectItem
            title='Snake Game'
            backgroundImg={snake}
            projectUrl='/snake'
            tech='HTML, CSS, JavaScript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
