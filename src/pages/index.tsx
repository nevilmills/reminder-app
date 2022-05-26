import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { TodoCard } from "../components/TodoCard";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-[#f1f1f1] flex items-center justify-center">
      <TodoCard />
    </div>
  );
};

export default Home;
