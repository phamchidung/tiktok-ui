import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import PropTypes from 'prop-types';
import styles from './MainVideo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountPreviewWrapper({ children, tippyOffset = { top: 0, left: 0 }, className, onMouseEnter, onMouseLeave }) {
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
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={cx('tippy-wrapper', className)}>
            <Tippy
                interactive
                delay={[800, 0]}
                render={renderAccountPreview}
                placement="bottom"
                offset={[tippyOffset.left, tippyOffset.top]}
            >
                {children}
            </Tippy>
        </div>
    );
}

AccountPreviewWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    tippyOffset: PropTypes.object,
};

export default AccountPreviewWrapper;
