import { ReactTestRendererJSON } from 'react-test-renderer';
import { ReactTreeType } from './types';
/**
 * Recursively searches the rendered component tree for an element with a given testID.
 * @param {object} tree - The rendered component tree.
 * @param {string} testID - The testID to search for.
 * @returns {object|null} The found element, or null if not found.
 */

export function findByTestId(
  tree: ReactTreeType,
  testID: string
): ReactTreeType {
  if (!tree || (tree.props && tree.props.testID === testID)) {
    return tree;
  }
  if (tree.children) {
    for (let child of tree.children) {
      if (typeof child === 'object') {
        const found = findByTestId(child, testID);
        if (found) return found;
      }
    }
  }
  return null;
}
