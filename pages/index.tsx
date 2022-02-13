import type { NextPage } from "next";
import { MdSearch, MdLightMode, MdPlace, MdDomain } from "react-icons/md";
import { FaTwitter, FaLink } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import dev from "../public/dev.svg";

const Home: NextPage = () => {
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
    console.log(data);

    if (data.message === "Not Found") {
      setHasResult(false);
      return;
    }
    setHasResult(true);

    data.created_at = new Date(data.created_at).toLocaleDateString();

    setUser(data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>devFinder</title>
        <meta name="description" content="Github devfinder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.app__title}>devFinder</h1>
          </div>

          <div className={styles.darklight__container}>
            <span className={styles.darklight__title}>LIGHT</span>
            <span>
              <MdLightMode size={20} />
            </span>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.input__container}>
            <span className={styles.search__icon}>
              <MdSearch size={24} color="#027dff" />
            </span>
            <input
              placeholder="Search Github username..."
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
            {!hasResult && (
              <strong style={{ color: "#f6424c", width: "120px" }}>
                No results
              </strong>
            )}
            <button className={styles.search__button} onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className={styles.profile__container}>
            <div className={styles.profile__image}>
              <Image
                src={user.avatar_url}
                alt="seu nome"
                width={500}
                height={500}
                className={styles.profile__image}
              />
            </div>
            <div className={styles.data__container}>
              <div className={styles.name__date__container}>
                <div className={styles.profile__name__container}>
                  <h1 className={styles.dev__name}>{user.name}</h1>
                  <p className={styles.profile__name}>@{user.login}</p>
                </div>
                <div>
                  <p>Joined {user.created_at}</p>
                </div>
              </div>
              <div>
                <p>{user.bio}</p>
              </div>
              <div className={styles.profile__info__container}>
                <div>
                  <p>Repos</p>
                  <h1 className={styles.title}>{user.public_repos}</h1>
                </div>
                <div>
                  <p>Followers</p>
                  <h1 className={styles.title}>{user.followers}</h1>
                </div>
                <div>
                  <p>Following</p>
                  <h1 className={styles.title}>{user.following}</h1>
                </div>
              </div>
              <div className={styles.social__container}>
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
  );
};

export default Home;
