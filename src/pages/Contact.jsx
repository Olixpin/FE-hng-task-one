import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState(null);
  const [notValid, setNotValid] = useState(false);

  const { firstname, lastname, email, message, terms } = formData;

  const name = firstname + " " + lastname;

  const validEmailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  const handleChange = (e) => {
    if (e.target.name === "terms") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
      setErrors({
        ...errors,
        [e.target.name]: e.target.checked ? "" : "You must agree to terms",
      });
    } else if (e.target.name === "email") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({
        ...errors,
        [e.target.name]: validEmailRegex.test(e.target.value)
          ? ""
          : "Email is not valid!",
      });
    } else if (e.target.name === "message") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({
        ...errors,
        message:
          e.target.value.length <= 0
            ? "Message must be at least 10 characters long!"
            : ""
            ? "Message is too short!"
            : "",
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({
        ...errors,
        [e.target.name]:
          e.target.value.length <= 0 ? "This field is required!" : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateForm(errors) ||
      firstname.length <= 0 ||
      lastname.length <= 0 ||
      email.length <= 0 ||
      message.length <= 0 ||
      !terms
    ) {
      console.log("Invalid Form");
      setNotValid(true);
    } else {
      console.log("Valid Form");
      setNotValid(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        terms: false,
      });

      // remove checked from checkbox
      document.getElementById("terms").checked = false;
    }
  };

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
                name="firstname"
                id="first_name"
                placeholder="Enter your first name"
                value={firstname}
                onChange={handleChange}
              />
              <span>This is a hint text to help user.</span>
            </div>
            <div className="last-name">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="lastname"
                id="last_name"
                placeholder="Enter your last name"
                value={lastname}
                onChange={handleChange}
                required={true}
              />
              <span>This is a hint text to help user.</span>
            </div>
          </div>

          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={handleChange}
              required={true}
            />
            <span>This is a hint text to help user.</span>
          </div>

          <div className="form-message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={message}
              onChange={handleChange}
              required={true}
              className={notValid && message.length <= 0 ? "error" : "valid"}
            />

            {notValid && message.length <= 0 && (
              <span className="error-message">Please enter message</span>
            )}
          </div>

          {/* div for terms and condition */}
          <div className="form-terms">
            <label htmlFor="terms">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={handleChange}
                required={true}
              />
              <span className="checkmark"></span>
              You agree to providing your data to {/*name*/} who may contact
              you.
            </label>
          </div>

          <button
            id="btn_submit"
            type="submit"
            onClick={handleSubmit}
            disabled={!terms}
          >
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

    span {
      font-style: normal;
      display: block;
      margin-top: 6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      /* Gray/600 */

      color: #475467;
    }

    .error-message {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #f83f23;
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

      &:focus {
        border: 1px solid #84caff;
      }
    }

    textarea:focus {
      border: 1px solid #84caff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    }

    .error {
      border: 1px solid #f89687;

      &:focus {
        border: 1px solid #f89687;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ffd3cc;
        border-radius: 8px;
      }
    }

    .form-terms {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;

      label {
        font-size: 16px;
        line-height: 20px;
        display: block;
        padding-left: 35px;
        color: #475467;
        margin-bottom: 0;
        width: max-content;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: -5.8px;
          left: 0;
          height: 20px;
          width: 20px;
          border: 1px solid #d0d5dd;
          border-radius: 6px;
          background-color: #fff;
        }

        input:checked ~ .checkmark {
          border: 1px solid #1570ef;
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        input:checked ~ .checkmark:after {
          display: block;
        }

        .checkmark:after {
          left: 7px;
          top: 2.5px;
          width: 5px;
          height: 10px;
          border: solid #1570ef;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }

      * {
        width: auto;
      }
    }

    input[type="checkbox"] {
      border: 10px solid #84caff;
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
      transition: all 0.3s ease-in-out;
    }

    button:hover {
      background: ##175cd3;
      border: 1px solid #175cd3;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }

    button:focus {
      background: #1570ef;
      /* Primary/600 */

      border: 1px solid #1570ef;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
      border-radius: 8px;
    }

    button:disabled {
      background: #b2ddff;
      /* Primary/200 */

      border: 1px solid #b2ddff;
      /* Shadow/xs */

      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 64px;
  }

  @media (max-width: 480px) {
    margin-bottom: 64px;
    form {
      .form-name {
        flex-direction: column;
      }
    }
  }
`;
