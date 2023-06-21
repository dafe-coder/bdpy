import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoaderData = ({ props }) => {
	return (
		<ContentLoader
			speed={2}
			width={430}
			height={160}
			viewBox='0 0 430 160'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}>
			<rect x='0' y='0' rx='0' ry='0' width='430' height='160' />
		</ContentLoader>
	)
}
