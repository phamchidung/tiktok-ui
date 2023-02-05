import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, MuteIcon, PauseIcon, PlayIcon, ShareIcon, SoundIcon } from '~/components/Icons';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { useVideoPlayer } from '~/hooks';
import { InView } from 'react-intersection-observer';
import ShareWrapper from '~/components/SharePreview';

const cx = classNames.bind(styles);

function VideoContent({ data, handleChangePlayingVideo, currentPlayingVideoId }) {
    const soundControlElement = useRef();
    const [isSoundControlVisibility, setSoundControlVisibility] = useState(true);

    const videoRef = useRef();
    const { playerState, playVideo, pauseVideo, toggleMuteVideo, togglePlayVideo } = useVideoPlayer(videoRef);

    const handleMouseEnterVideo = () => setSoundControlVisibility(true);
    const handleMouseLeaveVideo = () => setSoundControlVisibility(playerState.isMuted);

    // control sound control visibility
    useEffect(() => {
        if (soundControlElement.current) {
            if (isSoundControlVisibility) {
                soundControlElement.current.style.opacity = 1;
                return;
            }
            soundControlElement.current.style.opacity = 0;
        }
    }, [isSoundControlVisibility]);

    // pause this video if it's not current playing video, otherwise play it
    useEffect(() => {
        if (data.video_id !== currentPlayingVideoId) {
            pauseVideo();
            return;
        }
        playVideo();

        // eslint-disable-next-line
    }, [currentPlayingVideoId, data.video_id]);

    return (
        <InView
            threshold={process.env.REACT_APP_VIDEO_THRESHOLD}
            onChange={(inView) => {
                if (inView) {
                    handleChangePlayingVideo(data.video_id);
                }
            }}
        >
            <div className={cx('video-content')}>
                <video
                    onMouseEnter={handleMouseEnterVideo}
                    onMouseLeave={handleMouseLeaveVideo}
                    ref={videoRef}
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

                    <ShareWrapper>
                        <div className={cx('action', 'share')}>
                            <div className={cx('icon-circle')}>
                                <ShareIcon className={cx('icon')} />
                            </div>
                            <strong className={cx('count', 'share-count')}>{data.share_count}</strong>
                        </div>
                    </ShareWrapper>
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
        </InView>
    );
}

VideoContent.propTypes = {
    data: PropTypes.object.isRequired,
    handleChangePlayingVideo: PropTypes.func.isRequired,
    currentPlayingVideoId: PropTypes.number.isRequired,
};

export default VideoContent;
