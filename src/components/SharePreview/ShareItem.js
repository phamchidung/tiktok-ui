import classNames from 'classnames/bind';
import styles from './Share.module.scss';
const cx = classNames.bind(styles);

function ShareItem({ icon, label }) {
    return (
        <div className={cx('share-item', 'bg-hover')}>
            {icon}
            <p className={cx('label')}>{label}</p>
        </div>
    );
}

export default ShareItem;
