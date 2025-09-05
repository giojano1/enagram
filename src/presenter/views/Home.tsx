import React from "react";
import HomePageHeader from "../components/molecules/HomePage/Header";
import ActivePage from "../components/molecules/HomePage/ActivePage";
import InputArea from "../components/molecules/HomePage/InputArea";

export default function Home() {
  return (
    <div className="">
      <ActivePage />
      <HomePageHeader />
      <InputArea />
    </div>
  );
}
