import Wave from '../images/wave.json';
import Lottie from 'react-lottie-player';

function Waves(){
    const obj = {
        'z-index':'-999',
        'height':'500px',
        'width':'50%'
    }
    return (
        <div className="wave">
        <Lottie
      loop
      animationData={Wave}
      play
      style={obj}
    />
        </div>
    )
}

export default Waves;