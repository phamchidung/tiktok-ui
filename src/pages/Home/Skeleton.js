import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Skeleton() {
    return (
        <div className={cx('skeleton-container')}>
            <div className={cx('skeleton-avatar')}></div>
            <div className={cx('skeleton-wrapper')}>
                <div className={cx('skeleton-content-container')}>
                    <div className={cx('skeleton-content', 'w-200')}></div>
                    <div className={cx('skeleton-content', 'w-160')}></div>
                </div>

                <div className={cx('skeleton-content', 'w-478')}></div>
                <div className={cx('skeleton-content', 'w-478')}></div>
            </div>
        </div>
    );
}

export default Skeleton;
