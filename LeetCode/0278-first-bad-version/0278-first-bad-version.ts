/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left = 0;
        let right = n;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
