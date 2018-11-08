import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { connect } from 'react-redux';

import { loginWithSC2 } from '../../providers/steem/auth';
import { steemConnectOptions } from './config';

// Actions
import { addOtherAccount, updateCurrentAccount } from '../../redux/actions/accountAction';
import { login as loginAction, openPinCodeModal } from '../../redux/actions/applicationActions';

// Constants
import { default as ROUTES } from '../../constants/routeNames';

class SteemConnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onNavigationStateChange(event) {
    let accessToken;
    const { dispatch, setPinCodeState } = this.props;
    const { isLoading } = this.state;

    if (event.url.indexOf('?access_token=') > -1) {
      this.webview.stopLoading();
      try {
        accessToken = event.url.match(/\?(?:access_token)\=([\S\s]*?)\&/)[1];
      } catch (error) {
        // TODO: return
      }
      if (!isLoading) {
        this.setState({ isLoading: true });
        loginWithSC2(accessToken, 'pinCode')
          .then((result) => {
            if (result) {
              dispatch(updateCurrentAccount({ ...result }));
              dispatch(addOtherAccount({ username: result.name }));
              dispatch(loginAction());
              dispatch(openPinCodeModal());
              setPinCodeState({ accessToken, navigateTo: ROUTES.DRAWER.MAIN });
            } else {
              // TODO: Error alert (Toast Message)
            }
          })
          .catch((error) => {
            // TODO: return
          });
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: `${steemConnectOptions.base_url}?client_id=${
              steemConnectOptions.client_id
            }&redirect_uri=${encodeURIComponent(
              steemConnectOptions.redirect_uri,
            )}&${encodeURIComponent(steemConnectOptions.scope)}`,
          }}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          ref={(ref) => {
            this.webview = ref;
          }}
        />
      </View>
    );
  }
}

export default connect()(SteemConnect);