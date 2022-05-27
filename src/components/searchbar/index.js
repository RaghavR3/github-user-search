import React from "react";

const getUserInfo = async (
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
  setCompany
) => {
  const username = document.getElementById("search-input").value;
  const no_results = document.getElementById("no_results");

  no_results.classList.add("hidden");

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (data.message === "Not Found") {
    no_results.classList.remove("hidden");
    return;
  }

  setUsername(data.name);
  setUser(data.login);
  setJoined(data.created_at);
  setAvatar(data.avatar_url);
  setBio(data.bio);
  setRepos(data.public_repos);
  setFollowers(data.followers);
  setFollowing(data.following);
  setLocation(data.location);
  setBlog(data.blog);
  setTwitter(data.twitter_username);
  setCompany(data.company);

  return data;
};

const SearchBar = (props) => {
  const setUsername = props.functions[0];
  const setUser = props.functions[1];
  const setJoined = props.functions[2];
  const setAvatar = props.functions[3];
  const setBio = props.functions[4];
  const setRepos = props.functions[5];
  const setFollowers = props.functions[6];
  const setFollowing = props.functions[7];
  const setLocation = props.functions[8];
  const setBlog = props.functions[9];
  const setTwitter = props.functions[10];
  const setCompany = props.functions[11];

  return (
    <div className="flex flex-row justify-between items-center rounded-lg mt-9 bg-white dark:bg-tertiary-blue-dark px-3 py-2 shadow-lg">
      <div className="flex flex-row items-center">
        <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
            fill="#0079ff"
          />
        </svg>
        <input
          className="text-sm pl-2 text-secondary-blue focus:outline-none w-[210px] dark:bg-tertiary-blue-dark caret-primary-blue"
          placeholder="Search Github Username..."
          id="search-input"
        ></input>
      </div>
      <div className="flex flex-row items-center">
        <h3
          className="text-red-600 text-md font-bold pr-5 hidden"
          id="no_results"
        >
          No results
        </h3>
        <button
          className="p-2 bg-primary-blue text-white rounded-md text-sm"
          onClick={() => {
            getUserInfo(
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
              setCompany
            );
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
