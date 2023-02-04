import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import ShareItem from './ShareItem';
import { CopyLinkIcon, EmbedIcon, FacebookIcon, SendToFriendIcon, ShareDownIcon, WhatsAppIcon } from '../Icons';

const cx = classNames.bind(styles);

function SharePreview() {
    return (
        <div className={cx('share-preview')}>
            <ShareItem icon={<EmbedIcon />} label={'Embed'} />
            <ShareItem icon={<SendToFriendIcon />} label={'Send to friends'} />
            <ShareItem icon={<FacebookIcon />} label={'Share to Facebook'} />
            <ShareItem icon={<WhatsAppIcon />} label={'Share to WhatsApp'} />
            <ShareItem icon={<CopyLinkIcon />} label={'Copy link'} />
            <ShareDownIcon className={cx('share-down-icon', 'bg-hover')} />
        </div>
    );
}

export default SharePreview;
