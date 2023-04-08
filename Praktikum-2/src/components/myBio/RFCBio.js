import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const RFCBio = () => {
	return (
		<SafeAreaView style={Styles.container}>
			<View style={Styles.bio}>
				<Text style={Styles.textHeader}>(RFC) My Biodata:</Text>
				<Text>NPM : {MyBio.identity.NPM}</Text>
				<Text>FirstName : {MyBio.identity.FirstName}</Text>
				<Text>MiddleName : {MyBio.identity.MiddleName}</Text>
				<Text>LastName : {MyBio.identity.LastName}</Text>

				<Text>Educations :</Text>
				{MyBio.educations.map((value) => {
					return (
						<Text>
							{value.id}. {value.School}
						</Text>
					);
				})}

				<Text>Mobile Phone : {MyBio.mobile_phone}</Text>
				<Text>Email : {MyBio.email}</Text>

				{MyBio.gender === "M" ? (
					<Text>Gender: Male</Text>
				) : (
					<Text>Gender: Female</Text>
				)}

				<Text>Tall : {MyBio.tall_body} cm</Text>
				<Text>Weight : {MyBio.weight_body} kg</Text>
			</View>
		</SafeAreaView>
	);
};

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

const MyBio = {
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

export default RFCBio;
