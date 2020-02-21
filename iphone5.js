import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
  ImageBackgroundComponent,
  TouchableWithoutFeedback,
  TouchableNativeFeedbackBase
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.loginLogo}
          source={require("./assets/img/logo_text.png")}
        ></Image>
        <TextInput
          style={styles.loginInput}
          placeholder="Phone number, username or email"
        ></TextInput>
        <TextInput style={styles.loginInput} placeholder="Password"></TextInput>
        <TouchableOpacity style={styles.left}>
          <Text style={styles.forget}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FBbox}>
          <Image
            style={styles.FBlogo}
            source={require("./assets/img/Facebook.png")}
          ></Image>
          <Text style={styles.FBtext}>Continue as Eunji Carmin Hwang</Text>
        </TouchableOpacity>
        <View style={styles.orArea}>
          <Text style={styles.orLine}></Text>
          <Text style={styles.orText}>OR</Text>
          <Text style={styles.orLine}></Text>
        </View>
        <View style={styles.signup}>
          <Text style={styles.signupAsk}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupBlue}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastBlock}>
          <Text style={styles.lastBlockLine}></Text>
          <Text style={styles.lastBlockText}>Instagram from Facebook</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  loginLogo: {
    marginTop: 100,
    marginBottom: 30,
    width: 170,
    height: 50
  },
  loginInput: {
    width: "90%",
    height: "7.5%",
    marginBottom: 4,
    borderRadius: 7,
    borderColor: "rgb(215,215,215)",
    borderWidth: 0.5,
    backgroundColor: "rgb(250, 250, 250)",
    color: "#262626",
    paddingLeft: 15
  },
  forget: {
    alignSelf: "flex-end",
    marginRight: "6%",
    marginTop: "2%",
    marginBottom: "3%",
    color: "#3897f0",
    fontSize: 12,
    fontWeight: "600"
  },
  loginBtn: {
    backgroundColor: "rgb(138,191,245)",
    height: "7.5%",
    width: "90%",
    borderRadius: 7,
    display: "flex",
    justifyContent: "center"
  },
  loginBtnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600"
  },
  FBbox: {
    width: "90%",
    height: "5.5%",
    marginTop: "6%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  left: {
    alignSelf: "flex-end"
  },
  FBlogo: {
    alignContent: "center",
    width: 16,
    height: 16
  },
  FBtext: {
    fontSize: 15,
    color: "#3897f0",
    fontWeight: "600",
    paddingLeft: "3.5%"
  },
  orArea: {
    width: "90%",
    height: "7%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  orLine: {
    width: "38%",
    height: 1,
    backgroundColor: "rgb(232,232,232)",
    marginTop: 7.5
  },
  orText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "rgb(152,152,152)"
  },
  signup: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 12
  },
  signupAsk: {
    color: "rgb(152,152,152)",
    marginRight: "2%"
  },
  signupBlue: {
    color: "#3897f0",
    fontWeight: "600"
  },
  lastBlock: { width: "100%", height: "30%", marginTop: "20%" },
  lastBlockLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgb(232,232,232)"
  },
  lastBlockText: {
    marginTop: "5%",
    textAlign: "center",
    color: "rgb(152,152,152)"
  }
});
