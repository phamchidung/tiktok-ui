import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function VideoPlayer({ videoRef, videoUrl, onMouseEnter, onMouseLeave, onClick }) {
    return (
        <video
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={videoRef}
            autoPlay
            loop
            muted
            className={cx('video')}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}

VideoPlayer.propTypes = {
    videoRef: PropTypes.object.isRequired,
    videoUrl: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
};

export default VideoPlayer;
