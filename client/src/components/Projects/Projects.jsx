import styled from "styled-components";
import ProjectCards from "../Cards/ProjectCards";

import { projects } from "../../data/constantsEN";

import { useTranslation } from "react-i18next";

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
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
    margin-bottom: 40px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

// const ToggleButtonGroup = styled.div`
//     display: flex;
//     border: 1.5px solid ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.primary};
//     font-size: 16px;
//     border-radius: 12px;
//     font-weight: 500;
//     margin: 22px 0px;
//     @media (max-width: 768px) {
//         font-size: 12px;
//     }
// `

// const ToggleButton = styled.div`
//     padding: 8px 18px;
//     border-radius: 6px;
//     cursor: pointer;
//     ${({ active, theme }) =>
//         active && `
//     background: ${theme.primary + 20};
//     `
//     }
//     &:hover {
//         background: ${({ theme }) => theme.primary + 8};
//     }
//     @media (max-width: 768px) {
//         padding: 6px 8px;
//         border-radius: 4px;
//     }
// `
// const Divider = styled.div`
//     width: 1.5px;
//     background: ${({ theme }) => theme.primary};
// `

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;


export default function Projects({openModal,setOpenModal}){

    const [t, i18n] = useTranslation("Projects");

    projects[0] ={
        ...projects[0],
        description: t("Cero.description"),
        task1: t("Cero.task1"),
        task2: t("Cero.task2"),
        task3: t("Cero.task3")
        
    }

    projects[1] ={
        ...projects[1],
        description: (t("Drivers.description")),
        task1: t("Drivers.task1"),
        task2: t("Drivers.task2"),
        task3: t("Drivers.task3")
    }

    projects[2]={
        ...projects[2],
        description: (t("Expense.description")),
        task1: t("Expense.task1"),
        task2: t("Expense.task2"),
        task3: t("Expense.task3")
    }

    return(
        <Container id='projects'>
            <Wrapper>
                <Title>{t("Projects.title")}</Title>
                <Desc>
                    {t("Projects.body")}
                </Desc>
                <CardContainer>
                    {projects.map((project) =>(
                        <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}