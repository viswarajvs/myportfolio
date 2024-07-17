
import Typewriter from '../../Components/TypeWriter/TypeWriter'
import './Home.scss'
const Home = () => {
    return (
        <div className='homepage-container flex height-100 gap-1'>
            <div className="aboutme width-50 padding-1"></div>
            <div className="aboutme width-50 height-100 padding-1 flex flex-column align-left">
                <div className='height-50'></div>
                <div>
                    <div><label>Hi,</label></div>
                    <div className='viswaname bold'>
                        <Typewriter text={`I'm Viswaraj V S`} delay={200} />
                    </div>
                    <div>
                        <label>Passionate Frontend developer</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home