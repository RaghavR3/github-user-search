import "./index.css";
import { useState } from "react";

import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Profile from "./components/profile";
import { useEffect } from "react";

function App() {
  const [userName, setUsername] = useState("The Octocat");
  const [user, setUser] = useState("octocat");
  const [joined, setJoined] = useState("2011-01-25T03:43:54Z");
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/583231?v=4"
  );
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
  );
  const [repos, setRepos] = useState(8);
  const [followers, setFollowers] = useState(3938);
  const [following, setFollowing] = useState(9);
  const [location, setLocation] = useState("San Francisco");
  const [blog, setBlog] = useState("https://github.blog");
  const [twitter, setTwitter] = useState(null);
  const [company, setCompany] = useState("GitHub");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="bg-quaternary-blue dark:bg-blue-darker w-[100vw] h-[100vh] px-6 py-8 lg:py-10 lg:px-40 ">
      <Header></Header>
      <SearchBar
        functions={[
          setUsername,
          setUser,
          setJoined,
          setAvatar,
          setBio,
          setRepos,
          setFollowers,
          setFollowing,
          setLocation,
          setBlog,
          setTwitter,
          setCompany,
        ]}
      ></SearchBar>
      <Profile
        data={[
          userName,
          user,
          joined,
          avatar,
          bio,
          repos,
          followers,
          following,
          location,
          blog,
          twitter,
          company,
        ]}
      ></Profile>
    </div>
  );
}

export default App;
