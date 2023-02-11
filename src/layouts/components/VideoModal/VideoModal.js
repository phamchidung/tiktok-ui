import Modal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import { useStore } from '~/hooks';
import { setVideoModalOpen } from '~/store/actions';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { CloseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
Modal.setAppElement('#root');

function VideoModal() {
    const [state, dispatch] = useStore();
    const { videoModalData } = state;

    function handleCloseModal() {
        dispatch(setVideoModalOpen(false));
    }

    return (
        <Modal
            isOpen={videoModalData.isVideoModalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={handleCloseModal}
            className={cx('video-modal')}
        >
            <div onClick={handleCloseModal} className={cx('btn-close')}>
                <CloseIcon />
            </div>
            <div className={cx('video-content')}>
                <div style={{ backgroundImage: `url('${videoModalData.videoImg}` }} className={cx('video-bg')}></div>
                <VideoPlayer className={cx('video')} videoUrl={videoModalData.videoUrl} />
            </div>
            <div className={cx('video-info')}></div>
        </Modal>
    );
}

export default VideoModal;
