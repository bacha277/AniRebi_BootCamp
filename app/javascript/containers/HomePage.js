import { Button, Carousel, Col, Icon, Layout, Row, List } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BGImage from '../assets/images/background_home.png';
import CardBox from '../components/CardBox/CardBox';
import CustomHorizontalList from '../components/CustomHorizontalList/CustomHorizontalList';
import CustomVerticalList from '../components/CustomVerticalList/CustomVerticalList';

const { Content } = Layout;

class HomePage extends Component {
  static propTypes = {
    topAnimeData: PropTypes.array.isRequired,
    genresListData: PropTypes.array.isRequired,
    genreTopData: PropTypes.object.isRequired,
    multipleGenreTopData: PropTypes.array.isRequired,
    recentlyReviewedAnimeData: PropTypes.array.isRequired,
    recentReviewsData: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.topAnimeRef = React.createRef();
    this.recentlyReviewedRef = React.createRef();
  }

  handleNextTopAnimeBtnClick = e => {
    this.topAnimeRef.current.next();
  };

  handlePrevTopAnimeBtnClick = e => {
    this.topAnimeRef.current.prev();
  };

  handleNextRecentlyReviewedAnimeBtnClick = e => {
    this.recentlyReviewedRef.current.next();
  };

  handlePrevRecentlyReviewedAnimeBtnClick = e => {
    this.recentlyReviewedRef.current.prev();
  };

  handleBannerError = e => {
    e.target.src =
      'https://gazettereview.com/wp-content/uploads/2018/06/1-2.jpg';
  };

  render() {
    const FilteredBannerData = this.props.topAnimeData.filter(
      item => item.banner != null
    );
    const BannerImages = FilteredBannerData.map(item => (
      <StyledImg
        key={item.id}
        src={item.banner}
        onError={this.handleBannerError}
      />
    ));

    const TopGenreCardBoxes = this.props.multipleGenreTopData.map(genre => (
      <div key={genre.id}>
        <CardBox
          key={genre.id}
          title={genre.name}
          content={<CustomHorizontalList dataSource={genre.animes} />}
        />
        &nbsp;
      </div>
    ));

    const SlicedTopAnimeData1 = this.props.topAnimeData.slice(0, 7);
    const SlicedTopAnimeData2 = this.props.topAnimeData.slice(7, 15);

    const SlicedRecentlyReviewedAnimeData1 = this.props.recentlyReviewedAnimeData.slice(
      0,
      7
    );
    const SlicedRecentlyReviewedAnimeData2 = this.props.recentlyReviewedAnimeData.slice(
      7,
      15
    );

    return (
      <StyledContent className="HomePageContent">
        <Row>
          <Carousel style={{ width: '100%' }} autoplay={true}>
            {BannerImages}
          </Carousel>
        </Row>
        &nbsp;
        <Content style={{ padding: '0px 100px 50px' }}>
          <CardBox
            title="Top Anime"
            content={
              <Row type="flex" justify="center" align="middle">
                <PrevCarouselNavButton
                  size="large"
                  type="default"
                  onClick={this.handlePrevTopAnimeBtnClick}
                >
                  <Icon
                    theme="filled"
                    type="caret-left"
                    style={{ fontSize: '22px' }}
                  />
                </PrevCarouselNavButton>
                <Col span={24}>
                  <Carousel ref={this.topAnimeRef} dots={false}>
                    <CustomHorizontalList dataSource={SlicedTopAnimeData1} />
                    <CustomHorizontalList dataSource={SlicedTopAnimeData2} />
                  </Carousel>
                </Col>
                <NextCarouselNavButton
                  size="large"
                  type="default"
                  onClick={this.handleNextTopAnimeBtnClick}
                >
                  <Icon
                    theme="filled"
                    type="caret-right"
                    style={{ fontSize: '22px' }}
                  />
                </NextCarouselNavButton>
              </Row>
            }
          />
          &nbsp;
          <CardBox
            title="Recently Reviewed"
            content={
              <Row type="flex" justify="center" align="middle">
                <PrevCarouselNavButton
                  size="large"
                  type="default"
                  onClick={this.handlePrevRecentlyReviewedAnimeBtnClick}
                >
                  <Icon
                    theme="filled"
                    type="caret-left"
                    style={{ fontSize: '22px' }}
                  />
                </PrevCarouselNavButton>
                <Col span={24}>
                  <Carousel ref={this.recentlyReviewedRef} dots={false}>
                    <CustomHorizontalList
                      dataSource={SlicedRecentlyReviewedAnimeData1}
                    />
                    <CustomHorizontalList
                      dataSource={SlicedRecentlyReviewedAnimeData2}
                    />
                  </Carousel>
                </Col>
                <NextCarouselNavButton
                  size="large"
                  type="default"
                  onClick={this.handleNextRecentlyReviewedAnimeBtnClick}
                >
                  <Icon
                    theme="filled"
                    type="caret-right"
                    style={{ fontSize: '22px' }}
                  />
                </NextCarouselNavButton>
              </Row>
            }
          />
          &nbsp;
          <Row>
            <Col span={17}>{TopGenreCardBoxes}</Col>
            <Col span={6} offset={1}>
              <CardBox
                title="Ranking"
                content={
                  <CustomVerticalList
                    dataSource={this.props.topAnimeData.slice(0, 5)}
                  />
                }
              />
              &nbsp;
              <CardBox
                title="Recent Reviews"
                content={
                  <List
                    dataSource={this.props.recentReviewsData.slice(0, 5)}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={
                            <RecentReviewTitle href={`/anime/${item.anime_id}`}>
                              {item.title}
                            </RecentReviewTitle>
                          }
                          description={
                            <RecentReviewDescription>
                              <Icon type="star" />
                              &nbsp;
                              <span>{parseFloat(item.rating).toFixed(1)}</span>
                              <br />
                              <Icon type="user" />
                              &nbsp;
                              {item.user_name}
                              <br />
                              <Icon type="desktop" />
                              &nbsp;{item.anime_name}
                            </RecentReviewDescription>
                          }
                        />
                      </List.Item>
                    )}
                  />
                }
              />
            </Col>
          </Row>
        </Content>
      </StyledContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    topAnimeData: state.anime.topAnimeData,
    genresListData: state.anime.genresListData,
    genreTopData: state.anime.genreTopData,
    multipleGenreTopData: state.anime.multipleGenreTopData,
    recentlyReviewedAnimeData: state.anime.recentlyReviewedAnimeData,
    recentReviewsData: state.anime.recentReviewsData
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const RecentReviewTitle = styled.a`
  font-weight: bold;
  font-size: calc(1.1vw);
  color: rgba(0, 0, 0, 0.65) !important;
`;

const RecentReviewDescription = styled.div`
  font-size: calc(1vw);
`;

const StyledImg = styled.img`
  width: 100%;
  height: calc(31vw);
  color: white;
  text-align: center;
  object-fit: cover;
`;

const StyledContent = styled(Content)`
  background-image: url(${BGImage});
`;

const PrevCarouselNavButton = styled(Button)`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  left: 0;
  z-index: 1;
  border: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;

const NextCarouselNavButton = styled(Button)`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  right: 0;
  z-index: 1;
  border: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  &:focus,
  :hover {
    background: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
