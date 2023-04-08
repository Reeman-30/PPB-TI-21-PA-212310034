import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

class RCCBio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			identity: {
				NPM: 212310034,
				FirstName: "Rayyan",
				MiddleName: "Pratama",
				LastName: "Rakhmadie",
			},
			educations: [
				{ id: 1, School: "SD Negeri 9 Bogor" },
				{ id: 2, School: "SMP Negeri 5 Bogor" },
				{ id: 3, School: "SMK Negeri 3 Bogor" },
			],
			mobile_phone: "089622313886",
			email: "rayyanpratama30@gmail.com",
			gender: "M",
			tall_body: 173,
			weight_body: 58,
		};
	}

	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<View style={Styles.bio}>
					<Text style={Styles.textHeader}>(RCC) My Biodata:</Text>
					<Text>NPM : {this.state.identity.NPM}</Text>
					<Text>FirstName : {this.state.identity.FirstName}</Text>
					<Text>MiddleName : {this.state.identity.MiddleName}</Text>
					<Text>LastName : {this.state.identity.LastName}</Text>

					<Text>Educations :</Text>
					{this.state.educations.map((value) => {
						return (
							<Text>
								{value.id}. {value.School}
							</Text>
						);
					})}

					<Text>Mobile Phone : {this.state.mobile_phone}</Text>
					<Text>Email : {this.state.email}</Text>

					{this.state.gender === "M" ? (
						<Text>Gender: Male</Text>
					) : (
						<Text>Gender: Female</Text>
					)}

					<Text>Tall : {this.state.tall_body} cm</Text>
					<Text>Weight : {this.state.weight_body} kg</Text>
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	bio: {
		width: 250,
		borderWidth: 2,
	},

	textHeader: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 25,
	},
});

export default RCCBio;
