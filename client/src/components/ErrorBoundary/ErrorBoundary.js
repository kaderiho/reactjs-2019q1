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
        if (this.state.hasError) {
            return this.props.render(this.state.errorInfo, this.state.error);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;