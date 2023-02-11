import classNames from 'classnames/bind';
import { MuteIcon, PauseIcon, PlayIcon, SoundIcon } from '~/components/Icons';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useStore, useVideoPlayer } from '~/hooks';
import { InView } from 'react-intersection-observer';
import Modal from 'react-modal';
import useVideoControlVisibility from '~/hooks/useVideoControlVisibility';
import { VideoPlayer } from '../VideoPlayer';
import VideoControl from './VideoControl';
import VideoActions from './VideoActions';
import { VideoModal } from '../VideoModal';
import { setVideoModalData, setVideoModalOpen } from '~/store/actions';

Modal.setAppElement('#root');
const cx = classNames.bind(styles);

function VideoContent({ data, handleChangePlayingVideo, currentPlayingVideoId }) {
    const [, dispatch] = useStore();

    const soundControlRef = useRef();
    const { setControlVisibility: setSoundControlVisibility } = useVideoControlVisibility(soundControlRef, true);

    const playControlRef = useRef();
    const { setControlVisibility: setPlayControlVisibility } = useVideoControlVisibility(playControlRef, false);

    const videoRef = useRef();
    const { playerState, playVideo, pauseVideo, toggleMuteVideo, togglePlayVideo } = useVideoPlayer(videoRef);

    const handleMouseEnterVideo = () => {
        setSoundControlVisibility(true);
        setPlayControlVisibility(true);
    };

    const handleMouseLeaveVideo = () => {
        setSoundControlVisibility(playerState.isMuted);
        setPlayControlVisibility(false);
    };

    const handleVideoPlayerOnclick = () => {
        dispatch(setVideoModalOpen(true));
        dispatch(
            setVideoModalData({
                videoImg: data.video_img,
                videoId: data.video_id,
                videoUrl: data.video_url,
            }),
        );
    };

    // pause this video if it's not current playing video, otherwise play it
    useEffect(() => {
        if (data.video_id !== currentPlayingVideoId) {
            pauseVideo();
            return;
        }
        playVideo();

        // eslint-disable-next-line
    }, [currentPlayingVideoId]);

    return (
        <div>
            <InView
                threshold={process.env.REACT_APP_VIDEO_THRESHOLD}
                onChange={(inView) => {
                    if (inView) {
                        handleChangePlayingVideo(data.video_id);
                    }
                }}
            >
                <div className={cx('video-content')}>
                    <VideoPlayer
                        videoRef={videoRef}
                        videoUrl={data.video_url}
                        onMouseEnter={handleMouseEnterVideo}
                        onMouseLeave={handleMouseLeaveVideo}
                        onClick={handleVideoPlayerOnclick}
                        className={cx('video')}
                    />

                    <VideoActions
                        commentCount={data.comment_count}
                        likeCount={data.like_count}
                        shareCount={data.share_count}
                    />

                    <VideoControl
                        controlRef={playControlRef}
                        onMouseEnter={handleMouseEnterVideo}
                        className={cx('button-control', 'play-control')}
                        onClick={() => {
                            togglePlayVideo();
                            handleChangePlayingVideo(data.video_id);
                        }}
                    >
                        {playerState.isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </VideoControl>

                    <VideoControl
                        controlRef={soundControlRef}
                        onMouseEnter={handleMouseEnterVideo}
                        className={cx('button-control', 'sound-control')}
                        onClick={toggleMuteVideo}
                    >
                        {playerState.isMuted ? <MuteIcon /> : <SoundIcon />}
                    </VideoControl>
                </div>
            </InView>

            <VideoModal />
        </div>
    );
}

VideoContent.propTypes = {
    data: PropTypes.object.isRequired,
    handleChangePlayingVideo: PropTypes.func.isRequired,
    currentPlayingVideoId: PropTypes.number.isRequired,
};

export default VideoContent;
