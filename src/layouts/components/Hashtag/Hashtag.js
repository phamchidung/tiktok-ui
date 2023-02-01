import classNames from 'classnames/bind';
import styles from './Hashtag.module.scss';
import PropTypes from 'prop-types';
import { TagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Hashtag({ musicIcon = false, text = '', className }) {
    const classes = cx('wrapper', {
        [className]: className,
        musicIcon,
    });

    const Icon = musicIcon ? MusicIcon : TagIcon;

    return (
        <div className={classes}>
            <Icon className={cx('icon')} />
            <p className={cx('text')}>{text}</p>
        </div>
    );
}

Hashtag.propTypes = {
    musicIcon: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default Hashtag;
