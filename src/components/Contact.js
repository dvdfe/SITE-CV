import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé ! </p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log("resultat:", error);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer! </p>";
        }
      );
  };

  return (
    <div>
      <h2 className="title" id="contact">Contactez moi !</h2>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom ou entreprise</label>
          <input type="text" name="name" required autoComplete="off" />
          <label>Email</label>
          <input type="email" name="email" required autoComplete="off" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default Contact;
