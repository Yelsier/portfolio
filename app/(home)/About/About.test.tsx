import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {

    beforeEach(() => {
        render(<About />)
    })

    test('renders section', () => {
        const sectionElement = screen.getByRole('region');
        expect(sectionElement).toBeInTheDocument();
    });

    test('displays the correct section title', () => {
        const titleElement = screen.getByText(/acerca de mí/i);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe("H2");
    });

    test('renders 2 p', () => {
        const pElements = screen.getAllByRole('paragraph');
        expect(pElements).toHaveLength(2);
    });
});