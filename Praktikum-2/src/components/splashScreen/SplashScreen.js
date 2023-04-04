import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

class SplashScreen extends Component {
	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<View>
					<Image
						source={require("../../../assets/img/ibik.png")}
						style={Styles.img}
					/>
				</View>
				<View>
					<Text style={Styles.loadingText}>Loading...</Text>
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "purple",
		justifyContent: "center",
		alignItems: "center",
	},

	img: {
		width: 128,
		height: 128,
	},

	loadingText: {
		fontSize: 20,
		color: "white",
	},
});

export default SplashScreen;
