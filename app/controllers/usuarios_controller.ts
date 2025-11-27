import { updateUsuarioValidator } from '#validators/usuario'
import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/user'
import { createUsuarioValidator } from '#validators/usuario'

export default class UsuariosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const usuarios = await Usuario.all()
    return usuarios
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createUsuarioValidator)
    const usuario = await Usuario.create(payload)
    return usuario
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const usuario = await Usuario.find(params.id)
    return usuario
  }

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const usuarios = await Usuario.find(params.id)
    if (!usuarios) {
      return { error: 'Usuário não encontrado' }
    }
    const data = await request.validateUsing(updateUsuarioValidator)
    usuarios.merge(data)
    await usuarios.save()
    return usuarios
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const usuarios = await Usuario.find(params.id)
    if (!usuarios) {
      return { error: 'Usuário não encontrado' }
    }
    await usuarios.delete()
    return { message: 'Usuario deletado com sucesso' }
  }
}
