import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
    it('renders a landing image', () => {
        render(<Home />)

        const cyborg = screen.getByAltText(/Representation of man with nature and machine/i)

        expect(cyborg).toBeInTheDocument()
    })
})
