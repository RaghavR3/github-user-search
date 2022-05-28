import React, { useEffect } from "react";

const Personal = (props) => {
  const userName = props.data[0];
  const user = props.data[1];
  const avatar = props.data[2];
  const joined = props.data[3];

  useEffect(() => {
    document.getElementById("username").classList.remove("opacity-50");
    document.getElementById("user").classList.remove("opacity-50");
    document.getElementById("joined").classList.remove("opacity-50");

    if (userName === "Not Available") {
      document.getElementById("username").classList.add("opacity-50");
    }

    if (user === "Not Available") {
      document.getElementById("user").classList.add("opacity-50");
    }

    if (joined === "Not Available") {
      document.getElementById("joined").classList.add("opacity-50");
    }
  });

  return (
    <div className="flex flex-row w-full">
      <div className="w-[10rem] md:w-[20rem]">
        <img src={avatar} alt="profile" className="w-5/6 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold dark:text-white" id="username">
          {userName}
        </h3>
        <p className="text-sm text-primary-blue pb-2" id="user">
          @{user}
        </p>
        <h4 className="dark:text-white" id="joined">
          Joined {joined}
        </h4>
      </div>
    </div>
  );
};

export default Personal;
