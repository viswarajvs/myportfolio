import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { mydata } from "../../metadata/mydata"
import Reveal from "../../HOC/withReveal"

const YoutubeCard = ({
    children,
    url
}) => {
    const [title, setTitle] = useState('')
    const [viewCount, setViewCount] = useState('')
    const [publishedAt, setPublishedAt] = useState('')
    useEffect(() => {
        if (url) {
            getVideoDetails()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const getVideoDetails = async () => {
        const response = await fetchVideoDetails(url)
        const videoData = response.items?.[0]

        // Set the video details
        setTitle(videoData?.snippet?.title)
        setPublishedAt(calculateYearsAgo(videoData?.snippet?.publishedAt))
        setViewCount(videoData?.statistics?.viewCount)
    }

    const fetchVideoDetails = async (videoId) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos`,
                {
                    params: {
                        id: videoId,
                        key: mydata.personal.apiKey,
                        part: 'snippet,statistics',
                    },
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching YouTube video details:', error)
        }
    };
    const calculateYearsAgo = (date) => {
        const publishedDate = new moment(date)
        const yearsAgo = moment().diff(publishedDate, 'years')
        return yearsAgo
    }
    return (
        <>
            {
                title
                    ? <Reveal yHidden={75} className="ytcard hover-zoom-0">
                        {children}
                        < div className="ytdetails" >
                            <div className="ternary-font mainyt ellipsis-3">{title}</div>
                            <div className="flex space-between">
                                <p className="ternary-font">{viewCount} views</p>
                                <p className="ternary-font">{publishedAt} years ago</p>
                            </div>
                        </div >
                    </Reveal >
                    : null
            }
        </>
    )
}

export default YoutubeCard