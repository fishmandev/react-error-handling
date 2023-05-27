export const Resouce = (promise: Promise<Response>) => {
  let status = 'pending'
  let result: Response
  let suspender = promise.then(
    (res: Response) => {
      status = 'success'
      result = res
    },
    (err) => {
      status = 'error'
      result = err
    },
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      }
      return result
    },
  }
}
