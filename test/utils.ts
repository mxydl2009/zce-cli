import { join } from 'path'
import * as execa from 'execa'

import { DynamicObject, Command, Context } from '../src/core/types'

/**
 * Executes a commandline via execa.
 * @param args The command line arguments
 * @returns Promise with result
 */
export const runCommand = async (
  args?: string | string[]
): Promise<execa.ExecaReturns> => {
  if (typeof args === 'string') {
    args = [args]
  }
  // args && args.push('--compiled-build')
  return await execa(join(__dirname, '../bin/zce.js'), args)
}

/**
 * Create a fake command
 * @param options override default
 */
export const createFakeCommand = (options?: DynamicObject): Command => {
  return Object.assign(
    {
      name: 'fake',
      description: 'fake command',
      usage: 'fake [options]',
      action: jest.fn()
    },
    options
  )
}

/**
 * Create a fake context
 * @param options override default
 */
export const createFakeContext = (options?: DynamicObject): Context => {
  return Object.assign(
    {
      brand: 'zce',
      options: {},
      extras: [],
      input: [],
      pkg: {
        name: 'zce-cli',
        version: '0.1.0'
      }
    },
    options
  )
}

export { execa }