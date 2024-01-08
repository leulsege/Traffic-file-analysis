/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Display from "../components/Display";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Display />
    </div>
  );
}
