import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomPagination from '../../components/customPagination';

class Pagination extends React.Component {
  componentWillMount() {
    this.setState({
      page1: 1,
      page2: 1
    });
  }

  onChangePage1 = (i) => {
    let { page1 } = this.state;

    if (i === 'next') {
      page1 += 1;
    } else if (i === 'prev') {
      page1 -= 1;
    } else if (i !== 'after' && i !== 'before') {
      console.warn(i);
      page1 = i;
    }
    this.setState({
      page1
    });
  }

  onChangePage2 = (i) => {
    let { page2 } = this.state;

    if (i === 'next') {
      page2 += 1;
    } else if (i === 'prev') {
      page2 -= 1;
    } else if (i !== 'after' && i !== 'before') {
      page2 = i;
    }
    this.setState({
      page2
    });
  }

  render() {
    const { page1, page2 } = this.state;
    return (
      <div>
        <h2>
      Pagination
        </h2>
        <p>This page contains Modal Rakyat standardized controls for pagination
         for mobile and web version.
        </p>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <div className="section-title">
              <p>
                <strong>Desktop version</strong><br />
                <small>Used when the screen width size is above 768px.</small>
              </p>
              <small>Try to navigate using page number or previous/next button.</small>
              <CustomPagination
                mobile={false}
                totalPage={20}
                currentPage={page1}
                maxPageSize={3}
                onPageChange={this.onChangePage1}
              />
              <small>Pagination that fits page size and total page (without navigation)</small>
              <CustomPagination
                mobile={false}
                totalPage={5}
                currentPage={page2}
                maxPageSize={5}
                onPageChange={this.onChangePage2}
              />
            </div>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6">
            <div className="section-title">
              <p>
                <strong>Mobile version</strong><br />
                <small>Used when the screen width size is less than 767px.</small>
              </p>
              <small>Try to navigate using previous/next button.
                 Page change will also reflect on the desktop version.
              </small>
              <CustomPagination
                mobile
                totalPage={20}
                currentPage={page1}
                maxPageSize={5}
                onPageChange={this.onChangePage1}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pagination;
