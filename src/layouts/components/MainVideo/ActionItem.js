import classNames from 'classnames/bind';
import styles from './MainVideo.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ActionItem({ children, wrapper, count }) {
    let Wrapper;
    if (wrapper) {
        Wrapper = wrapper;
    } else {
        Wrapper = 'div';
    }

    return (
        <Wrapper>
            <div className={cx('action')}>
                <div className={cx('icon-circle')}>{children}</div>
                <strong className={cx('count')}>{count}</strong>
            </div>
        </Wrapper>
    );
}

ActionItem.propTypes = {
    children: PropTypes.node.isRequired,
    count: PropTypes.string.isRequired,
    wrapper: PropTypes.func,
};

export default ActionItem;
