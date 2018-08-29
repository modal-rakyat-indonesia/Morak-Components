import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/footer.scss';


class CustomFooter extends React.Component {
  componentWillMount() {
    this.setState({
      lastScrollTop: 0
    });
  }

  componentDidMount() {
    const el = document.getElementsByClassName('app-body')[0];
    el.addEventListener('scroll', () => {
      const st = document.getElementsByClassName('app-body')[0]
        .scrollTop || document.documentElement.scrollTop;
      if (st > this.state.lastScrollTop) {
        document.getElementById('footer-fixed').classList.remove('active');
      } else {
        document.getElementById('footer-fixed').classList.add('active');
      }
      this.setState({
        lastScrollTop: st <= 0 ? 0 : st
      });
    });
  }

  render() {
    const { menu } = this.props;
    return (
      <footer id="footer-fixed" className="footer fixed-footer active">
        <div className="container">
          <div className="footer-menu flex-center">
            {
            menu.map(value => (
              <div
                key={value.id}
                className={`footer-item${window.location.pathname === value.url ? ' active' : ''}`}
              >
                <img className="footer-menu-logo" src={value.src} alt={value.text} />
                <p>{value.text}</p>
              </div>
            ))
        }
          </div>
        </div>
      </footer>
    );
  }
}

CustomFooter.propTypes = {
  menu: PropTypes.array.isRequired
};

export default CustomFooter;
