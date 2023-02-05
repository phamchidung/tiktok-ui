import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useVideoPlayer(videoRef) {
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
        const video = videoRef.current;
        if (playerState.isPlaying && video.paused) {
            video.play();
            return;
        }

        video.pause();
    }, [playerState.isPlaying, videoRef]);

    useEffect(() => {
        videoRef.current.muted = playerState.isMuted;
    }, [playerState.isMuted, videoRef]);

    return { playerState, playVideo, pauseVideo, muteVideo, unmuteVideo, toggleMuteVideo, togglePlayVideo };
}

useVideoPlayer.propTypes = {
    videoRef: PropTypes.node.isRequired,
};

export default useVideoPlayer;
