import { data } from "autoprefixer";
import React from "react";


const TwitchStreams = ({ streams }) => {
    return (
        // <div>
        //     {streams.map((stream, index) => (
        //         <StreamItem data={stream} key={index} />
        //     ))};
        // </div>

        <ul role="list" className="divide-y divide-teal-700">
            {streams.map((stream, index) => (
                <li key={index} className="flex justify-between gap-x-4 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={stream.channelIcon} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="font-semibold leading-6 text-gray-900">{stream.channelName}</p>
                            <p className="rounded full pt-1">{stream.gameName}</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="leading-6 text-gray-900">{stream.viewerCount} viewers</p>
                        <p className="mt-1 leading-5 text-gray-500">{stream.timeLive}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}


export default TwitchStreams;