'use strict'
module.exports = function serialise_html(elem)
	{ const xs = []
	xs.push('<')
	xs.push(elem[0])
	if (elem[1] !== null)
		for (const [k,v] of elem[1])
			{ xs.push(' ')
			xs.push(k)
			xs.push('=')
			xs.push('"')
			xs.push(v)
			xs.push('"') }
	if (elem[2] === null) xs.push('/>')
	else
		{ xs.push('>')
		for (const x of elem[2])
			if (typeof x === 'string') xs.push(x)
			else xs.push(serialise_html(x))
		xs.push('</')
		xs.push(elem[0])
		xs.push('>') }
	return xs.join('') }
