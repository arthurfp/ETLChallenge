function pivot(list, start = 0, end = list.length + 1) {
    let pivot = list[start];
    let swapIndex = start;
    for (let i = start + 1; i < list.length; i++) {
        if (pivot > list[i]) {
            swapIndex++;
            swap(list, i, swapIndex);
        }
    }
    swap(list, start, swapIndex);
    return swapIndex;

    function swap(list, firstIndex, secondIndex) {
        [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
    }

}

function quickSort(list, left = 0, right = list.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(list, left, right);
        quickSort(list, left, pivotIndex - 1);
        quickSort(list, pivotIndex + 1, right);
    }

    return list;
}

export function sort(numbers = []) {
    if (!numbers.length) {
        return []
    }
    return quickSort(numbers)
}