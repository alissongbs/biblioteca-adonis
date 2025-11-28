import vine from '@vinejs/vine'
/**
 * Validates the usuario's creation action
 */
export const createUsuarioValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(6),
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)

/**
 * Validates the usuario's update action
 */
export const updateUsuarioValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).optional(),
    email: vine.string().email().optional(),
    password: vine.string().minLength(6).optional(),
  })
)
