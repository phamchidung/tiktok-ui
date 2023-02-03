import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '../SuggestedAccounts';
import Discover from '../Discover';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" disableTippy={true} />
            <Discover
                texts={[
                    'suthatla',
                    'mackedoi',
                    'sansangthaydoi',
                    'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia',
                    'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
                    'Thiên Thần Tình Yêu - RICKY STAR',
                    '7749hieuung',
                    'genzlife',
                    'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
                    'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
                ]}
            />
            <Footer />
        </aside>
    );
}

export default SideBar;
