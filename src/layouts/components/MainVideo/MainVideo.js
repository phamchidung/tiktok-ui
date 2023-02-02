import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import VideoContent from './VideoContent';
import VideoInfo from './VideoInfo';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MainVideo({ data, handleChangePlayingVideo, currentPlayingVideoId }) {
    return (
        <div className={cx('wrapper')}>
            <VideoInfo
                data={{
                    full_name: data.full_name,
                    nickname: data.nickname,
                    title_video: data.title_video,
                    music_name: data.music_name,
                }}
            />
            <VideoContent
                data={{
                    video_id: data.video_id,
                    video_url: data.video_url,
                    like_count: data.like_count,
                    comment_count: data.comment_count,
                    share_count: data.share_count,
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
        </div>
    );
}

MainVideo.propTypes = {
    data: PropTypes.object.isRequired,
    handleChangePlayingVideo: PropTypes.func.isRequired,
    currentPlayingVideoId: PropTypes.number.isRequired,
};

export default MainVideo;
