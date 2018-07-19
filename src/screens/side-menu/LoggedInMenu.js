import React, { Component } from "react";
import { Image, AsyncStorage } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  View,
  Badge,
  Thumbnail
} from "native-base";
import styles from "./style";

import { getAccount } from '../../providers/steem/Dsteem'

const drawerCover = require("../../assets/drawer-cover.png");
const masterKeyMenuOptions = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Bookmarks",
    route: "bookmarks",
    icon: "bookmarks",
    bg: "#DA4437",
  },
  {
    name: "Drafts",
    route: "drafts",
    icon: "create",
    bg: "#DA4437",
  },
  {
    name: "Favorites",
    route: "favorites",
    icon: "heart",
    bg: "#DA4437",
  },
  {
    name: "Schedules",
    route: "schedules",
    icon: "time",
    bg: "#DA4437",
  },
  {
    name: "Transfer",
    route: "transfer",
    icon: "md-send",
    bg: "#DA4437",
  },
  {
    name: "Exchange",
    route: "exchange",
    icon: "repeat",
    bg: "#DA4437",
  },
  {
    name: "Marketplace",
    route: "marketplace",
    icon: "cube",
    bg: "#DA4437",
  },
  {
    name: "Settings",
    route: "settings",
    icon: "settings",
    bg: "#DA4437",
  },
  {
    name: "FAQ",
    route: "faq",
    icon: "ios-information-circle-outline",
    bg: "#DA4437",
  },
  {
    name: "About",
    route: "about",
    icon: "information-circle",
    bg: "#DA4437",
  },
];

const postingKeyMenuOptions = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Bookmarks",
    route: "bookmarks",
    icon: "bookmarks",
    bg: "#DA4437",
  },
  {
    name: "Drafts",
    route: "drafts",
    icon: "create",
    bg: "#DA4437",
  },
  {
    name: "Favorites",
    route: "favorites",
    icon: "heart",
    bg: "#DA4437",
  },
  {
    name: "Schedules",
    route: "schedules",
    icon: "time",
    bg: "#DA4437",
  },
  {
    name: "Marketplace",
    route: "marketplace",
    icon: "cube",
    bg: "#DA4437",
  },
  {
    name: "Settings",
    route: "settings",
    icon: "settings",
    bg: "#DA4437",
  },
  {
    name: "FAQ",
    route: "faq",
    icon: "ios-information-circle-outline",
    bg: "#DA4437",
  },
  {
    name: "About",
    route: "about",
    icon: "information-circle",
    bg: "#DA4437",
  },
];

export class LoggedInSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      user: [],
      loginType: ''
    };
  }

  async componentDidMount() {
    AsyncStorage.getItem('user').then((result) => {
      let res = JSON.parse(result);
      if (res.master_key) {
        this.setState({ loginType: 'master_key' });
      } else {
        this.setState({ loginType: 'posting_key' });
      }
      getAccount(res.username).then((result) => {
        this.setState({
          user: result[0],
          avatar:`https://steemitimages.com/u/${result[0].name}/avatar/small`
        })
      }).catch((err) => {
        
      });

    }).catch((err) => {
      
    });
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Thumbnail square style={styles.drawerImage} source={{uri: this.state.avatar}} />
          <View style={styles.info}>
            <Text style={styles.userLabel}>{ this.state.user.name }</Text>
          </View>
          <List
            dataArray={ this.state.loginType === 'master_key' ? masterKeyMenuOptions : postingKeyMenuOptions }
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}