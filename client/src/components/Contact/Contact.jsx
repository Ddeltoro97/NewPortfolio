import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
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
  padding: 0px 0px 80px 0px;
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

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? 'linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)' : 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)')};
    background: ${({ disabled }) => (disabled ? 'linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)' : '-moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)')};
    background: ${({ disabled }) => (disabled ? 'linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)' : '-webkitlinear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)')};

  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;


export default function Contact(){

    const [t, i18n] = useTranslation("Contact");


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rq1ib4o', 'template_4b7l4cn', form.current, 'fZpQc9RAoWb4GA1p9')
          .then((result) => {
              // console.log(result.text);
          }, (error) => {
              // console.log(error.text);
          });
      };

      const [modal, setModal] = useState(false);

      const toggle = () =>{
        setModal(!modal);
    }

    
    const [validate, setValidate] = useState({
        name: "",
        email: "",
        message: "",
    });

    const changeName = (event) =>{
        setValidate({
            ...validate,
            name: event.target.value
        })
    }
    const changeMail = (event) =>{
        setValidate({
            ...validate,
            email: event.target.value
        })
    }
    
    const changeMessage = (event) =>{
        setValidate({
            ...validate,
            message: event.target.value
        })
    }

    return(
        <Container id="contact">
            <Wrapper>
                <Title>{t("Contact.title")}</Title>
                <Desc>{t("Contact.desc")}</Desc>
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <ContactTitle>{t("Contact.contact")}</ContactTitle>
                    <ContactInput placeholder={t("Contact.name")} type="text" name="user_name" value={validate.name} onChange={changeName}></ContactInput>
                    <ContactInput placeholder={t("Contact.email")} type="text" name="user_email" value={validate.email} onChange={changeMail}></ContactInput>
                    <ContactInputMessage rows="5"  name="message" value={validate.message} onChange={changeMessage}/>
                    <ContactButton onClick={toggle}  type="submit" disabled={!validate.name || !validate.email || !validate.message || validate.name.startsWith(' ') || validate.message.startsWith(' ') || validate.email.startsWith(' ') ||  validate.email.trim() === '' || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(validate.email)}>{t("Contact.button")}</ContactButton>
                </ContactForm>

                <Snackbar
                open={modal}
                autoHideDuration={6000}
                onClose={() => setModal(false)}
                message={t("Contact.success")}
                severity="success"/>
            </Wrapper>
        </Container>
    )

}