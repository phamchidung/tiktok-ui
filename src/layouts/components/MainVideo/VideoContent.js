import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';

const cx = classNames.bind(styles);

function VideoContent() {
    return <div className={cx('video-content')}></div>;
}

export default VideoContent;
