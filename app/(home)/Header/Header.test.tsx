import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import Header from "./Header"

describe("Header", () => {
    beforeEach(() => {
        render(<Header />)
    })

    test("renders header", () => {
        const header = screen.getByRole("banner")
        expect(header).toBeInTheDocument()
    })

    test("renders CV download link", () => {
        const cvLink = screen.getByRole("link", { name: /cv/i })
        expect(cvLink).toBeInTheDocument()
    })

    test("renders mobile menu", () => {
        const mobileMenu = screen.getByRole("navigation", { name: /menú principal/i })
        expect(mobileMenu).toBeInTheDocument()
    })

    test("renders about me link", () => {
        const aboutMeLink = screen.getByRole("link", { name: /acerca de mí/i })
        expect(aboutMeLink).toBeInTheDocument()
    })

    test("renders knowledge link", () => {
        const knowledgeLink = screen.getByRole("link", { name: /conocimientos/i })
        expect(knowledgeLink).toBeInTheDocument()
    })

    test("renders projects link", () => {
        const projectsLink = screen.getByRole("link", { name: /proyectos/i })
        expect(projectsLink).toBeInTheDocument()
    })

    test("menu opens and closes", () => {
        const openButton = screen.getByRole("button", { name: /abrir menú móvil/i })
        const closeButton = screen.getByRole("button", { name: /cerrar menú móvil/i })
        const mobileMenu = screen.getByRole("navigation", { name: /menú principal/i })
        expect(mobileMenu).toHaveClass("close")
        fireEvent.click(openButton)
        expect(mobileMenu).toHaveClass("open")
        fireEvent.click(closeButton)
        expect(mobileMenu).toHaveClass("close")
    })

    test("menu closes on link click", () => {
        const openButton = screen.getByRole("button", { name: /abrir menú móvil/i })
        const mobileMenu = screen.getByRole("navigation", { name: /menú principal/i })
        const aboutMeLink = screen.getByRole("link", { name: /acerca de mí/i })
        fireEvent.click(openButton)
        expect(mobileMenu).toHaveClass("open")
        fireEvent.click(aboutMeLink)
        expect(mobileMenu).toHaveClass("close")
    })
})

