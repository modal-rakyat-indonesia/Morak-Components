import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, url }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>
      {title}
    </title>
    <meta name="description" content={description} />
    <meta property="og:url" content={url} />
  </Helmet>
);

Meta.defaultProps = {
  title: 'Modal Rakyat Indonesia',
  description: 'Modal Rakyat Indonesia - Platform P2P Lending untuk pembiayaan modal & dana usaha yang cepat, ' +
  'mudah & tanpa jaminan dengan berbagai jenis pinjaman seperti invoice, usaha online & konvensional.',
  url: 'https://www.modalrakyat.id'
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

export default Meta;
