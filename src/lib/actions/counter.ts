type ReferenceAction = (
    node: HTMLElement
) => {
    update?(expanded: boolean): void;
    destroy?(): void;
};
export const counter: ReferenceAction = (node) => {
    const speed = 200;
    const value = Number(node.getAttribute('data-upto'));

    function animate() {
        const data = +node.innerText;
        const time = value / speed;
        if (data < value) {
            node.innerText = Math.ceil(data + time).toString();
            setTimeout(animate, 1);
        } else {
            node.innerText = value.toString();
        }
    }
    animate();
    return {
        destroy() {

        }
    };
}