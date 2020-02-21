import React from "react";
import {
  // 사용할 컴포넌트들
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window"); // 스크린 화면의 크기를 가져온다.

export default class App extends React.Component {
  state = {
    // 미리 id, pw를 정의해준다.
    id: "",
    pw: ""
  };
  render() {
    const { id, pw } = this.state;
    // const id = this.state.id;
    // const pw = this.state.pw;
    // return (
    <View style={styles.container}>
      <Image
        style={styles.loginLogo}
        source={require("./assets/img/logo_text.png")}
      ></Image>
      <TextInput
        style={styles.loginInput}
        value={this.state.id}
        name={this.state.id}
        placeholder="Phone number, username or email"
        onChangeText={text => this.setState({ id: text })}
      ></TextInput>
      <TextInput
        style={styles.loginInput}
        name={this.state.pw}
        value={this.state.pw}
        placeholder="Password"
        onChangeText={text => this.setState({ pw: text })}
      ></TextInput>
      <TouchableOpacity style={styles.left}>
        <Text style={styles.forget}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={id && pw ? styles.loginBtnTurn : styles.loginBtn}
      >
        <Text style={styles.loginBtnText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.orArea}>
        <Text style={styles.orLine}></Text>
        <Text style={styles.orText}>OR</Text>
        <Text style={styles.orLine}></Text>
      </View>
      <TouchableOpacity style={styles.FBbox}>
        <Image
          style={styles.FBlogo}
          source={require("./assets/img/Facebook.png")}
        ></Image>
        <Text style={styles.FBtext}>Login with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.lastBlock}>
        <Text style={styles.lastBlockLine}></Text>
        <View style={styles.signup}>
          <Text style={styles.signupAsk}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupBlue}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "flex-start",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginLogo: {
    marginTop: "29%",
    marginBottom: "9%",
    width: 170,
    height: 50
  },
  loginInput: {
    width: "90%",
    height: "6%",
    marginBottom: "2%",
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
    marginTop: "5%",
    marginBottom: "7%",
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
  loginBtnTurn: {
    backgroundColor: "#3897f0",
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
    marginTop: "4%",
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
    marginTop: "8%",
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
  lastBlock: { width: "100%", height: "30%", marginTop: "25%" },
  lastBlockLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgb(232,232,232)",
    marginBottom: "4%"
  },
  lastBlockText: {
    textAlign: "center",
    color: "rgb(152,152,152)"
  }
});
