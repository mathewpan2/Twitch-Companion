import React, { useEffect, useState } from 'react';
import TwitchStreams from '../../components/twitchChannels/TwitchStreams'
import { getFollowedStreams, getUser } from '../../infrastructure/twitch/twitchService';
import '../../styles/styles.css'
import { removeTokenFromStorage } from '../../infrastructure/chrome/localStorage';
const mockData = [
  {
    channelIcon: 'https://picsum.photos/200/200?random',
    channelName: 'GamerGuy',
    viewerCount: 1000,
    timeLive: '2 hours ago',
  },
  {
    channelIcon: 'https://picsum.photos/200/200?random',
    channelName: 'Loser',
    viewerCount: 500,
    timeLive: '1 hour ago',
  },
  {
    channelIcon: 'https://picsum.photos/200/200?random',
    channelName: 'forsen',
    viewerCount: 2000,
    timeLive: '30 minutes ago',
  },
  // Add more entries as needed
];

const Popup = () => {
  const [streamData, setStreamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await getUser();
        console.log(userId)
        const data = await getFollowedStreams(userId);
        setStreamData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();  // Call the async function
  }, []);



  return (
    <div className="min-w-[300px] max-w-[600px] mx-auto p-2">
      <TwitchStreams streams={streamData} />
    </div>
  );
};

export default Popup;
