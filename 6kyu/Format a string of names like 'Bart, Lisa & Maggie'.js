/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

//My solution:

const list = names => {
const last =  names.length > 0 ? names.pop() : { name: ''} 
const res = names.map(el=> el.name).join(', ')
return res ? `${res} & ${last.name}` : last.name
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])

// returns 'Bart, Lisa & Maggie',
