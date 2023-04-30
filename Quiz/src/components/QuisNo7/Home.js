import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={{ marginHorizontal: "2%" }}>
				<Text style={{ fontSize: 40 }}>Home Page</Text>
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
						onPress={() => navigation.navigate("About Us")}
					>
						<Text style={{ color: "white" }}>About Us</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
