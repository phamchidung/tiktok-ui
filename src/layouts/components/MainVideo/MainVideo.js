import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import VideoInfo from './VideoInfo';

const cx = classNames.bind(styles);

function MainVideo() {
    return (
        <div className={cx('wrapper')}>
            <VideoInfo />
        </div>
    );
}

export default MainVideo;
