import Typewriter from 'typewriter-effect';

const Typing = () => {
  return (
    <Typewriter
      options={{
        strings: ['Web Developer', 'Software Engineer', 'FrontEnd Developer', 'MERN Stack Developer'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteAll: 3000,

      }}
    />
  );
};

export default Typing;