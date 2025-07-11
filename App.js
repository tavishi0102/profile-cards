import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <ProfileCard
        name="Alex"
        role="Frontend Developer"
        image="https://i.pravatar.cc/100?img=1"
        description="Passionate about building user-friendly web apps."
      />
      <ProfileCard
        name="Rohan"
        role="UI/UX Designer"
        image="https://i.pravatar.cc/100?img=2"
        description="Designing clean, intuitive user experiences."
      />
      <ProfileCard
        name="Matt"
        role="Full Stack Dev"
        image="https://i.pravatar.cc/100?img=3"
        description="Loves working with React and Node.js."
      />
    </div>
  );
}

export default App;

