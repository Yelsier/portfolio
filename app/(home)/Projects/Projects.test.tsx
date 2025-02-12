import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import Projects from "./Projects";

describe('Projects Component', () => {

    beforeEach(() => {
        render(<Projects />)
    })

    // Evita error de ResizeObserver
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }))

    test('renders section', () => {
        const sectionElement = screen.getByRole('region');
        expect(sectionElement).toBeInTheDocument();
    });

    test('displays the correct section title', () => {
        const titleElement = screen.getByText("PROYECTOS");
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('H2');
    });

    test('renders Slider component', () => {
        const sliderElement = screen.getByRole('list');
        expect(sliderElement).toBeInTheDocument();
    });

    test('renders all projects', () => {
        const projects = screen.getAllByTestId('project');
        expect(projects).toHaveLength(14); //Deberian ser 7 proyectos, pero para que el slider funcione los duplica
    });

    test('renders project image', () => {
        const projects = screen.getAllByTestId('project');
        projects.forEach(project => {
            const img = project.querySelector('img');
            expect(img).toBeInTheDocument();
        });
    });

    test('renders project title', () => {
        const projects = screen.getAllByTestId('project');
        projects.forEach(project => {
            const title = project.querySelector('h3');
            expect(title).toBeInTheDocument();
        });
    });

    test('renders project hechoEn', () => {
        const projects = screen.getAllByTestId('project');
        projects.forEach(project => {
            const hechoEn = project.querySelector('p');
            expect(hechoEn).toBeInTheDocument();
        });
    });

    test('renders project link', () => {
        const projects = screen.getAllByTestId('project');
        projects.forEach(project => {
            const link = project.querySelector('a');
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href');
        });
    });



})
