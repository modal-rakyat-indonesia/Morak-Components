export const performButtonGroupValidation = (required, id) => (id !== '' && id !== null && id !== undefined) || !required;

export const performInputValidation = (required, value) => value !== '' || !required;
