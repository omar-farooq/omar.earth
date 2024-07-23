import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProjectList from '../app/projectList'

describe('ProjectList', () => {
    it('renders the zah project', () => {
        render(<ProjectList />)

        const zah = screen.getByAltText(/Screenshot of a project for a housing co-op/i)

        expect(zah).toBeInTheDocument()
    })
})
