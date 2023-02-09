import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, MuteIcon, PauseIcon, PlayIcon, ShareIcon, SoundIcon } from '~/components/Icons';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { useVideoPlayer } from '~/hooks';
import { InView } from 'react-intersection-observer';
import ShareWrapper from '~/components/SharePreview';
import useModal from '~/hooks/useModal';
import Modal from 'react-modal';
import useVideoControlVisibility from '~/hooks/useVideoControlVisibility';
import VideoPlayer from './VideoPlayer';

Modal.setAppElement('#root');
const cx = classNames.bind(styles);

function VideoContent({ data, handleChangePlayingVideo, currentPlayingVideoId }) {
    const { isModalOpen, openModal, closeModal } = useModal();

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
                        onClick={() => openModal()}
                    />

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

                    <div
                        ref={playControlRef}
                        onMouseEnter={handleMouseEnterVideo}
                        className={cx('button-control', 'play-control')}
                        onClick={() => {
                            togglePlayVideo();
                            handleChangePlayingVideo(data.video_id);
                        }}
                    >
                        {playerState.isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </div>

                    <div
                        ref={soundControlRef}
                        onMouseEnter={handleMouseEnterVideo}
                        className={cx('button-control', 'sound-control')}
                        onClick={toggleMuteVideo}
                    >
                        {playerState.isMuted ? <MuteIcon /> : <SoundIcon />}
                    </div>
                </div>
            </InView>

            <Modal
                isOpen={isModalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className={cx('video-modal')}
            >
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

VideoContent.propTypes = {
    data: PropTypes.object.isRequired,
    handleChangePlayingVideo: PropTypes.func.isRequired,
    currentPlayingVideoId: PropTypes.number.isRequired,
};

export default VideoContent;
