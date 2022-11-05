import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ErrorStyled>
        <div className="top">
          <h3>404 Error</h3>
          <h1>We can’t find that page</h1>
          <p>Sorry, the page you are looking for doesn't exist.</p>
        </div>

        <div className="btn-container">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
            Go back
          </button>

          <Link to="/">Take me home</Link>
        </div>
      </ErrorStyled>
      <Footer />
    </>
  );
};

export default ErrorPage;

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
  text-align: left;
  padding-top: 169px;
  gap: 48px;
  padding-bottom: 169px;

  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      /* Primary/600 */

      color: #1570ef;
    }

    h1 {
      ont-style: normal;
      font-weight: 600;
      font-size: 60px;
      line-height: 72px;
      /* identical to box height, or 120% */

      letter-spacing: -0.02em;

      /* Gray/900 */

      color: #101828;
    }
  }

  .btn-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    align-items: center;

    button,
    a {
      display: flex;
      align-items: center;
      gap: 12px;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      padding: 16px 28px;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }

    button {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      /* identical to box height, or 156% */

      /* Gray/700 */

      color: #344054;
      cursor: pointer;
      background: transparent;
      border: 1px solid #d0d5dd;

      &:hover {
        background: #f5f7fa;
      }
    }

    a {
      text-decoration: none;
      color: #344054;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      /* identical to box height, or 156% */

      /* Base/White */

      color: #ffffff;
      background-color: #1570ef;

      &:hover {
        background-color: #0e5ad8;
      }
    }
  }

  @media screen and (max-width: 459px) {
    .top {
      h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        /* or 122% */

        letter-spacing: -0.02em;

        /* Gray/900 */

        color: #101828;
      }
    }

    .btn-container {
     flex-direction: column;

      button,
      a {
        width: 100%;
        text-align: center;
      }

      button {
        align-items: center;
        background-color: red
        display: flex;
        align-items: center;
        justify-content: center;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        display: block; 
      }
      
  }

  @media screen and (max-width: 768px) {
    padding: 64px 16px;
    padding-bottom: 32px;
  }
`;
