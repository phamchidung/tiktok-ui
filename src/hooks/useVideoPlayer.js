import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useVideoPlayer(videoElement) {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        isMuted: true,
    });

    const playVideo = () => {
        setPlayerState({
            ...playerState,
            isPlaying: true,
        });
    };

    const pauseVideo = () => {
        setPlayerState({
            ...playerState,
            isPlaying: false,
        });
    };

    const muteVideo = () => {
        setPlayerState({
            ...playerState,
            isMuted: true,
        });
    };

    const unmuteVideo = () => {
        setPlayerState({
            ...playerState,
            isMuted: false,
        });
    };

    const toggleMuteVideo = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };
    const togglePlayVideo = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        if (playerState.isPlaying) {
            videoElement.current.play();
            return;
        }

        videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);

    useEffect(() => {
        videoElement.current.muted = playerState.isMuted;
    }, [playerState.isMuted, videoElement]);

    return { playerState, playVideo, pauseVideo, muteVideo, unmuteVideo, toggleMuteVideo, togglePlayVideo };
}

useVideoPlayer.propTypes = {
    videoElement: PropTypes.node.isRequired,
};

export default useVideoPlayer;
