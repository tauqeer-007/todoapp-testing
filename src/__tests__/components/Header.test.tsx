import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

const TEST_USERNAME = 'Tauqeer'

describe('Header tests', () => {
    
    it('renders greeting with userName', () => {
        render(<Header userName={TEST_USERNAME}/>);
        const greetingElement = screen.getByText(`Hey, ${TEST_USERNAME}`);
        expect(greetingElement).toBeInTheDocument();
    });

    it('get By All Text', () => {
        render(<Header userName={TEST_USERNAME}/>);
        const img = screen.getByAltText("logo");
        expect(img).toBeInTheDocument();
    });
    
})