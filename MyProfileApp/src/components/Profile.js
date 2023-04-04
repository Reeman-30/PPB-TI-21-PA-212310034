import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class Profile extends Component {
	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<View style={Styles.profileImg}>
					<Image source={require("../../assets/profile/avatar/man-128.png")} />
				</View>
				<View style={Styles.profileDesc}>
					<Text style={{ fontSize: 26, fontWeight: "bold" }}>
						Raden Rayyan Pratama Rakhmadie
					</Text>
					<Text style={{ fontSize: 20, marginTop: 20 }}>
						S-1 Teknologi Informasi
					</Text>
					<Text style={{ marginTop: 100, fontSize: 18 }}>My Social Media:</Text>
				</View>
				<View style={Styles.sosmed}>
					<FontAwesome5
						name={"instagram"}
						size={40}
						color="black"
						style={{ marginRight: 20 }}
					/>
					<FontAwesome5
						name={"facebook"}
						size={40}
						color="black"
						style={{ marginRight: 20 }}
					/>
					<FontAwesome5 name={"youtube"} size={40} color="black" />
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "cyan",
		justifyContent: "center",
		marginTop: -100,
		alignItems: "center",
	},

	profileImg: {
		borderWidth: 3,
		borderColor: "white",
		borderRadius: 100,
		marginTop: 90,
	},

	profileDesc: {
		alignItems: "center",
		marginTop: 40,
	},

	sosmed: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default Profile;
