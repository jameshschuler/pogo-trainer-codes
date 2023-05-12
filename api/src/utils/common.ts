export function isNullOrUndefined(value: any): boolean {
  return value === undefined || value == null;
}

export function isNullOrEmpty(value?: string) {
  return value === undefined || value === null || value.trim() === "";
}
