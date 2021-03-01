import React from 'react';
import Quiz from './components/QuizMain'
import ImgSlide from './imgSlide';
import './App.css';

function Quiz2() {
  return (
    <div style={{width:'100%'}}>
      <div className="App" style={{width:'50%', display: 'inline-block'}}>
      <Quiz />
        
      </div>

      <div style={{width:"50%", display: 'inline-block'}}>
        <ImgSlide />
      </div>
    </div>
  );
}

export default Quiz2;
