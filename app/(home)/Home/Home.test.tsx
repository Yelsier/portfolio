import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {

    beforeEach(() => {
        render(<Home />)
    })

    test('renders section', () => {
        const sectionElement = screen.getByRole('region');
        expect(sectionElement).toBeInTheDocument();
    });

    test('renders the background component', () => {
        const backgroundElement = screen.getByTestId('background');
        expect(backgroundElement).toBeInTheDocument();
    });

    test('renders the main title with correct text', () => {
        const titleElement = screen.getByRole('heading', { name: /Yago Claros Seijo/i });
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('H1');
    });

    test('renders the subttestle wtesth correct text', () => {
        const subttestleElement = screen.getByText(/FULL STACK DEVELOPER/i);
        expect(subttestleElement).toBeInTheDocument();
    });

    test('renders LinkedIn link with correct href', () => {
        const linkedInLink = screen.getByTitle('LinkedIn');
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/yago-claros/');
    });

    test('renders Github link wtesth correct href', () => {
        const gtesthubLink = screen.getByTitle('Github');
        expect(gtesthubLink).toHaveAttribute('href', 'https://github.com/Yelsier/portfolio');
    });

    test('renders FontAwesome icons', () => {
        const linkedInIcon = screen.getByTitle('LinkedIn').querySelector('svg');
        const githubIcon = screen.getByTitle('Github').querySelector('svg');
        expect(linkedInIcon).toBeInTheDocument();
        expect(githubIcon).toBeInTheDocument();
    });
});