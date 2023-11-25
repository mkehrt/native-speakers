import { examples } from "./examples"

function main() {
    let example_div = document.getElementById("example");
    if (example_div != null) {
        example_div.textContent = "EXAMPLE";
    }
}

function select_example(): (string | [string, string]) {
    return "a";
}
