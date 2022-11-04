import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <ContactStyles>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="form-name">
            <div className="first-name">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="first-name"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="last-name">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="form-message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>

          {/* div for terms and condition */}
          <div className="form-terms">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              You agree to providing your data to {/*name*/} who may contact
              you.
            </label>
          </div>

          <button id="btn_submit" type="submit">
            Send message
          </button>
        </form>
      </ContactStyles>
      <Footer />
    </>
  );
}

const ContactStyles = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: left;
  margin-bottom: 188px;

  * {
    width: 100%;
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #101828;
    margin-bottom: 20px;
  }

  p {
    ont-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin-bottom: 48px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 24px;

    .form-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #344054;
      margin-bottom: 6px;
      display: block;
    }

    input,
    textarea {
      color: #101828;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      border: 1px solid #d0d5dd;
      border-radius: 8px;
      padding: 12px;
      outline: none;
      font-family: "Inter";
      font-style: normal;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

      &::placeholder {
        color: ##667085;
      }
    }

    .form-terms {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      flex-flow: row wrap;
      margin-bottom: 8px;

      label {
        font-size: 16px;
        line-height: 20px;
        display: block;
        color: #475467;
        margin-bottom: 0;
      }

      input {
        width: 20px;
        height: 20px;
      }

      * {
        width: auto;
      }
    }

    button {
      padding: 12px 20px;
      background: #1570ef;
      border: 1px solid #1570ef;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
