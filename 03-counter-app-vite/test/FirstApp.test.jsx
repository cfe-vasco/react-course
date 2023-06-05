import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {
    test('Debe de hacer match con snapshot', () => {

        const subTittle = 'Esto es un subtitulo desde tests'

        render(<FirstApp subTitle={subTittle}/>)

    })
})