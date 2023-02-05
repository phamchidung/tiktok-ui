import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';
import styles from './Share.module.scss';
import classNames from 'classnames/bind';
import SharePreview from './ShareContent';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ShareIconWrapper({ children, className }) {
    const [isTooltipHidden, setHidden] = useState(true);

    const renderAccountPreview = (props) => {
        return (
            <div tabIndex="-1" {...props} className={cx('tooltip')}>
                <PopperWrapper className={cx('popper-wrapper')}>
                    <SharePreview isTooltipHidden={isTooltipHidden} />
                    <div data-popper-arrow="" className={cx('tippy-arrow')} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('share-tippy-wrapper', className)}>
            <Tippy
                onMount={() => setHidden(false)}
                onHidden={() => setHidden(true)}
                popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
                interactive
                delay={[0, 500]}
                render={renderAccountPreview}
                placement="top"
                offset={[80, 15]}
                zIndex={9}
            >
                {children}
            </Tippy>
        </div>
    );
}

ShareIconWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShareIconWrapper;
