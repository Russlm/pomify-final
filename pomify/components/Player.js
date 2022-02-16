import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSpotify from "../hooks/useSpotify";
import useSongInfo from '../hooks/useSongInfo';


function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  // const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentlyPlayingTrack().then((data) => {
        console.log('Now playing: ', data.body?.item);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() & !currentTrackId) {
      fetchCurrentSong();
    }
  }, [currentTrackIdState, spotifyApi, session]);

  return (
    <div>
      {/* Left */}
      <div>
        <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt='' />
      </div>
    </div>
  )
}

export default Player;