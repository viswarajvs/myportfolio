
import Reveal from '../../HOC/withReveal'
import './Home.scss'
import profilePic from '../../common/images/vprofile-pic.jpg'
import Image from '../../Components/Image/Image'
import verifiedIcon from '../../common/images/verifiedicon.svg'
import { mydata } from '../../metadata/mydata'
import Badge from '../../Components/Badge/Badge'
const Home = () => {
    return (
        <div className='homepage-container flex height-100 gap-2'>
            <div className="aboutme width-100 height-100 padding-1 flex flex-column align-left">
                <div className='width-100 flex flex-column align-center'>
                    <Reveal xHidden={-75} className='flex flex-column align-center'>
                        <Image src={profilePic} className='verifiedProfilePic' />
                        <section className='flex-column align-center'>
                            <div className='viswaname bold flex justify-center gap-2'>
                                <label>{mydata.profile.name}</label>
                                <Image src={verifiedIcon} className='verifiedIcon' />
                            </div>
                            <div className='flex ter-color font-1-2 gap-1'>
                                <Badge>ReactJS</Badge>
                                <Badge>TypeScript</Badge>
                                <Badge>Java Springboot</Badge>
                            </div>
                        </section>
                    </Reveal>
                    <Reveal yHidden={-75}>
                        <section>
                            <label className='text-center sec-color font-1-5'>{mydata.profile.bio}</label>
                        </section>
                    </Reveal>
                    {/* <div><label>Hey,</label></div>
                    <div className='viswaname bold'>
                        <Typewriter text={`I'm Viswaraj V S`} delay={200} />
                    </div>
                    <div>
                        <label>Frontend developer</label>
                    </div> */}
                </div>

            </div>
        </div >
    )
}

export default Home