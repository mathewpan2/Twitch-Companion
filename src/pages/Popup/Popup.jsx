import React from 'react';
import TwitchStreams from '../../components/twitchChannels/TwitchStreams'
import '../../styles/styles.css'

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
  return (
    <div className="min-w-[300px] max-w-[600px] mx-auto p-2">
      <TwitchStreams streams={mockData} />
    </div>
  );
};

export default Popup;
