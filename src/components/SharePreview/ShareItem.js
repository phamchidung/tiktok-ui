import classNames from 'classnames/bind';
import styles from './Share.module.scss';
const cx = classNames.bind(styles);

function ShareItem({ icon, label, className }) {
    return (
        <div className={cx('share-item', 'bg-hover', className)}>
            {icon}
            <p className={cx('label')}>{label}</p>
        </div>
    );
}

export default ShareItem;
