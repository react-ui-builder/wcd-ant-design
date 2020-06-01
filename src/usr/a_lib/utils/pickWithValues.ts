import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';

function isNotNil (value: any): boolean {
  return !isNil(value);
}

export default function(object: any): any {
  return pickBy(object, isNotNil);
}
