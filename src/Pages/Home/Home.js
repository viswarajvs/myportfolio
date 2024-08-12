
import Reveal from '../../HOC/withReveal'
import './Home.scss'
import Image from '../../Components/Image/Image'
import verifiedIcon from '../../common/images/verifiedicon.svg'
import { mydata } from '../../metadata/mydata'
import Badge from '../../Components/Badge/Badge'
import ProfilePic from '../ProfilePic/ProfilePic'
import { Button } from 'react-bootstrap'
import PdfModal from '../../Components/PdfViewer/PdfViewer'
import resumeFIle from '../../common/files/resume.pdf'
import { useState } from 'react'
import ContactForm from '../ContactMe/ContactForm'
const Home = () => {
    const [showResume, setShowResume] = useState(false)
    return (
        <>
            <div className='homepage-container flex gap-2'>
                <div className="aboutme width-100 padding-1 flex flex-column align-left">
                    <div className='width-100 flex flex-column align-center'>
                        <Reveal xHidden={-75} className='flex flex-column align-center'>
                            <div className='profileHolder hover-zoom-0'>
                                <ProfilePic />
                            </div>
                            <section className='flex-column align-center'>
                                <div className='viswaname bold flex justify-center gap-2'>
                                    <div>{mydata.profile.name}</div>
                                    <div><Image src={verifiedIcon} className='verifiedIcon' /></div>
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
                        <Reveal yHidden={20} className='flex gap-2 margin-2'>
                            {/* <Button onClick={() => setShowResume(true)} className='primary-button hover-zoom-0'>Contact me</Button> */}
                            {/* <Button className='secondary-button hover-zoom-0'>Get in touch</Button> */}
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
            <ContactForm
                isOpen={showResume}
                onRequestClose={() => setShowResume(false)}
            />
            <PdfModal
                isOpen={false}
                title='My resume'
                pdfUrl={resumeFIle}
                onRequestClose={() => setShowResume(false)}
            />
        </>
    )
}

export default Home