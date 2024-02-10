export function hasOwnProperty<T>(obj: T, property: string): boolean {
	return Boolean(Object.prototype.hasOwnProperty.call(obj, property));
}
