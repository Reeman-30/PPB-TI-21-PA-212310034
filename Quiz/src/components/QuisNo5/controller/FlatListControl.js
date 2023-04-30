import React from "react";
import { FlatList } from "react-native";
import UserStoryItems from "../view/widget/story/UserStoryItems";

const FlatListControl = ({ val }) => {
	return (
		<FlatList
			data={val}
			renderItem={({ item }) => <UserStoryItems value={item} />}
		/>
	);
};

export default FlatListControl;
