import classNames from 'classnames/bind';
import Hashtag from '../Hashtag';
import styles from './Discover.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Discover({ texts }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Discover</p>
            {texts.map((text, index) => (
                <Hashtag key={index} text={text} />
            ))}
        </div>
    );
}

Discover.propTypes = {
    texts: PropTypes.array.isRequired,
};

export default Discover;
