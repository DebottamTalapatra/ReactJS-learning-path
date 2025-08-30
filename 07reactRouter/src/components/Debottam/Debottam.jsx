import React from "react";
import { useLoaderData } from "react-router-dom";

function Debottam() {
  const data = useLoaderData();
  return (
    <div>
      <img src={data.avatar_url} alt="picture" width={300}></img>
    </div>
  );
}

export default Debottam;

export const githubProfilePicLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/DebottamTalapatra"
  );
  return response.json();
};
