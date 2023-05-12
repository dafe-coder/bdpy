export function getMonth(month) {
	switch (month) {
		case '01':
			return 'Січень'
		case '02':
			return 'Лютий'
		case '03':
			return 'Березень'
		case '04':
			return 'Квітень'
		case '05':
			return 'Травень'
		case '06':
			return 'Червень'
		case '07':
			return 'Липень'
		case '08':
			return 'Серпень'
		case '09':
			return 'Вересень'
		case '10':
			return 'Жовтень'
		case '11':
			return 'Листопад'
		case '12':
			return 'Грудень'
		default:
			return ''
	}
}
