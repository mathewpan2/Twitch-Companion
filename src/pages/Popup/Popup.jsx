import React, { useEffect, useState } from 'react';
import TwitchStreams from '../../components/twitchChannels/TwitchStreams'
import { getFollowedStreams, getUser } from '../../infrastructure/twitch/twitchService';
import { fetchFollowedStreams } from '../../slices/twitchSlice';
import '../../styles/styles.css'
import { useDispatch, useSelector } from 'react-redux';


const Popup = () => {
  const dispatch = useDispatch();

  const streamData = useSelector((state) => state.twitch.liveStreams);
  const cursor = useSelector((state) => state.twitch.cursor);

  useEffect(() => {
    dispatch(fetchFollowedStreams(cursor));
  }, [cursor]);

  return (
    <div className="min-w-[300px] max-w-[600px] mx-auto p-2">
      <TwitchStreams streams={streamData} />
    </div>
  );
};

export default Popup;
