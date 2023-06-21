import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoaderAccordion = ({ props }) => {
	return (
		<ContentLoader
			speed={2}
			width={608}
			height={76}
			viewBox='0 0 608 76'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}>
			<rect x='0' y='0' rx='0' ry='0' width='608' height='76' />
		</ContentLoader>
	)
}
