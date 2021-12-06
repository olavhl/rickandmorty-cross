import {Text} from "react-native";
import React from "react";
import {Episode} from "../../types/Props";

type Props = {
    episode: Episode;
}

export function EpisodeListItem({episode}: Props) {
    return <Text>{episode.name}</Text>;
}