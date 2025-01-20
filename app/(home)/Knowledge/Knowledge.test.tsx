import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import Knowledge from './Knowledge';

describe('Knowledge Component', () => {

    beforeEach(() => {
        render(<Knowledge />)
    })

    test('renders section', () => {
        const sectionElement = screen.getByRole('region');
        expect(sectionElement).toBeInTheDocument();
    });

    test('displays the correct section title', () => {
        const titleElement = screen.getByText(/conocimientos/i);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe("H2");
    });

    test('renders TabsKnowledge component', () => {
        const tabsKnowledgeElement = screen.getByTestId('tabs-knowledge');
        expect(tabsKnowledgeElement).toBeInTheDocument();
    });

    test('displays the decor bottom text', () => {
        const decorBottomElement = screen.getByText(/skills\.module/i);
        expect(decorBottomElement).toBeInTheDocument();
    });
});