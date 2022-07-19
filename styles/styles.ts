import styled from "styled-components";

export const FullDesign = styled.div`
  .container {
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.colors.background};
    transition: 1.5s;
    padding: 0 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;

    align-items: center;
    justify-content: center;

    padding: 200px 0;
  }

  .header {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
  }
  .darklight__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .color-mode {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input__container {
    display: flex;
    justify-content: space-between;
    padding: 7px;
    align-items: center;

    background-color: ${(props) => props.theme.colors.secondary};
    height: 60px;
    width: 100%;
    border-radius: 12px;
  }

  .search__icon {
    padding: 0px 15px;
  }

  .input {
    background-color: ${(props) => props.theme.colors.secondary};
    font-size: 18px;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.text};
    border: none;
    width: 100%;
    font-weight: 200;
    outline: none;
  }

  .input::placeholder {
    color: ${(props) => props.theme.colors.text};
  }

  .search__button {
    background-color: #027dff;
    height: 100%;

    width: 100%;
    max-width: 90px;

    border-radius: 12px;
    border: none;
    font-size: 14px;
    line-height: 12px;
    margin-left: 15px;
    font-weight: bold;
    color: white;

    opacity: 1;
    cursor: pointer;
    letter-spacing: 1px;
  }

  .search__button:hover {
    transition: 0.3s;
    opacity: 0.65;
  }
  .data__container {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-gap: 40px;
  }
  .name__date__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .profile__container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 12px;
    margin-top: 20px;
    padding: 40px;
  }

  .profile__name__container {
    display: flex;
    flex-direction: column;
  }

  .profile__image {
    display: flex;
    flex-direction: column;

    max-width: 125px;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile__name {
    color: #027dff;
    line-height: 26px;
  }

  .dev__name {
    display: flex;
    flex-direction: column;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
  }

  .profile__info__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    border-radius: 12px;

    background-color: ${(props) => props.theme.colors.primary};
  }

  .profile__info__container > div > h1 {
    font-size: 30px;
  }
  .app__title {
    font-size: 26px;
  }

  .social__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .social__container > a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .social__container > a > span {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    .profile__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .dev__name {
      font-size: 22px;
    }
  }
  @media (max-width: 420px) {
    .profile__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .dev__name {
      font-size: 20px;
    }

    .profile__info__container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    .name__date__container {
      margin-right: 12px;
      margin-left: 12px;
    }
  }
  @media (max-width: 390px) {
    .profile__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .dev__name {
      font-size: 18px;
    }

    .profile__info__container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    .data__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .name__date__container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 60px;
    }
    .bio_div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
    }
    .social__container {
      display: flex;
      flex-direction: column;
    }

    .social__container > a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .social__container > a > span {
      font-size: 16px;
    }
  }
`;
