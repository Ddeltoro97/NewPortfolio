import styled from "styled-components";
import { skills } from "../../data/constantsEN";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const Title = styled.div`
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
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px){
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`
const List = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

export default function Skills() {
  const [t, i18n] = useTranslation("Skills");

  return (
    <Container id="skills">
      <Wrapper>
        <Title>{t("Skills.title")}</Title>
        <Desc>{t("Skills.body")}</Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <List>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </List>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}
