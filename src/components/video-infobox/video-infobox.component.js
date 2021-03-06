import React from 'react';
import './video-infobox.styles.scss';
import { Image, Button } from 'semantic-ui-react';

export class VideoInfoBox extends React.Component {
	render() {
		return (
			<div className='video-info-box'>
			<Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
			  <div className="video-info">
			    <div className='channel-name'>Channel Name</div>
			    <div className='video-publication-date'>Thu 24, 2017</div>
			     </div>
			      <Button className='button'color='youtube'>91.5K Subscribe</Button>

			      <div className="video-description">
			      <p>Paragraph 1</p>
			      <p>Paragraph 2</p>
			      <p>Paragraph 3</p>
			      <p>Paragraph 4</p>
			     <p>Paragraph 5</p>
			    <Button compact >Show More</Button>
			  </div>
			</div>
		)
	}
}