import { isValidBookTitle } from "../helpers/validationHelper";

test("Validar título de livro", () => {
    expect(1 + 1).toBe(2);
    expect(isValidBookTitle("O Livro")).toBe(true);
});
