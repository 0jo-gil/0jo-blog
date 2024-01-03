import Header from "components/Header/Header";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  children?: React.ReactNode;
}

const Layout = ({ title, description, url, image, children }: Props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;