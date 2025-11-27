import vine from '@vinejs/vine'
/**
 * Validates the livro's creation action
 */
export const createLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(6),
    autor: vine.string().trim().minLength(6),
    genero: vine.string().trim().minLength(6),
    datapublicacao: vine.date(),
  })
)

/**
 * Validates the livro's update action
 */
export const updateLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(6),
    autor: vine.string().trim().minLength(6),
    genero: vine.string().trim().minLength(6),
    datapublicacao: vine.date(),
  })
)
