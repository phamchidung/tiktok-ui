import { CommentIcon, HeartIcon, ShareIcon } from '~/components/Icons';
import { ShareWrapper } from '~/components/SharePreview';
import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';
import ActionItem from './ActionItem';

const cx = classNames.bind(styles);
function VideoActions({ likeCount, commentCount, shareCount }) {
    return (
        <div className={cx('action-wrapper')}>
            <ActionItem count={likeCount}>
                <HeartIcon className={cx('icon')} />
            </ActionItem>

            <ActionItem count={commentCount}>
                <CommentIcon className={cx('icon')} />
            </ActionItem>

            <ActionItem count={shareCount} wrapper={ShareWrapper}>
                <ShareIcon className={cx('icon')} />
            </ActionItem>
        </div>
    );
}

VideoActions.propTypes = {
    likeCount: PropTypes.string.isRequired,
    commentCount: PropTypes.string.isRequired,
    shareCount: PropTypes.string.isRequired,
};

export default VideoActions;
