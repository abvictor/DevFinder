import React, { useState, useContext } from "react";
import type { NextPage } from "next";
import { MdSearch, MdLightMode, MdPlace, MdDomain } from "react-icons/md";
import { FaTwitter, FaLink, FaMoon } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import dev from "../public/dev.svg";
import { FullDesign } from "../styles/styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface Props {
  toggleTheme: () => void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [hasResult, setHasResult] = useState(true);
  const [username, setUsername] = useState("");

  const [user, setUser] = useState({
    name: "Dev's name",
    login: "devlogin",
    avatar_url: dev,
    created_at: "in",
    bio: "The dev's bio will be rendered here",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "Dev's location",
    twitter_username: "devstwitter",
    blog: "Dev's personal blog",
    company: "Dev's company",
  });

  async function handleSearch() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      setHasResult(false);
      return;
    }
    setHasResult(true);

    data.created_at = new Date(data.created_at).toLocaleDateString();

    setUser(data);
  }
  function handleChangeThemeName() {}

  return (
    <FullDesign>
      <div className="container">
        <Head>
          <title>devFinder</title>
          <meta name="description" content="Github devfinder" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="content">
          <header className="header">
            <div>
              <h1 className="app__title">devFinder</h1>
            </div>

            <div className="darklight__container">
              <Switch
                onChange={toggleTheme}
                onClick={() => handleChangeThemeName()}
                checked={title === "light"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor="#FFF"
                onColor="#000"
              />
              {title === "dark" ? <span>LIGHT</span> : <span>DARK</span>}
              <span></span>
              <span className="color-mode">
                {title === "dark" ? (
                  <span>
                    <MdLightMode size={24} />
                  </span>
                ) : (
                  <span>
                    <FaMoon />
                  </span>
                )}
              </span>
            </div>
          </header>

          <main className="main">
            <div className="input__container">
              <span className="search__icon">
                <MdSearch size={24} color="#027dff" />
              </span>
              <input
                placeholder="Search Github username..."
                className="input"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              ></input>
              {!hasResult && (
                <strong style={{ color: "#f6424c", width: "120px" }}>
                  No results
                </strong>
              )}
              <button className="search__button" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="profile__container">
              <div className="profile__image">
                <Image
                  src={user.avatar_url}
                  alt="seu nome"
                  width={500}
                  height={500}
                  className="profile__image"
                />
              </div>
              <div className="data__container">
                <div className="name__date__container">
                  <div className="profile__name__container">
                    <h1 className="dev__name">{user.name}</h1>
                    <p className="profile__name">@{user.login}</p>
                  </div>
                  <div>
                    <p>Joined {user.created_at}</p>
                  </div>
                </div>
                <div className="bio_div">
                  <p>{user.bio}</p>
                </div>
                <div className="profile__info__container">
                  <div>
                    <p>Repos</p>
                    <h1 className="title">{user.public_repos}</h1>
                  </div>
                  <div>
                    <p>Followers</p>
                    <h1 className="title">{user.followers}</h1>
                  </div>
                  <div>
                    <p>Following</p>
                    <h1 className="title">{user.following}</h1>
                  </div>
                </div>
                <div className="social__container">
                  <a>
                    <span>
                      <MdPlace size={20} />
                    </span>
                    <p>{user.location || "Not available"}</p>
                  </a>
                  <a href="#">
                    <span>
                      <FaTwitter size={20} />
                    </span>
                    <p>{user.twitter_username || "Not available"}</p>
                  </a>
                  <a>
                    <span>
                      <FaLink size={20} />
                    </span>
                    <p>{user.blog || "Not available"}</p>
                  </a>
                  <a>
                    <span>
                      <MdDomain size={20} />
                    </span>
                    <p>{user.company || "Not available"}</p>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </FullDesign>
  );
};

export default Home;
