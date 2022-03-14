import React from 'react';
import './styles/Caja.css'

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
    }

    componentDidMount(){
      this.audio.current.addEventListener('ended', (e) => {
        const parent = e.target.parentNode;    
      parent.classList.remove('active');
      });
    }


    playSound = () => {
      this.audio.current.play();

      const id = this.audio.current.id;
      
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`

    }

    
  render(){
    const{ text, audio } = this.props;
    return(
      <div className="drum-machine">
      <div className="drum-pad" onClick={this.playSound}  id={`drum-${text}`}>
      {text}
      <audio ref={this.audio} src={audio} className="clip" id={text}/>
      </div>
      </div>
    )
  }
  
};

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if(audio){
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active')

    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;
    audio.play();
  }
  }
 )

export default DrumPad;

