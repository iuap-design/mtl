/**
 * @desc [Tab分页导航]
 */

import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { HomeTabScreens } from '../screens';
import { MyselfTabContainer } from '../containers/HomeTabContainers';

const HomeTabs = TabNavigator(
  {
    Workflow: {
      screen: HomeTabScreens.WorkflowTabScreen,
      path: 'workflow',
      navigationOptions: {
        title: '消息'
      }
    },
    CustomerMap: {
      screen: HomeTabScreens.CustomerMapTabScreen,
      path: 'customer_map',
      navigationOptions: {
        title: '工作圈'
      }
    },
    Notification: {
      screen: HomeTabScreens.NotificationTabScreen,
      path: 'notification',
      navigationOptions: {
        title: '工作台'
      }
    },
    OrgStructure: {
      screen: HomeTabScreens.OrgStructureTabScreen,
      path: 'notification',
      navigationOptions: {
        title: '通讯录'
      }
    },
    Myself: {
      screen: MyselfTabContainer,
      path: 'myself',
      navigationOptions: {
        title: '我'
      }
    },
  },
  // 控制 TabNav 组件的位置，动画，激活后的颜色等
  {
    tabBarPorion: "bottom",
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e14c46' : 'red',
      labelStyle: {
        fontSize: 12,
        paddingBottom: 6
      },
      style: {
        backgroundColor: '#daf2eb',
      }
    },
    swipeEnabled: true
  }
);

export default {
  name: 'Home Tabs',
  description: 'Tabs following platform conventions',
  headerMode: 'none',
  screen: HomeTabs
};
