/* eslint-disable react/prop-types */
import React from 'react';
import debounce from 'lodash/debounce';

export default (WrappedComponent, debounceMillis = 400) => {
  class WithDebounce extends React.PureComponent {
    state = {};

    static getDerivedStateFromProps(nextProps, prevState) {
      const nextState = {};
      if (nextProps.onChange !== prevState.onChange) {
        nextState.onChange = nextProps.onChange;
        nextState.onChangeDebounced = debounce(nextState.onChange, debounceMillis);
      }
      return nextState;
    }

    render() {
      const { forwardedRef, ...passThroughProps } = this.props;
      // const { onChangeDebounced } = this.state;
      const onChangePersistedDebounced = (event) => {
        const { onChangeDebounced } = this.state;
        // eslint-disable-next-line no-unused-expressions
        event.persist && event.persist();
        onChangeDebounced(event);
      };
      return (
        // eslint-disable-next-line max-len
        <WrappedComponent {...passThroughProps} ref={forwardedRef} onChange={onChangePersistedDebounced} />
      );
    }
  }

  return React.forwardRef((props, ref) => <WithDebounce {...props} forwardedRef={ref}/>);
};
