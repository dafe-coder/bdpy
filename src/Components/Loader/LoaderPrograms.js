import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoaderPrograms = ({ props }) => {
	return (
		<ContentLoader
			speed={2}
			width={1266}
			height={86}
			viewBox='0 0 1266 86'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}>
			<rect x='0' y='0' rx='0' ry='0' width='1266' height='86' />
		</ContentLoader>
	)
}
