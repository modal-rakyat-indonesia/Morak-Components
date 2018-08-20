import React from 'react';
import {
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react';

const navigation = {
  items: [
    {
      name: 'How To Use',
      url: '/how-to-use',
      icon: 'cui-home'
    },
    {
      name: 'Controls',
      url: '/controls',
      icon: 'icon-layers',
      children: [
        {
          name: 'Text Input',
          url: '/controls/input',
          icon: 'cui-pencil'
        },
        {
          name: 'Buttons',
          url: '/controls/button',
          icon: 'cui-bolt'
        }
      ]
    }
  ]
};

const Sidebar = () => (
  <AppSidebar fixed display="lg">
    <AppSidebarHeader />
    <AppSidebarForm />
    <AppSidebarNav navConfig={navigation} location={window.location} {...this.props} />
    <AppSidebarFooter />
    <AppSidebarMinimizer />
  </AppSidebar>
);

export default Sidebar;
