import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { mydata } from '../../metadata/mydata';
import ExperienceCard from '../../Pages/Experience/ExperienceCard';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            {mydata.experience.map(exp => {
                const Logo = exp.logo
                return (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                {exp.logo && <Logo className='expLogo' />}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <ExperienceCard data={exp} />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}

        </Timeline>
    );
}