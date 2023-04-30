import React from "react";
import { SectionList, Text } from "react-native";
import UserStoryItems from "../view/widget/story/UserStoryItems";

const SectionListControl = ({ User }) => {
	const data = [
		{ title: "Suggested", data: User },
		{ title: "Followers", data: User },
	];

	return (
		<SectionList
			sections={data}
			renderItem={({ item }) => <UserStoryItems value={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={{ color: "white" }}>{title}</Text>
			)}
		/>
	);
};

export default SectionListControl;
