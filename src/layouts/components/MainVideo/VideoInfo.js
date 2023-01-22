import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import AccountPreviewWrapper from './AccountPreviewWrapper';

const cx = classNames.bind(styles);

function VideoInfo() {
    return (
        <>
            <div className={cx('video-info')}>
                <AccountPreviewWrapper>
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1673622000&x-signature=Pe7X7Jlkyln2bqLWC89dFQ8FG3g%3D"
                    />
                </AccountPreviewWrapper>

                <div className={cx('text-wrapper')}>
                    <AccountPreviewWrapper>
                        <div className={cx('name-info')}>
                            <p className={cx('nickname')}>
                                <strong>Chí Dũng</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>chidung</p>
                        </div>
                    </AccountPreviewWrapper>
                    <p className={cx('title-video')}>
                        Pháo hoa lên các vì sao Mọi điều ước đều thành hiện thực #fyp #foryou #fypシ #happynewyear
                    </p>
                </div>
            </div>

            <div className={cx('music-wrapper')}>
                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                <p className={cx('music-name')}>nhạc nền - Tùng Seven 1999</p>
            </div>
        </>
    );
}

export default VideoInfo;
