import React, { Component } from "react";
import colors from "../styles/colors";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import RoundedButton from "../components/buttons/RoundedButton";
import NumButton from "../components/buttons/NumButton";
import CardSelect from "../components/CardSelect";

export default class InputNum extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      hotNum: 3,
      coldNum: 4,
      hardhot: 0,
      spark: 0
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { coldNum, hotNum } = this.state;
    this.props.navigation.navigate("imageoutput", {
      coldNum: coldNum,
      hotNum: hotNum
    });
  }

  render() {
    const { hotNum, coldNum, hardhot, spark } = this.state;

    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>カードを選択</Text>
        </View>

        
        <View style={styles.inputWrapper}>
          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.leftImageBox}>
                <Image
                  style={styles.leftImage}
                  source={require("../img/hot.png")}
                ></Image>
              </View>

              <CardSelect
                cardNum={this.state.hotNum}
                cardCategory={"アツイカード"}
              />
              </View>
          </View>

          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.leftImageBox}>
                <Image
                  style={styles.leftImage}
                  source={require("../img/cold.png")}
                ></Image>
              </View>

              <CardSelect
                cardNum={this.state.coldNum}
                cardCategory={"冷たいカード"}
              />
            </View>
          </View>

          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.leftImageBox}>
                <Image
                  style={styles.leftImage}
                  source={require("../img/hardhot.png")}
                ></Image>
              </View>

              <CardSelect
                cardNum={this.state.hardhot}
                cardCategory={"激アツカード"}
              />
            </View>
          </View>

          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <View style={styles.leftImageBox}>
                <Image
                  style={styles.leftImage}
                  source={require("../img/spark.png")}
                ></Image>
              </View>

              <CardSelect
                cardNum={this.state.spark}
                cardCategory={"シビれるカード"}
              />
            </View>
          </View>
        </View>

        <View style={styles.nextButton}>
          <RoundedButton
            text={"次へ"}
            textColor={colors.pink01}
            background={colors.white}
            handleButton={this.handleButton}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    padding: 20
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70
  },
  title: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold"
  },
  inputWrapper: {
    paddingTop: 50,
    paddingBottom: 70
  },
  inputBox: {
    flexDirection: "row",
    marginBottom: 60
  },
  inputBoxContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  leftImageBox: {
    flex: 1
  },
  leftImage: {
    width: 150,
    height: 230
  },

  rightTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  rightNumText: {
    textAlign: "center",
    fontSize: 50,
    color: colors.white
  },

  rightContainer: {
    flex: 1
  },
  rightTitleContainer: {
    borderColor: colors.white,
    borderBottomWidth: 1,
    padding: 10,
    margin: 10
  },
  rightNumContainer: {
    margin: 20
  },
  rightButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  minusButton: {
    marginRight: 40
  },
  nextButton: {
    marginBottom: 60
  }
});