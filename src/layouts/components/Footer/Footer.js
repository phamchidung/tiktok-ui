import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('links-wrapper')}>
                <Link to={'#'} className={cx('tiktok-link')}>
                    About
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Newsroom
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Contact
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Careers
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    ByteDancer
                </Link>
            </div>
            <div className={cx('links-wrapper')}>
                <Link to={'#'} className={cx('tiktok-link')}>
                    TikTok for Good
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Advertise
                </Link>

                <Link to={'#'} className={cx('tiktok-link')}>
                    Developers
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Transparency
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    TikTok Rewards
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    TikTok Browse
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    TikTok Embeds
                </Link>
            </div>
            <div className={cx('links-wrapper')}>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Help
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Safety
                </Link>

                <Link to={'#'} className={cx('tiktok-link')}>
                    Terms
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Privacy
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Creator Portal
                </Link>
                <Link to={'#'} className={cx('tiktok-link')}>
                    Community Guidelines
                </Link>
            </div>
            <span className={cx('copyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;
