import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useVideoPlayer(videoRef) {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        isMuted: true,
        progress: 0,
    });

    const setProgress = (value) => {
        setPlayerState({
            ...playerState,
            progress: value,
        });
    };

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

    const correctTimePrefix = (time) => (time < 10 ? '0' + time : time);

    const getStringTime = (time) => {
        const minutes = Math.round(time / 60);
        const seconds = time - minutes * 60;

        return `${correctTimePrefix(minutes)}:${correctTimePrefix(seconds)}`;
    };

    const getVideoDurationString = () => {
        if (!videoRef.current) {
            return;
        }

        const time = Math.round(videoRef.current.duration);
        return getStringTime(time);
    };

    const getVideoCurrentTimeString = () => {
        if (!videoRef.current) {
            return;
        }

        const time = Math.round(videoRef.current.currentTime);
        return getStringTime(time);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            if (playerState.isPlaying && video.paused) {
                video.play();
                return;
            }

            video.pause();
        }
    }, [playerState.isPlaying, videoRef]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = playerState.isMuted;
        }
    }, [playerState.isMuted, videoRef]);

    return {
        playerState,
        playVideo,
        pauseVideo,
        muteVideo,
        unmuteVideo,
        toggleMuteVideo,
        togglePlayVideo,
        setProgress,
        getVideoDurationString,
        getVideoCurrentTimeString,
    };
}

useVideoPlayer.propTypes = {
    videoRef: PropTypes.node.isRequired,
};

export default useVideoPlayer;
