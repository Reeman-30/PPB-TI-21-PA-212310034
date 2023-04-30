import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserStoryItems = ({ value }) => {
	return (
		<View style={Styles.searchContainer}>
			<View style={Styles.searchAccount}>
				{value.gender === "M" ? (
					<Image
						source={require("../../../../../../assets/icon-man.png")}
						style={Styles.storyAva}
					/>
				) : (
					<Image
						source={require("../../../../../../assets/icon-woman.png")}
						style={Styles.storyAva}
					/>
				)}
				<View>
					<Text style={{ ...Styles.storyName, fontWeight: "bold" }}>
						{value.name}
					</Text>
					<Text style={Styles.storyName}>{value.fullname}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity activeOpacity={0.6} style={Styles.btnFollow}>
					<Text style={Styles.storyName}>Follow</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const Styles = StyleSheet.create({
	searchContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
	},

	searchAccount: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	storyAva: {
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: "#ffffff",
		marginRight: 15,
	},

	storyName: {
		fontSize: 16,
		color: "white",
		textAlign: "left",
	},

	btnFollow: {
		backgroundColor: "purple",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
	},
});

export default UserStoryItems;
