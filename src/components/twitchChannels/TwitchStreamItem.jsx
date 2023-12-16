import React from "react";
import { useState, useEffect } from "react";
import getTimeElasped from "../helpers/getTimeElapsed";

export const TwitchStreamItem = ({ stream }) => {

    const [timeLive, setTimeLive] = useState('');

    useEffect(() => {
        setTimeLive(getTimeElasped(stream.timeLive));

        const elapsed = setInterval(() => {
            setTimeLive(getTimeElasped(stream.timeLive));
        }, 1000)
        return () => clearInterval(elapsed);

    }, [stream.timeLive])

    return (
        <div className="flex justify-between gap-x-4 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={stream.channelIcon} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="font-semibold leading-6 text-gray-900">{stream.channelName}</p>
                    <p className="rounded full pt-1">{stream.gameName}</p>
                </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="leading-6 text-gray-900">{stream.viewerCount} viewers</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    </div>
                    <p className="leading-5 text-gray-500">{timeLive}</p>
                </div>
            </div>
        </div>
    )
}