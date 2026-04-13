import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
    it('Renders home page with blog and about links', () => {
        render(<Home />)

        const blogLink = screen.getByRole('link', { name: /read the blog/i })
        expect(blogLink).toBeInTheDocument()

        const aboutLink = screen.getByRole('link', { name: /about me/i })
        expect(aboutLink).toBeInTheDocument()
    })
})
