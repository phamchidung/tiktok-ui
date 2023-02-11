import classNames from 'classnames/bind';
import styles from './VideoPlayer.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function VideoPlayer({ videoRef, videoUrl, onMouseEnter, onMouseLeave, onClick, className }) {
    return (
        <video
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={videoRef}
            autoPlay
            loop
            muted
            className={cx('video', className)}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}

VideoPlayer.propTypes = {
    videoRef: PropTypes.object,
    videoUrl: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default VideoPlayer;
