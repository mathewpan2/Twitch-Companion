import { data } from "autoprefixer";
import React from "react";
import { TwitchStreamItem } from "./TwitchStreamItem";
const TwitchStreams = ({ streams }) => {

    return (
        <div role="list" className="divide-y divide-gray-700">
            {streams.map((stream, index) => (
                <TwitchStreamItem stream={stream} key={index} />
            ))}
        </div>
    )
}


export default TwitchStreams;