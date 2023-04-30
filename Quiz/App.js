import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuisRCC from "./src/components/QuisRCC";
import FriendLists from "./src/components/QuisNo5/view/FriendLists";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./src/components/QuisNo6/views/home/HomePage";
import FormLogin from "./src/components/QuisNo6/views/form/FormLogin";
import Home from "./src/components/QuisNo7/Home";
import AboutUsPage from "./src/components/QuisNo7/AboutUsPage";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home Page"
					component={Home}
					options={{ title: "Home" }}
				/>
				<Stack.Screen
					name="About Us"
					component={AboutUsPage}
					options={{ title: "About Us" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
