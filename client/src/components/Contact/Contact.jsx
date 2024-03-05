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
  z-index: 2;
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
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background: ${({ disabled }) =>
    disabled
      ? "linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)"
      : "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"};
  background: ${({ disabled }) =>
    disabled
      ? "linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)"
      : "-moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"};
  background: ${({ disabled }) =>
    disabled
      ? "linear-gradient(90deg, rgba(78,80,78,1) 36%, rgba(86,89,86,1) 72%, rgba(70,71,70,1) 92%)"
      : "-webkitlinear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"};

  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const SuccessModal = styled.div`
  position: fixed;
  background: #191924;
  height: 150px;
  width: 340px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 10px;
  text-align: center;
  padding: 15px 35px;


`

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [modal, setModal] = useState(false);

  const [t, i18n] = useTranslation("Contact");

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = 'service_rq1ib4o';
    const templateId = 'template_4b7l4cn';
    const publicKey = 'fZpQc9RAoWb4GA1p9';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'David',
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      // console.log('Email sent', response);
      setName('');
      setEmail('');
      setMessage('');
      setModal(true);
    })
    .catch((error) => {
      // console.error('Error sending email: ', error);
    });
  };

  const closeModal = () =>{
    setModal(false);
  }


  return (
    <Container id="contact">
      <Wrapper>
        <Title>{t("Contact.title")}</Title>
        <Desc>{t("Contact.desc")}</Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactInput
            type="text"
            placeholder={t("Contact.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ContactInput
            type="text"
            placeholder={t("Contact.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ContactInputMessage
            // cols="30"
            rows="7"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <ContactButton disabled={!name || !email || !message || name.startsWith(' ') || message.startsWith(' ') || email.startsWith(' ') ||  email.trim() === '' || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)} type="submit">{t("Contact.button")}</ContactButton>
        </ContactForm>
        {modal && 
          <SuccessModal>
           <ContactTitle>{t("Contact.success")}</ContactTitle>
           <ContactButton onClick={closeModal}>OK</ContactButton>
          </SuccessModal>
        }
      </Wrapper>
    </Container>
  );
}
