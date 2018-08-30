import React from 'react';
import { configure, mount } from 'enzyme';
import Note from './Note';
import Adapter from 'enzyme-adapter-react-15';

const props = { note: { text: 'test note'} };

configure({ adapter: new Adapter() });

describe('Note', () => {
	let note = mount(<Note {...props}/>);

	it('renders the note text', () => {
		expect(note.find('p').text()).toEqual(props.note.text);
	});
});
