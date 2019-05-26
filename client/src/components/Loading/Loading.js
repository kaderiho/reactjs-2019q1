import React from 'react';

export default props => {
    const { retry, timedOut, pastDelay, error } = props;

    if (error) {
        // When the loader has errored
        return (
            <div>
                Error!{' '}
                <button onClick={retry} type="button">
                    Retry
                </button>
            </div>
        );
    }
    if (timedOut) {
        // When the loader has taken longer than the timeout
        return (
            <div>
                Taking a long time...{' '}
                <button onClick={retry} type="button">
                    Retry
                </button>
            </div>
        );
    }
    if (pastDelay) {
        // When the loader has taken longer than the delay
        return <div>Loading...</div>;
    }
    // When the loader has just started
    return null;
};
