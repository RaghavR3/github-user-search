import React from "react";

const Personal = (props) => {
  const userName = props.data[0];
  const user = props.data[1];
  const avatar = props.data[2];
  const joined = props.data[3];

  return (
    <div className="flex flex-row w-full">
      <div className="w-[10rem] md:w-[20rem]">
        <img src={avatar} alt="profile" className="w-5/6 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold dark:text-white">{userName}</h3>
        <p className="text-sm text-primary-blue pb-2">{user}</p>
        <h4 className="dark:text-white">Joined {joined}</h4>
      </div>
    </div>
  );
};

export default Personal;
