import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import PropTypes from 'prop-types';
import styles from './MainVideo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountPreviewWrapper({ children }) {
    const renderAccountPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('tippy-wrapper')}>
            <Tippy interactive delay={[800, 0]} render={renderAccountPreview} placement="bottom" offset={[-20, 0]}>
                {children}
            </Tippy>
        </div>
    );
}

AccountPreviewWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountPreviewWrapper;
