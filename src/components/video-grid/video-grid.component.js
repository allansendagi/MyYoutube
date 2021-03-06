import React from 'react';
import './video-grid.styles.scss';
import {VideoGridHeader} from './video-grid-header/video-grid-header.component';
import {Divider} from 'semantic-ui-react';
import {VideoPreview} from '../video-preview/video-preview.component';

export function VideoGrid(props) {
	if (!props.videos || !props.videos.length) {
		return <div/>
	}

	const gridItems = props.videos.map(video => {
    return (<VideoPreview video={video}
                          key={video.id}/>);
  });

	const divider = props.hideDivider ? null : <Divider/>;

	return (
		<React.Fragment>
		   <VideoGridHeader title={props.title}/>
		    <div className='video-grid'>
		     	{gridItems}
		    </div>
		  {divider}
		</React.Fragment>
	);
}
	
