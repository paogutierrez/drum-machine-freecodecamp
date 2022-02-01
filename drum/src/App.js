import React from 'react'
import DrumPad from './components/Caja';
import './components/styles/App.css'

const sounds =[
  {
    key:'Q',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key:'W',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key:'E',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key:'A',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key:'S',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key:'D',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key:'Z',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key:'X',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key:'C',
    mp3:'http://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
  
];


const App = () =>(
  <div id="display" className="display">
    <h1>Play a sound</h1>
    {sounds.map((sound, idx) => (
      <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
      ))}
     </div>
     
     );

 


export default App;

