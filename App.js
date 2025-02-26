import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    validatePhone(phone);
  }, [phone]);

  const validatePhone = (number) => {
    const phoneRegex = /^(0[3|5|7|8|9])([0-9]{8})$/; // Kiểm tra số điện thoại Việt Nam
    if (!number) {
      setError("");
    } else if (!phoneRegex.test(number)) {
      setError("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    if (!error && phone.length > 0) {
      alert("Số điện thoại hợp lệ, tiếp tục!");
      // Điều hướng sang màn hình tiếp theo tại đây
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>
        Nhập số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={[styles.button, error ? styles.buttonDisabled : null]}
        onPress={handleContinue}
        disabled={!!error}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  error: { color: "red", marginTop: 5 },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  buttonDisabled: { backgroundColor: "#ccc" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default LoginScreen;
