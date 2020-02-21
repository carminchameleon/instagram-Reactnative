import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isComplted: false
  };

  render() {
    const { isComplted, isEditing } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete}>
            <View
              style={[
                styles.circle, // 기본적인 circle
                isComplted ? styles.completedCircle : styles.uncompletedCircle
              ]}
              // 만약 현재 상태가 true 라면 완성된 상태이므로 완성 style 불러오고
              // 그렇지 않으면 uncompleted로 불러오기
            ></View>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              isComplted ? styles.completedText : styles.uncompletedText
            ]}
          >
            Crashhh React Native
          </Text>
        </View>

        {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._startEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
  // 완성 or 미완성 했을 때
  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isComplted: !prevState.isComplted // 기본 설정은 false 이걸 바꿔준다.
      };
    });
  };
  _startEditing = () => {
    this.setState({
      isEditing: true
    });
  };
  _finishEditing = () => {
    this.setState({
      isEditing: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "rgb(81,16,196)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },

  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },

  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through" // 다했을 때, 가운데 줄 만들어주는
  },
  uncompletedText: {
    color: "#353839"
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    justifyContent: "space-between"
  },
  actions: {
    flexDirection: "row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  }
});
