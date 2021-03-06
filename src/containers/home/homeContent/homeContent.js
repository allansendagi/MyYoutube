import React from 'react';
import {VideoGrid} from '../../../components/video-grid/video-grid.component';
import './homeContent.scss';
import {getMostPopularVideos, getVideosByCategory} from '../../../store/reducers/video';
// import {getVideoCategoryIds} from '../../store/reducers/video';
import {InfiniteScroll} from '../../../components/infinite-scroll/infinite-scroll';


import {connect} from 'react-redux';

const AMOUNT_TRENDING_VIDEOS = 12;

class HomeContent extends React.Component {
  render() {
    const trendingVideos = this.getTrendingVideos();
    const categoryGrids = this.getVideoGridsForCategories();

    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <VideoGrid title='Trending' videos={trendingVideos}/>
          {categoryGrids}
        </div>
      </div>
    );
  }

  getTrendingVideos() {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }
  getVideoGridsForCategories() {
    const categoryTitles = Object.keys(this.props.videosByCategory || {});
    return categoryTitles.map((categoryTitle,index) => {
      const videos = this.props.videosByCategory[categoryTitle];
      // the last video grid element should not have a divider
      const hideDivider = index === categoryTitles.length - 1;
      return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider}/>;
    });
  }
}

function mapStateToProps(state) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state),
  };
}
export default connect(mapStateToProps, null)(HomeContent);