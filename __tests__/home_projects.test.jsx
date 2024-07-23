import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
    it('Loads project list', () => {
        render(<Home />)

        const projectHeading = screen.getByRole('heading', { level: 2, name: 'Projects' })
        expect(projectHeading).toBeInTheDocument()

    })
})
