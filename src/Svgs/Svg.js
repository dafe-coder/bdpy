import React from 'react'

export const SvgIcon = ({ type, fill }) => {
	switch (type) {
		case 'pdf':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='32'
					fill='none'
					viewBox='0 0 24 32'>
					<path
						fill='#000'
						d='M20 29c.5 0 1-.438 1-1v-2h3v2c0 2.25-1.813 4-4 4H4c-2.25 0-4-1.75-4-4v-2h3v2c0 .563.438 1 1 1h16Zm-4-19c-1.125 0-2-.875-2-2V3H4c-.563 0-1 .5-1 1v8H0V4c0-2.188 1.75-4 4-4h10.313c1.062 0 2.062.438 2.812 1.188l5.688 5.687c.75.75 1.187 1.75 1.187 2.813V12h-3v-2h-5ZM5.5 14C7.375 14 9 15.625 9 17.5 9 19.438 7.375 21 5.5 21H5v2c0 .563-.5 1-1 1-.563 0-1-.438-1-1v-8c0-.5.438-1 1-1h1.5ZM7 17.5c0-.813-.688-1.5-1.5-1.5H5v3h.5c.813 0 1.5-.625 1.5-1.5Zm3-2.5c0-.5.438-1 1-1h1.5c1.625 0 3 1.375 3 3v4a3 3 0 0 1-3 3H11c-.563 0-1-.438-1-1v-8Zm2 7h.5c.5 0 1-.438 1-1v-4c0-.5-.5-1-1-1H12v6Zm9-8c.5 0 1 .5 1 1 0 .563-.5 1-1 1h-2v2h2c.5 0 1 .5 1 1 0 .563-.5 1-1 1h-2v3c0 .563-.5 1-1 1-.563 0-1-.438-1-1v-8c0-.5.438-1 1-1h3Z'
					/>
				</svg>
			)
		case 'scale-balanced':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21'
					height='16'
					fill='none'
					viewBox='0 0 21 16'>
					<path
						fill='#170807'
						d='M8.5 10.5c0-.5.031-.25-2.688-5.656A1.414 1.414 0 0 0 4.5 4c-.531 0-1.094.281-1.344.844C.437 10.28.5 10.03.5 10.5c0 1.406 1.781 2.5 3.969 2.5C6.625 13 8.5 11.906 8.5 10.5Zm-4.031-5L6.75 10H2.219l2.25-4.5Zm12.25 9H11.25V4.875c.844-.25 1.5-.969 1.688-1.875h3.812a.707.707 0 0 0 .719-.719c0-.437-.313-.781-.75-.781H12.75C12.375.625 11.5 0 10.5 0 9.469 0 8.594.625 8.187 1.5H4.25a.74.74 0 0 0-.75.75c0 .375.313.75.75.75h3.781c.188.906.844 1.625 1.688 1.875V14.5H4.25a.74.74 0 0 0-.75.75c0 .375.313.75.75.75h12.469a.707.707 0 0 0 .718-.719.705.705 0 0 0-.718-.781ZM10.5 3.5c-.563 0-1-.438-1-1 0-.531.469-1 1-1 .5 0 .969.469.969 1a.98.98 0 0 1-.969 1Zm9.969 7c0-.5.031-.25-2.688-5.656C17.563 4.28 17 4 16.47 4c-.532 0-1.094.281-1.344.844C12.437 10.28 12.5 10.03 12.5 10.5c0 1.406 1.781 2.5 4 2.5 2.188 0 3.969-1.094 3.969-2.5Zm-6.25-.5 2.25-4.5 2.25 4.5h-4.5Z'
					/>
				</svg>
			)
		case 'search':
			return (
				<svg
					width='19'
					height='19'
					viewBox='0 0 19 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M17.7188 16.8086L13.0078 12.0977C14.0273 10.8672 14.5898 9.28516 14.5898 7.5625C14.5898 3.55469 11.2852 0.25 7.27734 0.25C3.23438 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.27734 14.875C8.96484 14.875 10.5469 14.3125 11.8125 13.293L16.5234 18.0039C16.6992 18.1797 16.9102 18.25 17.1562 18.25C17.3672 18.25 17.5781 18.1797 17.7188 18.0039C18.0703 17.6875 18.0703 17.1602 17.7188 16.8086ZM1.6875 7.5625C1.6875 4.46875 4.18359 1.9375 7.3125 1.9375C10.4062 1.9375 12.9375 4.46875 12.9375 7.5625C12.9375 10.6914 10.4062 13.1875 7.3125 13.1875C4.18359 13.1875 1.6875 10.6914 1.6875 7.5625Z'
						fill='#170807'
					/>
				</svg>
			)
		case 'angle-bottom':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='14'
					height='8'
					fill='none'
					viewBox='0 0 14 8'>
					<path
						fill='#170807'
						d='M7 8a.99.99 0 0 1-.719-.281l-5-5a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L7 5.593l4.281-4.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406l-5 5A.97.97 0 0 1 7 8Z'
					/>
				</svg>
			)
		case 'share-alt':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21'
					height='22'
					fill='none'
					viewBox='0 0 21 22'>
					<path
						fill='#fff'
						d='M21 5c0 2.484-2.016 4.5-4.5 4.5-1.36 0-2.578-.563-3.422-1.547l-4.219 2.11c.094.328.094.656.094.937 0 .328 0 .656-.094.984l4.22 2.063A4.602 4.602 0 0 1 16.5 12.5a4.501 4.501 0 0 1 0 9A4.471 4.471 0 0 1 12 17c0-.281 0-.61.094-.938l-4.219-2.109A4.419 4.419 0 0 1 4.5 15.5 4.471 4.471 0 0 1 0 11c0-2.484 1.969-4.5 4.5-4.5 1.313 0 2.531.61 3.375 1.547l4.219-2.063C12 5.656 12 5.328 12 5 12 2.516 13.969.5 16.5.5 18.984.5 21 2.516 21 5ZM4.453 13.25A2.22 2.22 0 0 0 6.703 11a2.25 2.25 0 0 0-2.25-2.25c-1.219 0-2.25 1.031-2.25 2.25a2.25 2.25 0 0 0 2.25 2.25ZM16.5 2.75A2.25 2.25 0 0 0 14.25 5a2.22 2.22 0 0 0 2.25 2.25A2.25 2.25 0 0 0 18.75 5c0-1.219-1.031-2.25-2.25-2.25Zm0 16.5A2.25 2.25 0 0 0 18.75 17c0-1.219-1.031-2.25-2.25-2.25A2.25 2.25 0 0 0 14.25 17a2.22 2.22 0 0 0 2.25 2.25Z'
					/>
				</svg>
			)
		case 'times':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='17'
					height='16'
					fill='none'
					viewBox='0 0 17 16'>
					<path
						fill={fill ? fill : '#fff'}
						d='M15.531 12.969c.61.562.61 1.547 0 2.11a1.454 1.454 0 0 1-1.031.421c-.422 0-.797-.14-1.078-.422L8.5 10.156l-4.969 4.922A1.454 1.454 0 0 1 2.5 15.5c-.422 0-.797-.14-1.078-.422a1.445 1.445 0 0 1 0-2.11L6.344 8 1.422 3.078a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L8.5 5.892 13.422.969a1.445 1.445 0 0 1 2.11 0 1.447 1.447 0 0 1 0 2.11l-4.923 4.968 4.922 4.922Z'
					/>
				</svg>
			)
		case 'circle-with-arrow':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					fill='none'
					viewBox='0 0 50 50'>
					<path
						fill={fill ? fill : '#fff'}
						d='m32.688 25.719-4 4a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L29.563 26H18c-.563 0-1-.438-1-1 0-.594.438-1 1-1h11.563l-2.282-2.281a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l4 4a.964.964 0 0 1 0 1.407Z'
					/>
					<rect
						width='49'
						height='49'
						x='.5'
						y='.5'
						stroke={fill ? fill : '#fff'}
						rx='24.5'
					/>
				</svg>
			)
		case 'instagram':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					fill='none'
					viewBox='0 0 22 22'>
					<path
						fill='#111'
						d='M11.5 5.61c-3 0-5.39 2.437-5.39 5.39 0 3 2.39 5.39 5.39 5.39A5.39 5.39 0 0 0 16.89 11c0-2.953-2.437-5.39-5.39-5.39Zm0 8.906A3.51 3.51 0 0 1 7.984 11c0-1.922 1.547-3.469 3.516-3.469A3.46 3.46 0 0 1 14.969 11c0 1.969-1.547 3.516-3.469 3.516Zm6.844-9.094a1.26 1.26 0 0 0-1.266-1.266 1.26 1.26 0 0 0-1.265 1.266 1.26 1.26 0 0 0 1.265 1.266 1.26 1.26 0 0 0 1.266-1.266Zm3.562 1.266C21.813 5 21.438 3.5 20.22 2.28 19 1.062 17.5.687 15.812.594 14.079.5 8.875.5 7.142.594 5.453.688 4 1.063 2.734 2.28 1.516 3.5 1.141 5 1.047 6.687c-.094 1.735-.094 6.938 0 8.672.094 1.688.469 3.141 1.687 4.407 1.266 1.218 2.72 1.593 4.407 1.687 1.734.094 6.937.094 8.671 0 1.688-.094 3.188-.469 4.407-1.687 1.218-1.266 1.593-2.72 1.687-4.407.094-1.734.094-6.937 0-8.671Zm-2.25 10.5c-.328.937-1.078 1.64-1.968 2.015-1.407.563-4.688.422-6.188.422-1.547 0-4.828.14-6.188-.422a3.554 3.554 0 0 1-2.015-2.015c-.563-1.36-.422-4.641-.422-6.188 0-1.5-.14-4.781.422-6.188a3.616 3.616 0 0 1 2.015-1.968c1.36-.563 4.641-.422 6.188-.422 1.5 0 4.781-.14 6.188.422.89.328 1.593 1.078 1.968 1.969.563 1.406.422 4.687.422 6.187 0 1.547.14 4.828-.422 6.188Z'
					/>
				</svg>
			)
		case 'internet':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					viewBox='0 0 24 24'>
					<path
						fill='#111'
						d='M12 0c6.61 0 12 5.39 12 12 0 6.656-5.39 12-12 12-6.656 0-12-5.344-12-12C0 5.39 5.344 0 12 0Zm0 21.75c.328 0 1.219-.328 2.203-2.25.422-.844.75-1.828 1.031-3H8.72c.281 1.172.61 2.156 1.031 3 .984 1.922 1.875 2.25 2.25 2.25Zm-3.656-7.5h7.265a18.133 18.133 0 0 0 0-4.5H8.344c-.094.75-.094 1.5-.094 2.25 0 .797 0 1.547.094 2.25Zm6.89-6.75c-.28-1.125-.609-2.11-1.03-2.953C13.218 2.625 12.327 2.25 12 2.25c-.375 0-1.266.375-2.25 2.297C9.328 5.39 9 6.375 8.719 7.5h6.515Zm2.625 2.25a18.133 18.133 0 0 1 0 4.5h3.61A8.706 8.706 0 0 0 21.75 12c0-.75-.094-1.5-.281-2.25h-3.61Zm-1.828-6.61c.657 1.22 1.172 2.72 1.5 4.36h3.094a9.645 9.645 0 0 0-4.594-4.36Zm-8.11 0A9.645 9.645 0 0 0 3.329 7.5h3.094c.328-1.64.844-3.14 1.5-4.36ZM2.25 12c0 .797.047 1.547.234 2.25h3.61C6 13.547 6 12.797 6 12c0-.75 0-1.5.094-2.25h-3.61c-.187.75-.234 1.5-.234 2.25Zm18.375 4.5h-3.094c-.328 1.688-.843 3.188-1.5 4.406a9.527 9.527 0 0 0 4.594-4.406Zm-14.203 0H3.328a9.527 9.527 0 0 0 4.594 4.406c-.656-1.218-1.172-2.718-1.5-4.406Z'
					/>
				</svg>
			)
		case 'telegram':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					viewBox='0 0 24 24'>
					<path
						fill='#111'
						d='M11.625.375C18.047.375 23.25 5.578 23.25 12s-5.203 11.625-11.625 11.625S0 18.422 0 12 5.203.375 11.625.375Zm5.672 7.969c.187-.75-.281-1.078-.797-.89L5.297 11.765c-.75.28-.75.75-.14.937l2.859.89 6.656-4.218c.328-.188.61-.047.375.14l-5.39 4.876-.188 2.953c.281 0 .422-.14.562-.282l1.406-1.359 2.907 2.156c.562.282.937.141 1.078-.515l1.875-9Z'
					/>
				</svg>
			)
		case 'facebook':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='13'
					height='24'
					fill='none'
					viewBox='0 0 13 24'>
					<path
						fill='#111'
						d='M10.078 3.984h2.297V.188A30.618 30.618 0 0 0 9.047 0C5.812 0 3.562 2.016 3.562 5.672V9H0v4.266h3.563V24h4.406V13.266h3.468L12 9H7.969V6.094c0-1.266.375-2.11 2.11-2.11Z'
					/>
				</svg>
			)
		case 'twitter':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='20'
					fill='none'
					viewBox='0 0 24 20'>
					<path
						fill='#111'
						d='M21.516 5.125c.937-.703 1.78-1.547 2.437-2.531a9.225 9.225 0 0 1-2.812.75A4.809 4.809 0 0 0 23.297.625c-.938.563-2.016.984-3.094 1.219a4.922 4.922 0 0 0-3.61-1.547 4.921 4.921 0 0 0-4.921 4.922c0 .375.047.75.14 1.125a14.28 14.28 0 0 1-10.17-5.157C1.22 1.891.985 2.734.985 3.672c0 1.687.844 3.187 2.204 4.078-.797-.047-1.594-.234-2.25-.61v.048a4.928 4.928 0 0 0 3.937 4.828c-.375.093-.844.187-1.266.187-.328 0-.609-.047-.937-.094.61 1.97 2.437 3.375 4.594 3.422a9.895 9.895 0 0 1-6.094 2.11c-.422 0-.797-.047-1.172-.094 2.156 1.406 4.734 2.203 7.547 2.203 9.047 0 13.969-7.453 13.969-13.969v-.656Z'
					/>
				</svg>
			)
		case 'youtube':
			return (
				<svg
					width='27'
					height='18'
					viewBox='0 0 27 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M25.7344 2.85938C26.2969 4.82812 26.2969 9.04688 26.2969 9.04688C26.2969 9.04688 26.2969 13.2188 25.7344 15.2344C25.4531 16.3594 24.5625 17.2031 23.4844 17.4844C21.4688 18 13.5 18 13.5 18C13.5 18 5.48438 18 3.46875 17.4844C2.39062 17.2031 1.5 16.3594 1.21875 15.2344C0.65625 13.2188 0.65625 9.04688 0.65625 9.04688C0.65625 9.04688 0.65625 4.82812 1.21875 2.85938C1.5 1.73438 2.39062 0.84375 3.46875 0.5625C5.48438 0 13.5 0 13.5 0C13.5 0 21.4688 0 23.4844 0.5625C24.5625 0.84375 25.4531 1.73438 25.7344 2.85938ZM10.875 12.8438L17.5312 9.04688L10.875 5.25V12.8438Z'
						fill='#111111'
					/>
				</svg>
			)

		default:
			break
	}
}