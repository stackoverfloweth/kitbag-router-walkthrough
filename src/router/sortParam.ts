import { createParam } from "@kitbag/router"

type ExpectedKey = 'postingDate' | 'companyName' | 'distance' | 'salary'

function isExpectedKey(value: string): value is ExpectedKey {
  return ['postingDate', 'companyName', 'distance', 'salary'].includes(value)
}

type ExpectedDirection = 'asc' | 'desc'

function isExpectedDirection(value: string): value is ExpectedDirection {
  return ['asc', 'desc'].includes(value)
}

type Sort = `${ExpectedKey}:${ExpectedDirection}`

export const sortParam = createParam((value, {invalid}) => {
  const [key, direction] = value.split(':')

  if(!isExpectedKey(key) || !isExpectedDirection(direction)){
    throw invalid()
  }

  return `${key}:${direction}` satisfies Sort 
})