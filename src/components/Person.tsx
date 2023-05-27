import React from 'react'

const Person: React.FC<{ resource: any }> = (props) => {
  const { resource } = props
  const person = resource?.read()

  return <div>{person}</div>
}

export default Person
