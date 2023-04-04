import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

class Bicycle extends Component {
	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<View style={Styles.header}>
					<Text style={Styles.textHeader}>History of Bicycle</Text>
				</View>
				<View style={Styles.description}>
					<Text style={Styles.textDesc}>
						A bicycle, also called a pedal cycle,
						<Text style={{ fontWeight: "bold" }}> bike</Text>
						<Text style={{ fontStyle: "italic" }}>, push-bike or cycle,</Text>
						is a human-powered or motor-powered assisted, pedal-driven,
						single-track vehicle, having two wheels attached to a frame, one
						behind the other. A bicycle rider is called a cyclist, or bicyclist.
					</Text>
				</View>
				<View style={{ borderWidth: 1 }}>
					<Image
						source={require("../../assets/img/man.png")}
						style={Styles.img}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	header: {
		backgroundColor: "red",
		width: 250,
	},

	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	textHeader: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 30,
		borderWidth: 1,
		textDecorationLine: "underline",
		color: "white",
	},

	description: {
		width: 250,
		borderWidth: 1,
		justifyContent: "center",
		textAlign: "center",
	},

	textDesc: {
		fontSize: 16,
		textAlign: "justify",
	},

	img: {
		width: 128,
		height: 128,
	},
});

export default Bicycle;
