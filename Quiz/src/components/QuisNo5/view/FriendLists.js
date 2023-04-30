import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import SearchBar from "./widget/SearchBar";
import ScrollViewControl from "../controller/ScrollViewControl";
import Users from "../model/IGData";
import FlatListControl from "../controller/FlatListControl";
import SectionListControl from "../controller/SectionListControl";

class FriendLists extends Component {
	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<StatusBar hidden={false} style="light" />
				<View style={Styles.header}>
					<SearchBar />
				</View>
				<View style={Styles.body}>
					<SectionListControl User={Users} />
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},

	header: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 15,
	},

	body: {
		flex: 10,
	},
});

export default FriendLists;
