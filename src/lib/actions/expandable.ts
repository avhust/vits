type ReferenceAction = (
    node: HTMLElement,
    expanded: boolean
) => {
    update?(expanded: boolean): void
    destroy?(): void
}
export const expandable: ReferenceAction = (node, expanded) => {
    let placeholder = document.createElement("div")
    let slot = node.firstChild ? node.firstChild : node
    placeholder.style.width = `${node.clientWidth}px`
    placeholder.style.height = `${node.clientHeight}px`

    const handleMousedown = () => {
        node.parentElement?.appendChild(placeholder)
        node.dispatchEvent(new CustomEvent('expanding'))

        // TODO Add animation from static to fixed position (with additional element?)
        // const { width, height, x, y } = node.getBoundingClientRect();
        // node.style.left = `${x}px`;
        // node.style.top = `${y}px`;
        // node.style.width = `${width}px`;
        // node.style.height = `${height}px`;
        // console.log(window.innerWidth);
        // console.log(window.innerHeight);

    }


    slot.addEventListener('click', handleMousedown)
    slot.addEventListener('keypress', handleMousedown)

    return {
        update(expanded) {
            if (!expanded && node.parentElement?.contains(placeholder)) {
                node.parentElement?.removeChild(placeholder)
            }
        },
        destroy() {
            slot.removeEventListener('click', handleMousedown)
            slot.removeEventListener('keypress', handleMousedown)
            if (node.parentElement?.contains(placeholder)) {
                node.parentElement?.removeChild(placeholder)
            }
        }
    }
}