import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorInfo: null,
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorInfo,
            error
        });
    }

    render() {
        const { hasError, errorInfo, error } = this.state;
        const { render, children } = this.props;

        if (hasError) {
            return render(errorInfo, error);
        }

        return children;
    }
}

export default ErrorBoundary;
