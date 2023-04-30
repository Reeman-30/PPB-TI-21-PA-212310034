import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBar = () => {
	return (
		<View style={Styles.searchBox}>
			<FontAwesome5 name={"search"} size={25} color={"grey"} />
			<TextInput style={Styles.searchInput} placeholder="Search" />
		</View>
	);
};

const Styles = StyleSheet.create({
	searchBox: {
		flexDirection: "row",
		padding: 10,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 10,
		backgroundColor: "#f0f0f0",
	},

	searchInput: {
		fontSize: 16,
		width: "90%",
		color: "black",
		marginLeft: 10,
	},
});

export default SearchBar;
