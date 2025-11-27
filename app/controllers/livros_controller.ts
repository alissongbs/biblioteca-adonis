import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'
import Livro from '#models/livro'
import { updateLivroValidator } from '#validators/livro'
import { DateTime } from 'luxon'

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const livros = await Livro.all()
    return livros
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
    const data = {
      ...payload,
      datapublicacao: DateTime.fromJSDate(payload.datapublicacao),
    }
    const livro = await Livro.create(data)
    return livro
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const livro = await Livro.find(params.id)
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
    const livros = await Livro.find(params.id)
    if (!livros) {
      return { error: 'Livro não encontrado' }
    }
    const data = await request.validateUsing(updateLivroValidator)
    const formattedData = {
      ...data,
      datapublicacao: data.datapublicacao ? DateTime.fromJSDate(data.datapublicacao) : undefined,
    }
    livros.merge(formattedData)
    await livros.save()
    return livros
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const livros = await Livro.find(params.id)
    if (!livros) {
      return { error: 'Livro não encontrado' }
    }
    await livros.delete()
    return { message: 'Livro deletado com sucesso' }
  }
}
