import PropTypes from 'prop-types';

function VideoControl({ controlRef, onMouseEnter, className, onClick, children }) {
    return (
        <div ref={controlRef} onMouseEnter={onMouseEnter} className={className} onClick={onClick}>
            {children}
        </div>
    );
}

VideoControl.propTypes = {
    controlRef: PropTypes.object.isRequired,
    onMouseEnter: PropTypes.func,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default VideoControl;
