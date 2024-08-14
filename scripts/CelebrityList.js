import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "celebrity"){
            const clickedCelebrity = parseInt(itemClicked.dataset.id)

            let matchedCelebrity = null
            for (const celebrity of celebrities) {
                if (celebrity.id === clickedCelebrity) {
                    matchedCelebrity = celebrity
                }
            }

            if (matchedCelebrity) {
                window.alert(`${matchedCelebrity.name} is a ${matchedCelebrity.sport} star`)
            }
        }
    }
)