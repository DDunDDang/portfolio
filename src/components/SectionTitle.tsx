import React from "react";

import Divider from "./Divider";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <br />
      <br />
      <h2 className="font-semibold text-PRIMARY">{children} .</h2>
      <Divider />
    </>
  );
};

export default SectionTitle;
