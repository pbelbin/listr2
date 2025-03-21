import delay from 'delay'

/* eslint-disable @typescript-eslint/no-empty-function */
import { Listr } from '@root/index'
import { Logger } from '@utils/logger'

interface Ctx {
  skip: boolean
}

const logger = new Logger({ useIcons: false })

async function main (): Promise<void> {
  let task: Listr<Ctx>

  logger.start('Example for throwing out an error.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will fail.',
        task: async (): Promise<void> => {
          await delay(2000)
          throw new Error('This task failed after 2 seconds.')
        }
      },
      {
        title: 'This task will never execute.',
        task: (_, task): void => {
          task.title = 'I will change my title if this executes.'
        }
      }
    ],
    { concurrent: false }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }

  logger.start('Example for throwing out an error in concurrent tasks.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will fail.',
        task: async (): Promise<void> => {
          await delay(2000)
          throw new Error('This task failed after 2 seconds.')
        }
      },
      {
        title: 'This task will execute.',
        task: (_, task): void => {
          task.title = 'I will change my title since it is concurrent.'
        }
      }
    ],
    { concurrent: true }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }

  logger.start('Example for throwing out an error with exitOnError disabled.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will fail.',
        task: async (): Promise<void> => {
          await delay(2000)
          throw new Error('This task failed after 2 seconds.')
        }
      },
      {
        title: 'This task will execute.',
        task: (_, task): void => {
          task.title = 'I will change my title if this executes.'
        }
      }
    ],
    { concurrent: false, exitOnError: false }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }

  logger.start('Example for subtasks that change exit on error.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will execute and not quit on errors.',
        task: (_, task): Listr =>
          task.newListr(
            [
              {
                title: 'This is a subtask.',
                task: async (): Promise<void> => {
                  throw new Error('I have failed [0]')
                }
              },
              {
                title: 'This is an another subtask.',
                task: async (): Promise<void> => {
                  throw new Error('I have failed [1]')
                }
              },
              {
                title: 'This is yet an another subtask.',
                task: async (_, task): Promise<void> => {
                  task.title = 'I have succeeded.'
                }
              }
            ],
            { exitOnError: false }
          )
      },
      {
        title: 'This task will execute.',
        task: (): void => {
          throw new Error('I will exit on error since I am a direct child of parent task.')
        }
      }
    ],
    { concurrent: false, exitOnError: true }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }

  // H2KTg7q5F1kWMtrPFdOERVSZc3UT2IsM
  logger.data('You can also access all the errors spew out by the tasks by `task.err` which will return an array of errors.')
  logger.fail(task.err.toString())

  logger.start('Example for not collapsing errors and show them as output.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will fail.',
        task: async (): Promise<void> => {
          await delay(2000)
          throw new Error('This task failed after 2 seconds.')
        }
      },
      {
        title: 'This task will execute.',
        task: (_, task): void => {
          task.title = 'I will change my title if this executes.'
        }
      }
    ],
    {
      concurrent: false,
      exitOnError: false,
      rendererOptions: { collapseErrors: false }
    }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }

  logger.start('You can set the throw error from the task level.')

  task = new Listr<Ctx>(
    [
      {
        title: 'This task will fail.',
        task: async (): Promise<void> => {
          await delay(2000)
          throw new Error('This task failed after 2 seconds.')
        },
        exitOnError: false
      },
      {
        title: 'This task will execute.',
        task: (_, task): void => {
          task.title = 'I will change my title if this executes.'
        }
      }
    ],
    {
      concurrent: false,
      exitOnError: true
    }
  )

  try {
    const context = await task.run()
    logger.success(`Context: ${JSON.stringify(context)}`)
  } catch (e: any) {
    logger.fail(e)
  }
}

main()
