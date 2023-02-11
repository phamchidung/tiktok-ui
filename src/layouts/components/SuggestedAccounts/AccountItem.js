import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ disableTippy = false }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                disabled={disableTippy}
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9dd55b9d7d8bc4cbdea926ab056a9b92.jpeg?x-expires=1676257200&x-signature=vIGrAWfAqnq4HfQrVe94RGTbOR8%3D"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Chí Dũng</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>chidung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = { disableTippy: PropTypes.bool };

export default AccountItem;
