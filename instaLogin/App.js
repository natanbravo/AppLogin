import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Cookie_400Regular } from "@expo-google-fonts/cookie";
import { Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState("true");

  let [fontsLoaded] = useFonts({
    Cookie_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Text style={styles.logo}>Instagram</Text>

          <TextInput
            placeholder="Celular, username ou  email"
            style={styles.input}
          ></TextInput>

          <View style={styles.input}>
            <TextInput
              placeholder="Sua senha"
              secureTextEntry={hidePass}
              style={styles.inputText}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            ></TextInput>

            <TouchableOpacity style={styles.inputIconView}>
              {hidePass ? (
                <FontAwesome5
                  name="eye"
                  size={22}
                  color="#9999"
                  onPress={() => setHidePass(!hidePass)}
                />
              ) : (
                <FontAwesome5
                  name="eye-slash"
                  size={22}
                  color="#9999"
                  onPress={() => setHidePass(!hidePass)}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText} pla>
                Esqueceu sua senha ?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facecookContainer}>
            <FontAwesome5
              name="facebook"
              size={35}
              color="#399fff"
              style={styles.facebookLogo}
            />
            <Text style={styles.facebookText}>Continue como natanbravooo</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.lineDivisor}></View>
            <Text style={{ marginHorizontal: "3%" }}>OU</Text>
            <View style={styles.lineDivisor}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta ?</Text>
            <TouchableOpacity>
              <Text style={styles.sigUp}> Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// Styling section starts //

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === "ios" ? "30%" : "15%",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Cookie_400Regular",
    fontSize: 65,

    color: "#000",
    overflow: "hidden",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efeded",
    width: "90%",
    height: "12%",
    marginBottom: "3%",
    top: "10%",
    paddingLeft: "3%",
    borderRadius: 5,
    zIndex: 1000,
    overflow: "hidden",
  },
  inputText: {
    width: "90%",
    height: 50,
  },

  inputIconView: {
    paddingRight: 10,
  },
  forgotContainer: {
    width: "85%",
    alignItems: "flex-end",
  },
  forgotText: {
    position: "relative",
    top: 50,
    paddingTop: 15,
    paddingBottom: 25,
    textAlign: "center",
    justifyContent: "flex-end",
    color: "#399fff",
  },
  loginButton: {
    backgroundColor: "#399fff",
    width: "90%",
    height: "10%",
    top: "10%",
    borderRadius: 5,
  },
  loginText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
    top: "30%",
    fontWeight: "500",
  },
  facecookContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: "110%",
  },
  facebookText: {
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "5%",
    color: "#399fff",
  },
  facebookLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-6%",
  },
  divisor: {
    position: "absolute",
    top: "125%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  lineDivisor: {
    width: "45%",
    height: 2,
    backgroundColor: "#efeded",
    borderRadius: 5,
  },

  signUpContainer: {
    flexDirection: "row",
    top: "55%",
  },
  signUpText: {
    color: "#c4c4c4",
  },
  sigUp: {
    color: "#399fff",
    fontWeight: "bold",
  },
});
// Styling section ends //

// cores do login

// azul = #399fff
// branco = #ffff
// cinza claro = #e0e0e0
// cinza medio = #c4c4c4
// cinza escuro = #979797
