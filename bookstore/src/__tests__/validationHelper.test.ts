import { isValidBookTitle } from '../helpers/validationHelper';

test('Validar título de livro', () => {
    expect(isValidBookTitle('O Livro')).toBe(true);
    expect(isValidBookTitle('Oi')).toBe(false);
});
