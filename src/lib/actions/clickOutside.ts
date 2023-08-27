type ReferenceAction = (
    node: HTMLElement,
) => {
    destroy?(): void;
};
const clickOutside: ReferenceAction = (node) => {
    const handleClick = ({ target }: MouseEvent) => {
        if (!node.contains(target as Node)) {
            node.dispatchEvent(new CustomEvent('outclick'));
        }
    };

    document.addEventListener('mousedown', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
export default clickOutside;
