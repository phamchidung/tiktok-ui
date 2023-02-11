import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import AccountPreviewWrapper from './AccountPreviewWrapper';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function VideoInfo({ data }) {
    const nickNameElement = useRef();
    const BORDER_BOTTOM_TRANSPARENT = '2px solid transparent';
    const BORDER_BOTTOM_COLOR = '2px solid #161823';
    const MUSIC = 'nhạc nền - ';

    const setNickNameBorderBottom = (borderBottom) => {
        nickNameElement.current.style.borderBottom = borderBottom;
    };

    return (
        <>
            <div className={cx('video-info')}>
                <AccountPreviewWrapper
                    className={cx('avatar-wrapper')}
                    tippyOffset={{ top: 5, left: 125 }}
                    onMouseEnter={() => setNickNameBorderBottom(BORDER_BOTTOM_COLOR)}
                    onMouseLeave={() => setNickNameBorderBottom(BORDER_BOTTOM_TRANSPARENT)}
                >
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9dd55b9d7d8bc4cbdea926ab056a9b92.jpeg?x-expires=1676257200&x-signature=vIGrAWfAqnq4HfQrVe94RGTbOR8%3D"
                    />
                </AccountPreviewWrapper>

                <div className={cx('text-wrapper')}>
                    <AccountPreviewWrapper
                        tippyOffset={{ top: 45, left: 10 }}
                        onMouseEnter={() => setNickNameBorderBottom(BORDER_BOTTOM_COLOR)}
                        onMouseLeave={() => setNickNameBorderBottom(BORDER_BOTTOM_TRANSPARENT)}
                    >
                        <div className={cx('name-info')}>
                            <p ref={nickNameElement} className={cx('nickname')}>
                                <strong>{data.full_name}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>{data.nickname}</p>
                        </div>
                    </AccountPreviewWrapper>
                    <p className={cx('title-video')}>{data.title_video}</p>
                </div>
            </div>

            <div className={cx('music-wrapper')}>
                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                <p className={cx('music-name')}>{MUSIC + data.music_name}</p>
            </div>
        </>
    );
}

VideoInfo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoInfo;
