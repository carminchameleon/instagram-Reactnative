import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform, // 안드로이드 ios에 따라서 다른 효과값일때
  ScrollView
} from "react-native";
// 특정 컴포넌트르 불러오고 있음
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window"); // 전체 윈도우 ( 스크린 ) 의 크기를 얻어와서 지정.

export default class App extends React.Component {
  state = {
    newToDo: ""
  };
  render() {
    const { newToDo } = this.state; // value를 주어야 하므로
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Lauv To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            value={newToDo}
            onChangeText={this._controlNewToDo}
            placeholderTextColor={"rgb(220,196,53)"}
            returnKeyType={"done"} // 키보드 입력했을 때
            autoCorrect={false} //  자동 수정 막기
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = text => {
    //미리 설정해놓은 newToDo 값으로 설정해주는 함수
    this.setState({
      newToDo: text
    });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(38,13,242)",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      // iso와 안드로이드 선택해서 적용
      ios: {
        // iso일때 적용 되는 것
        shadowColor: "rgb(81,16,196)", // 그림자 색
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        // 안드로이드일대 적용 되는 것
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "rgb(81,16,196)",
    borderBottomWidth: 1, // 밑줄 선 얼마나 굵게 할지
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
