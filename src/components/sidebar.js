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
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-organization'
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
          name: 'Pagination',
          url: '/controls/pagination',
          icon: 'cui-bookmark'
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
          name: 'Accordion',
          url: '/components/accordion',
          icon: 'cui-action-undo'
        },
        {
          name: 'Nested Accordion',
          url: '/components/nested-accordion',
          icon: 'cui-action-undo'
        },
        {
          name: 'Button Group',
          url: '/components/button-group',
          icon: 'icon-check'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-map'
        },
        {
          name: 'Carousel',
          url: '/components/carousel',
          icon: 'icon-book-open'
        },
        {
          name: 'Media Object',
          url: '/components/media',
          icon: 'icon-picture'
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
        },
        {
          name: 'Progress Bar',
          url: '/components/progress-bar',
          icon: 'icon-arrow-right-circle'
        },
        {
          name: 'Tooltip',
          url: '/components/tooltip',
          icon: 'icon-drawer'
        },
        {
          name: 'Upload File',
          url: '/components/upload',
          icon: 'icon-cloud-upload'
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
        },
        {
          name: 'ZIP Downloader',
          url: '/helpers/zip-downloader',
          icon: 'icon-docs'
        }
      ]
    }
  ]
};

const Sidebar = () => (
  <AppSidebar fixed display="lg">
    <AppSidebarHeader />
    <AppSidebarForm />
    <AppSidebarNav navConfig={navigation} location={window.location} />
    <AppSidebarFooter />
    <AppSidebarMinimizer />
  </AppSidebar>
);

export default Sidebar;
