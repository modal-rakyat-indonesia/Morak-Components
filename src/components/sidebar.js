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
      icon: 'icon-question'
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
          url: '/controls/buttons',
          icon: 'cui-bolt'
        },
        {
          name: 'Radio Button',
          url: '/controls/radio-button',
          icon: 'cui-circle-check'
        },
        {
          name: 'Wizard Step',
          url: '/controls/wizard',
          icon: 'icon-magic-wand'
        }
      ]
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Button Group',
          url: '/components/button-group',
          icon: 'icon-check'
        },
        {
          name: 'Modal',
          url: '/components/modal',
          icon: 'icon-event'
        },
        {
          name: 'Heading',
          url: '/components/heading',
          icon: 'icon-graduation'
        },
        {
          name: 'Label',
          url: '/components/label',
          icon: 'icon-tag'
        }
      ]
    },
    {
      name: 'Helpers',
      url: '/helpers',
      icon: 'icon-pin',
      children: [
        {
          name: 'Text Formatter',
          url: '/helpers/text-formatter',
          icon: 'icon-note'
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
