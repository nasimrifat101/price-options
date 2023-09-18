/* eslint-disable react/prop-types */
import React from "react";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-green-300 rounded-lg px-6">
      <a href={"route.path"}>{route.name}</a>
    </li>
  );
};

export default Link;
