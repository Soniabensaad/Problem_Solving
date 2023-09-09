var getCommon = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (const el of set1) {
        if (set2.has(el)) {
            return el; // Return the minimum common value immediately when found
        }
    }

    return -1; // If no common value is found, return -1
};
