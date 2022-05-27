import React from "react";

const Stats = (props) => {
  const repos = props.data[0];
  const followers = props.data[1];
  const following = props.data[2];

  return (
    <div className="flex flex-row w-full md:w-auto bg-quaternary-blue dark:bg-secondary-blue-dark p-5 rounded-lg justify-between md:ml-[20rem]">
      <div className="flex flex-col items-center">
        <p className="text-sm text-secondary-blue pb-2 dark:text-white">
          Repos
        </p>
        <p className="font-bold text-lg dark:text-white">{repos}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-secondary-blue pb-2 dark:text-white">
          Followers
        </p>
        <p className="font-bold text-lg dark:text-white">{followers}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-secondary-blue pb-2 dark:text-white">
          Following
        </p>
        <p className="font-bold text-lg dark:text-white">{following}</p>
      </div>
    </div>
  );
};

export default Stats;
