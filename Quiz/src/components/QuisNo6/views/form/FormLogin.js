import React, { useState } from "react";
import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FormLogin = ({ navigation }) => {
	const [emailValid, setEmailValid] = useState("");
	const [passValid, setPassValid] = useState("");

	const [isOpenPass, setOpenPass] = useState(true);

	const EmailValidation = (val) => {
		if (val) {
			const emailRegex =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!emailRegex.test(val)) {
				setEmailValid("Invalid email address");
			} else {
				setEmailValid("");
			}
		} else {
			setEmailValid("This field is required");
		}
	};

	const PasswordValidation = (val) => {
		if (val) {
			let length = val.length;
			if (length < 6) {
				setPassValid("Your password is too short");
			} else {
				setPassValid("");
			}
		} else {
			setPassValid("This field is required");
		}
	};

	const HandlerOpenPassword = () => {
		if (!isOpenPass) {
			setOpenPass(true);
		} else {
			setOpenPass(false);
		}
	};

	return (
		<SafeAreaView style={Styles.container}>
			<View style={Styles.header}>
				<Image
					source={require("../../../../../assets/ibik-logo.png")}
					style={Styles.headerLogo}
				/>
			</View>

			<View style={Styles.body}>
				<View style={Styles.form}>
					<Text style={Styles.formMessage}>Welcome!</Text>

					<View style={Styles.formInput}>
						<Text style={Styles.formLabelText}>Email</Text>
						<TextInput
							placeholder="npm@student.ibik.ac.id"
							style={{
								...Styles.formInput,
								borderColor: "grey",
								borderWidth: 1,
								padding: 10,
								borderRadius: 9,
								color: "purple",
							}}
							keyboardType="email-address"
							autoCapitalize="none"
							onChangeText={(text) => EmailValidation(text)}
						/>
						<Text style={{ color: "red" }}>{emailValid}</Text>
					</View>

					<View style={Styles.formInput}>
						<Text style={Styles.formLabelText}>Password</Text>
						<View
							style={{
								...Styles.formInput,
								borderWidth: 1,
								flexDirection: "row",
								padding: 10,
								justifyContent: "space-between",
								borderRadius: 10,
								borderColor: "grey",
							}}
						>
							<TextInput
								secureTextEntry={isOpenPass}
								placeholder="Input your Password"
								style={{
									color: "purple",
								}}
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(text) => PasswordValidation(text)}
							/>
							<Pressable onPress={() => HandlerOpenPassword()}>
								<FontAwesome5
									name={isOpenPass ? "eye" : "eye-slash"}
									size={30}
									color={"purple"}
								/>
							</Pressable>
						</View>
						<Text style={{ color: "red" }}>{passValid}</Text>
					</View>

					<TouchableOpacity
						style={Styles.signInBtn}
						activeOpacity={0.5}
						onPress={() => navigation.navigate("Home Page")}
					>
						<Text style={Styles.signInText}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flex: 3,
		marginBottom: -20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	headerLogo: {
		width: 128,
		height: 128,
	},

	body: {
		flex: 7,
		marginTop: -30,
	},

	form: {
		marginHorizontal: 45,
		marginVertical: 45,
	},

	formMessage: {
		fontSize: 30,
		fontWeight: "bold",
	},

	formInput: {
		marginTop: 17,
	},

	formLabelText: {
		fontSize: 18,
		fontWeight: "bold",
	},

	signInBtn: {
		backgroundColor: "purple",
		paddingVertical: 15,
		paddingHorizontal: 10,
		alignItems: "center",
		borderRadius: 10,
		marginTop: 35,
	},

	signInText: {
		color: "white",
	},
});

export default FormLogin;
