import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education} from '../../data/constantsEN';
import EducationCard from '../Cards/EducationCard';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    // @media (max-width: 660px) {
    //     align-items: end;
    // }
`;



export default function Education (){

    const [t, i18n] = useTranslation("Education");

    education[0] = {
        ...education[0],
        desc: t("Henry.description")
    }

    education[1] = {
        ...education[1],
        desc: t("Makigas.description")
    }

    education[2] = {
        ...education[2],
        desc: t("Bluuweb.description1")
    }

     education[3] = {
        ...education[3],
        desc: t("Bluuweb.description2")
    }

     education[4] = {
        ...education[4],
        desc: t("Udemy.description")
        
    }
    education[5] = {
        ...education[5],
        date: t("Uac.dates"),
        desc: t("Uac.description")
    }

 

    return (
        <Container id="education">
            <Wrapper>
                <Title>{t("Education.title")}</Title>
                <Desc>
                    {t("Education.body")}
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                {/* <TimelineSeparator>
                                </TimelineSeparator> */}
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}