import React from 'react';
import { useHistory } from 'react-router';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Info page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum ipsa
        et, soluta dolorum totam possimus velit reiciendis repellendus aliquam
        recusandae. Quae libero officiis, asperiores dolores voluptas obcaecati
        in veritatis?
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Go back to tasks
      </button>
    </>
  );
};

export default AboutPage;
