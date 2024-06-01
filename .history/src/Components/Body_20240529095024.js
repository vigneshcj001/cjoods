import { TypeAnimation } from "react-type-animation";
import BodyImg from '../../images/BodyImg.png'


const Body=()={
    return(
        <div className='body'>
          <div>
            <TypeAnimation
             className="animation-content"
             sequence={[
                'CJFoods are DELICIOUS',
            1000,
            'CJFoods are FAST',
            1000,
            'CJFoods are AFFORDABLE',
            1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
            
            />
          </div>
        </div>
    )
}