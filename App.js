import React, { Component } from "react";
import Home from "./src/screens/Home";
import ImageOutput from "./src/screens/ImageOutput";
import InputNum from "./src/screens/InputNum";
import BasicRule from "./src/screens/settings/BasicRule";
import CardCategory from "./src/screens/settings/CardCategory";
import OptionSetting from "./src/screens/settings/OptionSetting";
import Story from "./src/screens/settings/Story";
import NumButton from "./src/components/buttons/NumButton";
import CardSelect from "./src/components/CardSelect";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import colors from "./src/styles/colors";
import { View } from "react-native";

// const AppNavigator = createStackNavigator({
//   home: Home,
//   // inputnum: InputNum,
//   // imageoutput: ImageOutput,
//   // story: Story,
//   // basicrule: BasicRule,
//   // cardcategory: CardCategory,
//   // optionsetting: OptionSetting
// });
// export default createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotNum: 3,
      coldNum: 4,
      hardhot: 0,
      spark: 0
    };
  }
  render() {
    return (
      
      <CardSelect
        cardType={"hardHotCard"}
        cardName={"アツイカード"}
        cardNum={this.state.hotNum}
      />
      
      
    );
  }
}