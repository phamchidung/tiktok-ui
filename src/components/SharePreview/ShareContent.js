import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import ShareItem from './ShareItem';
import {
    CopyLinkIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    PinterestIcon,
    RedditIcon,
    SendToFriendIcon,
    ShareDownIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SharePreview({ isTooltipHidden }) {
    const [isShowMore, setShowMore] = useState(false);

    useEffect(() => {
        if (isTooltipHidden) {
            setShowMore(false);
        }
    }, [isTooltipHidden]);

    return (
        <div className={cx('share-preview')}>
            <ShareItem icon={<EmbedIcon />} label={'Embed'} />
            <ShareItem icon={<SendToFriendIcon />} label={'Send to friends'} />
            <ShareItem icon={<FacebookIcon />} label={'Share to Facebook'} />
            <ShareItem icon={<WhatsAppIcon />} label={'Share to WhatsApp'} />
            <ShareItem icon={<CopyLinkIcon />} label={'Copy link'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<TwitterIcon />} label={'Share to Twitter'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<LinkedInIcon />} label={'Share to LinkedIn'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<RedditIcon />} label={'Share to Reddit'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<TelegramIcon />} label={'Share to Telegram'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<EmailIcon />} label={'Share to Email'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<LineIcon />} label={'Share to Line'} />
            <ShareItem className={cx({ disable: !isShowMore })} icon={<PinterestIcon />} label={'Share to Pinterest'} />
            <div
                className={cx('share-down-icon', 'bg-hover', {
                    disable: isShowMore,
                })}
                onClick={() => setShowMore(true)}
            >
                <ShareDownIcon />
            </div>
        </div>
    );
}

SharePreview.propTypes = {
    isTooltipHidden: PropTypes.bool.isRequired,
};

export default SharePreview;
