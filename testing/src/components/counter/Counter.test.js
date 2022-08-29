import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Counter from './index';

test('increase btn',()=> {
     render(<Counter/>);

     const count = screen.getByText('0');
     const increaseBtn = screen.getByText("increase");

     userEvent.click(increaseBtn); 

     expect(count.toHaveTextContent('1'));
});