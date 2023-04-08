import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bicycle from "./src/components/Bicycle";
import RCCBio from "./src/components/myBio/RCCBio";
import RFCBio from "./src/components/myBio/RFCBio";
import SplashScreen from "./src/components/splashScreen/SplashScreen";

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<Bicycle />
			{/* <SplashScreen /> */}
			{/* <RCCBio /> */}
			{/* <RFCBio /> */}
		</View>
	);
}
