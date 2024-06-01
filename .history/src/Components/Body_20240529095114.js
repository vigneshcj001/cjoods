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
            <div className="body-para">
          Your one-stop destination for a culinary adventure! Order now and
          indulge in a world of flavors, delivered right to your doorstep.
        </div>
        <div className="btn">
          <button className="body-button" role="button">
            CJFoods
          </button>
        </div>
      </div>
      <div className="body-img-container">
        <img className="body-img" src={BodyImg} alt="BodyImg" />
      </div>
          </div>
        </div>
    )
}