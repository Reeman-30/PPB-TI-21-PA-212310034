import React from "react";
import { ScrollView } from "react-native";
import UserStoryItems from "../view/widget/story/UserStoryItems";

const ScrollViewControl = ({ Data }) => {
	return (
		<ScrollView>
			{Data.map((val, index) => (
				<UserStoryItems value={val} key={index} />
			))}
		</ScrollView>
	);
};

export default ScrollViewControl;
