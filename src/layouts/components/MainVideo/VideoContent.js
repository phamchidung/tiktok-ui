import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, MuteIcon, PauseIcon, PlayIcon, ShareIcon, SoundIcon } from '~/components/Icons';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { useVideoPlayer } from '~/hooks';

const cx = classNames.bind(styles);

function VideoContent({ data, handleChangePlayingVideo, currentPlayingVideoId }) {
    const soundControlElement = useRef();
    const [isSoundControlVisibility, setSoundControlVisibility] = useState(true);

    const videoElement = useRef();
    const { playerState, playVideo, pauseVideo, toggleMuteVideo, togglePlayVideo } = useVideoPlayer(videoElement);

    const handleMouseEnterVideo = () => setSoundControlVisibility(true);
    const handleMouseLeaveVideo = () => setSoundControlVisibility(playerState.isMuted);

    useEffect(() => {
        if (soundControlElement.current) {
            if (isSoundControlVisibility) {
                soundControlElement.current.style.opacity = 1;
                return;
            }
            soundControlElement.current.style.opacity = 0;
        }
    }, [isSoundControlVisibility]);

    useEffect(() => {
        if (data.video_id !== currentPlayingVideoId) {
            pauseVideo(false);
            return;
        }
        playVideo(true);

        // eslint-disable-next-line
    }, [currentPlayingVideoId, data.video_id]);

    return (
        <div className={cx('video-content')}>
            <video
                onMouseEnter={handleMouseEnterVideo}
                onMouseLeave={handleMouseLeaveVideo}
                ref={videoElement}
                autoPlay
                loop
                muted
                className={cx('video')}
            >
                <source src={data.video_url} type="video/mp4" />
            </video>

            <div className={cx('action-item')}>
                <div className={cx('action', 'like')}>
                    <div className={cx('icon-circle')}>
                        <HeartIcon className={cx('icon')} />
                    </div>
                    <strong className={cx('count', 'like-count')}>{data.like_count}</strong>
                </div>
                <div className={cx('action', 'comment')}>
                    <div className={cx('icon-circle')}>
                        <CommentIcon className={cx('icon')} />
                    </div>
                    <strong className={cx('count', 'comment-count')}>{data.comment_count}</strong>
                </div>
                <div className={cx('action', 'share')}>
                    <div className={cx('icon-circle')}>
                        <ShareIcon className={cx('icon')} />
                    </div>
                    <strong className={cx('count', 'share-count')}>{data.share_count}</strong>
                </div>
            </div>

            <div onMouseEnter={handleMouseEnterVideo} className={cx('video-controls')}>
                <div
                    className={cx('play-control')}
                    onClick={() => {
                        togglePlayVideo();
                        handleChangePlayingVideo(data.video_id);
                    }}
                >
                    {playerState.isPlaying ? <PauseIcon /> : <PlayIcon />}
                </div>

                <div ref={soundControlElement} className={cx('sound-control')} onClick={toggleMuteVideo}>
                    {playerState.isMuted ? <MuteIcon /> : <SoundIcon />}
                </div>
            </div>
        </div>
    );
}

VideoContent.propTypes = {
    data: PropTypes.object.isRequired,
    handleChangePlayingVideo: PropTypes.func.isRequired,
    currentPlayingVideoId: PropTypes.number.isRequired,
};

export default VideoContent;
