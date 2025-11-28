import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'
import Livro from '#models/livro'

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const livro = await Livro.all()
    return livro
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    const livro = await Livro.create(payload)
    return payload
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    return livro
  }

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    const payload = await request.validateUsing(createLivroValidator)
    livro.merge(payload)
    await livro.save()
    return livro
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    await livro.delete()
  }
}
