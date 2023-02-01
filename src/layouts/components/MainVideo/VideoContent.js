import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, MuteIcon, PauseIcon, PlayIcon, ShareIcon, SoundIcon } from '~/components/Icons';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

// Pause other video when click on 1 video
function VideoContent({ data }) {
    const [isMute, setMute] = useState(true);
    const [isPlay, setPlay] = useState(true);
    const video = useRef();

    useEffect(() => {
        video.current.muted = isMute;
    }, [isMute]);

    useEffect(() => {
        if (isPlay) {
            video.current.play();
            return;
        }

        video.current.pause();
    }, [isPlay]);

    return (
        <div className={cx('video-content')}>
            <video ref={video} autoPlay loop muted className={cx('video')}>
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
                <div className={cx('action', 'share')}>
                    <div className={cx('icon-circle')}>
                        <ShareIcon className={cx('icon')} />
                    </div>
                    <strong className={cx('count', 'share-count')}>{data.share_count}</strong>
                </div>
            </div>

            <div className={cx('play-control')} onClick={() => setPlay(!isPlay)}>
                {isPlay ? <PauseIcon /> : <PlayIcon />}
            </div>

            <div className={cx('sound-control')} onClick={() => setMute(!isMute)}>
                {isMute ? <MuteIcon /> : <SoundIcon />}
            </div>
        </div>
    );
}

VideoContent.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoContent;
