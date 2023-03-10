import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import { useStore, useVideoPlayer } from '~/hooks';
import { setVideoModalOpen } from '~/store/actions';
import { ArrowDownIcon, CloseIcon, FlagIcon, MuteIcon, SoundIcon, TiktokIcon } from '~/components/Icons';
import { useRef } from 'react';
import { VideoPlayer } from '../VideoPlayer';
import { useOpacity } from '~/hooks';
import useDisplay from '~/hooks/useDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoControl from '../VideoControl';

const cx = classNames.bind(styles);
Modal.setAppElement('#root');

function VideoModal() {
    const soundControlRef = useRef();

    const [state, dispatch] = useStore();
    const { videoModalData } = state;

    const controlContainerRef = useRef();
    const { setElementVisibility: setControlContainerVisibility } = useOpacity(controlContainerRef, false);
    const { setElementDisplay: setControlContainerDisplay } = useDisplay(controlContainerRef, false, 'flex');

    const videoRef = useRef();
    const {
        playerState,
        setProgress,
        getVideoDurationString,
        getVideoCurrentTimeString,
        togglePlayVideo,
        getVideoDuration,
        pauseVideo,
        playVideo,
        toggleMuteVideo,
    } = useVideoPlayer(videoRef, true);

    const seekBarBackgroundRef = useRef();

    const handleTimeUpdate = (e) => {
        if (isNaN(e.target.duration))
            // duration is NotaNumber at Beginning.
            return;
        setProgress(e.target.currentTime / e.target.duration);
    };

    const handleCloseModal = () => {
        dispatch(setVideoModalOpen(false));
    };

    const handleMouseEnter = () => {
        setControlContainerVisibility(true);
    };

    const handleMouseLeave = () => {
        setControlContainerVisibility(false);
    };

    const handleOnAfterOpen = () => {
        setTimeout(() => {
            setControlContainerDisplay(true);
        }, 800);
        playVideo();
    };

    const handleOnAfterClose = () => {
        setControlContainerDisplay(false);
        pauseVideo();
    };

    const handleVideoContentClicked = () => {
        togglePlayVideo();
    };

    const handleSeekBarBackgroundClicked = (e) => {
        e.stopPropagation();
        const seekBarBackgroundPositionX = Math.floor(seekBarBackgroundRef.current.getBoundingClientRect().left);
        const clickedPositionX = e.clientX;
        const seekBarBackgroundWidth = seekBarBackgroundRef.current.offsetWidth;
        const videoTimePercent = (clickedPositionX - seekBarBackgroundPositionX) / seekBarBackgroundWidth;

        videoRef.current.currentTime = videoTimePercent * getVideoDuration();
    };

    const handleSoundControlClicked = (e) => {
        e.stopPropagation();
        toggleMuteVideo();
    };

    return (
        <Modal
            isOpen={videoModalData.isVideoModalOpen}
            onAfterOpen={handleOnAfterOpen}
            onRequestClose={handleCloseModal}
            onAfterClose={handleOnAfterClose}
            className={cx('video-modal')}
        >
            <div
                className={cx('video-content')}
                onClick={handleVideoContentClicked}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div onClick={handleCloseModal} className={cx('btn-close')}>
                    <CloseIcon />
                </div>

                <TiktokIcon className={cx('tiktok-icon')} />

                <div className={cx('report-text')}>
                    <FlagIcon />
                    B??o c??o
                </div>

                {videoModalData.isFirstVideo ? null : (
                    <div className={cx('video-switch', 'video-switch-up')}>
                        <ArrowDownIcon />
                    </div>
                )}

                <div className={cx('video-switch', 'video-switch-down')}>
                    <ArrowDownIcon />
                </div>

                <VideoControl
                    controlRef={soundControlRef}
                    className={cx('sound-control')}
                    onClick={handleSoundControlClicked}
                >
                    {playerState.isMuted ? <MuteIcon /> : <SoundIcon />}
                </VideoControl>

                <div style={{ backgroundImage: `url('${videoModalData.videoImg}` }} className={cx('video-bg')}></div>

                <VideoPlayer
                    className={cx('video')}
                    videoRef={videoRef}
                    onTimeUpdate={handleTimeUpdate}
                    videoUrl={videoModalData.videoUrl}
                />

                <div ref={controlContainerRef} className={cx('video-control-container')}>
                    <div className={cx('seek-bar-container')}>
                        <div
                            ref={seekBarBackgroundRef}
                            className={cx('seek-bar-background')}
                            onClick={handleSeekBarBackgroundClicked}
                        >
                            <div
                                className={cx('seek-bar-percent')}
                                style={{
                                    transform: `scaleX(${playerState.progress}) translateY(-50%)`,
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={cx('seek-bar-time')}>
                        {getVideoCurrentTimeString()}/{getVideoDurationString()}
                    </div>
                </div>

                {playerState.isPlaying ? null : <FontAwesomeIcon className={cx('play-btn')} icon={faPlay} />}
            </div>
            <div className={cx('video-info')}></div>
        </Modal>
    );
}

export default VideoModal;
