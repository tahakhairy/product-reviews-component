const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const getInitials = (name: string) => {
  const [first, last] = name.split(' ')
  const initals = first.charAt(0) + last.charAt(0)
  return initals
}

export { formatDate, getInitials }
