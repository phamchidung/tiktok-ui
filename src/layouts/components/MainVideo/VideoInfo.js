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
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1673622000&x-signature=Pe7X7Jlkyln2bqLWC89dFQ8FG3g%3D"
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
