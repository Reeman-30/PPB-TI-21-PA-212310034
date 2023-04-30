import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";

class QuisRCC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Quis",
		};
	}

	render() {
		return (
			<SafeAreaView style={Styles.viewContainer}>
				<StatusBar hidden={true} />
				<Text style={Styles.text}>Sedang melaksanakan {this.state.text}</Text>

				<View style={Styles.formContainer}>
					<Text style={Styles.formHeader}>Input Text</Text>
					<TextInput
						placeholder="Input text disini"
						defaultValue={this.state.text}
						autoCapitalize="none"
						style={Styles.form}
						onChangeText={(value) => this.setState({ text: value })}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: -30,
	},

	text: {
		fontSize: 20,
		fontWeight: "bold",
	},

	formContainer: {
		marginVertical: 70,
	},

	formHeader: {
		fontSize: 18,
		marginBottom: 10,
	},

	form: {
		borderBottomWidth: 2,
		width: 300,
	},
});

export default QuisRCC;
