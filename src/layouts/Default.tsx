import React from "react";

import { Header } from "features/Header";
import { Footer } from "features/Footer";

type DefalutLayoutProps = {
  children: React.ReactChild
};

export const DefalutLayout = ({ children } : DefalutLayoutProps) => {
  return (
    <>
      <Header/>
      <main>
        { children }
      </main>
      <Footer/>
      <div id="modal-root"></div>
    </>
  );
};
