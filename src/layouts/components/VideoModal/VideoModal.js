import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import { useStore, useVideoPlayer } from '~/hooks';
import { setVideoModalOpen } from '~/store/actions';
import { CloseIcon } from '~/components/Icons';
import { useRef } from 'react';
import { VideoPlayer } from '../VideoPlayer';
import { useOpacity } from '~/hooks';
import useDisplay from '~/hooks/useDisplay';

const cx = classNames.bind(styles);
Modal.setAppElement('#root');

function VideoModal() {
    const [state, dispatch] = useStore();
    const { videoModalData } = state;

    const controlContainerRef = useRef();
    const { setElementVisibility: setControlContainerVisibility } = useOpacity(controlContainerRef, false);
    const { setElementDisplay: setControlContainerDisplay } = useDisplay(controlContainerRef, false, 'flex');

    const videoRef = useRef();
    const { playerState, setProgress, getVideoDurationString, getVideoCurrentTimeString } = useVideoPlayer(videoRef);

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
    };

    const handleOnAfterClose = () => {
        setControlContainerDisplay(false);
    };

    return (
        <Modal
            isOpen={videoModalData.isVideoModalOpen}
            onAfterOpen={handleOnAfterOpen}
            onRequestClose={handleCloseModal}
            onAfterClose={handleOnAfterClose}
            className={cx('video-modal')}
        >
            <div onClick={handleCloseModal} className={cx('btn-close')}>
                <CloseIcon />
            </div>
            <div className={cx('video-content')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={{ backgroundImage: `url('${videoModalData.videoImg}` }} className={cx('video-bg')}></div>
                <VideoPlayer
                    className={cx('video')}
                    videoRef={videoRef}
                    onTimeUpdate={handleTimeUpdate}
                    videoUrl={videoModalData.videoUrl}
                />

                <div ref={controlContainerRef} className={cx('video-control-container')}>
                    <div className={cx('seek-bar-container')}>
                        <div className={cx('seek-bar-background')}>
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
            </div>
            <div className={cx('video-info')}></div>
        </Modal>
    );
}

export default VideoModal;
