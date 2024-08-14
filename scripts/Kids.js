import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

            if(itemClicked.dataset.type === "child") {
                const clickedKid = parseInt(itemClicked.dataset.id)

                let matchedKid = null
                for (const child of children) {
                    if (child.id === clickedKid) {
                        matchedKid = child
                    }
                }
                if (matchedKid) {
                    window.alert(`${matchedKid.name} wish is ${matchedKid.wish}`)
                }
            }
    }
)
