type ReferenceAction = (
    node: HTMLElement
) => {
    destroy?(): void;
};
export const swipeToClose: ReferenceAction = (node) => {

    let touchStart: number, touchEnd: number;
    let touchVerticalStart: number, touchVerticalEnd: number;

    function handleTouchStart(e: TouchEvent) {
        touchStart = e.targetTouches[0].clientX;
        touchVerticalStart = e.targetTouches[0].clientY;
    }
    function handleTouchEnd(e: TouchEvent) {
        if (touchEnd - touchStart > 100 && Math.abs(touchVerticalEnd - touchVerticalStart) < 100) {
            node.dispatchEvent(new CustomEvent('swiperight'))
        }
    }
    function handleTouchMove(e: TouchEvent) {
        touchEnd = e.targetTouches[0].clientX;
        touchVerticalEnd = e.targetTouches[0].clientY;
    }
    node.addEventListener('touchstart', handleTouchStart)

    node.addEventListener('touchmove', handleTouchMove)

    node.addEventListener('touchend', handleTouchEnd)


    return {
        destroy() {
            node.removeEventListener('touchstart', handleTouchStart, true);
            node.removeEventListener('touchmove', handleTouchMove, true);
            node.removeEventListener('touchend', handleTouchEnd, true);
        }
    };
}
type ReferenceActionSwipableParams = { length?: number };
type ReferenceActionSwipable = (
    node: HTMLElement,
    params: ReferenceActionSwipableParams
) => {
    destroy?(): void;
};
export const swipable: ReferenceActionSwipable = (node, { length = 50 }) => {

    let touchStart: number, touchEnd: number;
    let touchVerticalStart: number, touchVerticalEnd: number;

    function handleTouchStart(e: TouchEvent) {
        touchStart = e.targetTouches[0].clientX;
        touchVerticalStart = e.targetTouches[0].clientY;
    }
    function handleTouchEnd(e: TouchEvent) {
        if (Math.abs(touchVerticalEnd - touchVerticalStart) < 50)
            if (touchEnd - touchStart > length) {
                node.dispatchEvent(new CustomEvent('swiperight'))
            } else if (touchStart - touchEnd > length) {
                node.dispatchEvent(new CustomEvent('swipeleft'))
            }
    }
    function handleTouchMove(e: TouchEvent) {
        touchEnd = e.targetTouches[0].clientX;
        touchVerticalEnd = e.targetTouches[0].clientY;
    }
    node.addEventListener('touchstart', handleTouchStart)
    node.addEventListener('touchmove', handleTouchMove)
    node.addEventListener('touchend', handleTouchEnd)


    return {
        destroy() {
            node.removeEventListener('touchstart', handleTouchStart, true);
            node.removeEventListener('touchmove', handleTouchMove, true);
            node.removeEventListener('touchend', handleTouchEnd, true);
        }
    };
}


// export const tap: ReferenceAction = (node) => {

//     let touchStart: number, touchEnd: number;
//     let touchVerticalStart: number, touchVerticalEnd: number;

//     function handleTouchStart(e: TouchEvent) {
//         touchStart = e.targetTouches[0].clientX;
//         touchVerticalStart = e.targetTouches[0].clientY;
//     }
//     function handleTouchEnd(e: TouchEvent) {
//         if (Math.abs(touchEnd - touchStart) < 20 && Math.abs(touchVerticalEnd - touchVerticalStart) < 20) {
//             node.dispatchEvent(new CustomEvent('tap'))
//         }
//     }
//     function handleTouchMove(e: TouchEvent) {
//         touchEnd = e.targetTouches[0].clientX;
//         touchVerticalEnd = e.targetTouches[0].clientY;
//     }
//     node.addEventListener('touchstart', handleTouchStart)

//     node.addEventListener('touchmove', handleTouchMove)

//     node.addEventListener('touchend', handleTouchEnd)


//     return {
//         destroy() {
//             node.removeEventListener('touchstart', handleTouchStart, true);
//             node.removeEventListener('touchmove', handleTouchMove, true);
//             node.removeEventListener('touchend', handleTouchEnd, true);
//         }
//     };
// }