import { useEffect, useState } from "react"
import SeeAll from "../../Components/SeeAll/SeeAll"
import { mydata } from "../../metadata/mydata"
import './PersonalPage.scss'
import YoutubeCard from "./YoutubeCard"

const PersonalPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
    const [videoList, setVideoList] = useState(mydata.personal.youtube)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (isMobile) {
            setVideoList(videoList.slice(0,2))
        } else {
            setVideoList(mydata.personal.youtube)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile])
    return (
        <>
            <div className="margin-2 align-left">
                <div className="margin-2-0">
                    <div className="primary-font">Personal Music Covers</div>
                    <div className="ternary-font">A collection of my music covers and arrangements, featuring reinterpretations of popular and classic songs.</div>
                </div>
                <div className="flex flex-wrap gap-2 ytplayer">
                    {
                        videoList.map(video => (
                            <YoutubeCard url={video.id}><iframe src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></YoutubeCard>
                        ))
                    }
                </div>
                <SeeAll
                    text='See all'
                    link={mydata.personal.ytlink}
                />
            </div>

        </>
    )
}

export default PersonalPage