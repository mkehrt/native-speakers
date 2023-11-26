import { examples } from "./examples"

export function main() {
    let example_div = document.getElementById("example")
    if (example_div != null) {
        let example = select_example()
        let example_html = convert_example_to_html(example)
        example_div.innerHTML = example_html
    }
}

function convert_example_to_html(example: (string | [string, string])): string {
    if (typeof example == "string") {
        return example
    } else {
        let first = example[0]
        let second = example[1]
        let html = first + "<span id=\"exampleand\"> and </span>" + second
        return html
    }
}

function select_example(): (string | [string, string]) {
    console.log(examples)
    let example: string | [string, string] = examples[0]
    return example
}

document.addEventListener('onLoad', main)

