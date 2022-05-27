import React from "react";
import { useState } from "react";

import Personal from "./personal";
import Stats from "./stats";
import Social from "./social";

const Profile = (props) => {
  const userName = props.data[0] === null ? "Not Available" : props.data[0];
  const user = props.data[1] === null ? "Not Available" : props.data[1];
  const joined = props.data[2] === null ? "Not Available" : props.data[2];
  const avatar = props.data[3] === null ? "Not Available" : props.data[3];
  const bio = props.data[4] === null ? "Not Available" : props.data[4];
  const repos = props.data[5] === null ? "Not Available" : props.data[5];
  const followers = props.data[6] === null ? "Not Available" : props.data[6];
  const following = props.data[7] === null ? "Not Available" : props.data[7];
  const location = props.data[8] === null ? "Not Available" : props.data[8];
  const blog = props.data[9] === null ? "Not Available" : props.data[9];
  const twitter = props.data[10] === null ? "Not Available" : props.data[10];
  const company = props.data[11] === null ? "Not Available" : props.data[11];

  return (
    <div className="flex flex-col justify-between rounded-lg mt-4 bg-white dark:bg-tertiary-blue-dark px-6 py-8 shadow-lg">
      <Personal data={[userName, user, avatar, joined]} />
      <p className="py-8 text-sm text-secondary-blue dark:text-white md:pl-[20rem] md:-mt-48">
        {bio}
      </p>
      <Stats data={[repos, followers, following]} />
      <Social data={[location, blog, twitter, company]} />
    </div>
  );
};

export default Profile;
