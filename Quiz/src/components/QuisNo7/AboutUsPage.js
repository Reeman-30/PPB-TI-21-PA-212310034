import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const AboutUsPage = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={{ marginHorizontal: "2%" }}>
				<Text style={{ fontSize: 40 }}>About Us</Text>
				<View>
					<TouchableOpacity
						style={{
							backgroundColor: "purple",
							padding: 10,
							width: "50%",
							marginVertical: 20,
							borderRadius: 10,
							alignItems: "center",
						}}
						onPress={() => navigation.navigate("Home Page")}
					>
						<Text style={{ color: "white" }}>Home Page</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default AboutUsPage;
