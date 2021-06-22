export interface SearchTypeType {
  name: string
  id: string
}

const searchTypes: SearchTypeType[] = [
  {
    name: 'Forum Posting',
    id: '0',
  },
  {
    name: 'Blog Commenting',
    id: '1',
  },
  {
    name: 'Directory Submission',
    id: '2',
  },
  {
    name: 'Article Submission',
    id: '3',
  },
  {
    name: 'Social Bookmarking',
    id: '4',
  },
  {
    name: 'Guest Blogging',
    id: '5',
  },
  {
    name: 'Bonus Backlinks',
    id: '6',
  },
  {
    name: '.EDU Backlinks',
    id: '7',
  },
  {
    name: '.GOV Backlinks',
    id: '8',
  },
]

export default searchTypes
