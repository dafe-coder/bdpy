import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoaderNews = ({ props }) => {
	return (
		<ContentLoader
			speed={2}
			width={290}
			height={427}
			viewBox='0 0 290 427'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}>
			<rect x='0' y='0' rx='0' ry='0' width='290' height='230' />
			<rect x='0' y='253' rx='0' ry='0' width='290' height='72' />
			<rect x='0' y='346' rx='0' ry='0' width='290' height='20' />
			<rect x='0' y='375' rx='0' ry='0' width='290' height='20' />
			<rect x='0' y='402' rx='0' ry='0' width='290' height='20' />
		</ContentLoader>
	)
}
