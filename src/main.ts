import { examples } from "./examples.js"

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
        let html = first + "<span id=\"example-and\"> and </span>" + second
        return html
    }
}

function random_int(max) {
    return Math.floor(Math.random() * max);
}

function select_example(): (string | [string, string]) {
    let  length = examples.length
    let index = random_int(length)
    let example: string | [string, string] = examples[index]
    return example
}

document.addEventListener('DOMContentLoaded', main)

