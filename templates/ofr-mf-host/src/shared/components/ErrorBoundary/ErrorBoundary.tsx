import React from 'react';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = false;
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  render() {
    if (this.state) {
      return <h1 className={styles.centerContent}>Сервис не доступен. Попробуйте позже.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
