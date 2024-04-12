import { Component, useContext } from "react";
import {FeatureFlagsContext} from "./context"
import "./style.css"

import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color-generator";
import Accordian from "../accordian";
import Tabs from "../custom-tabs/tabs";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },

    { key: "showTicTacToeBoard", component: <TicTacToe /> },

    { key: "showRandomColorGenerator", component: <RandomColor /> },

    { key: "showAccordian", component: <Accordian /> },

    { key: "showTabs", component: <TabTest /> },
  ];

  function CheckEnabledFlag(getCurrentKey) {
    console.log(typeof(enabledFlags))
    console.log(enabledFlags[getCurrentKey]);
    
    return enabledFlags[getCurrentKey];
  }

  
  if (loading) return <h1>Loading data ! Please wait</h1>

  return (
    <div className="containerr">
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) =>
         CheckEnabledFlag(item.key) ? item.component : null
      )}
    </div>
  );
}
