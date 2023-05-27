import { useEffect, useState, useTransition } from 'react'
import Person from '../../components/Person'
import Loader from '../../components/Loader'
import { PersonResource } from '../../resources/Person'

const Page1: React.FC = (): JSX.Element => {
  const [person, setPerson] = useState<any>()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    load()
  }, [])

  const load = () => {
    startTransition(() => {
      setPerson(PersonResource())
    })
  }

  return (
    <>
      {isPending ? <Loader /> : ''}
      <h3>Page 1</h3>
      <Person resource={person} />
      <button onClick={load}>Reload</button>
    </>
  )
}

export default Page1
