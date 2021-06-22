import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  FormControl,
  Button,
} from '@material-ui/core'
import { searchTypes } from '../data'
import categories, { CategoryType } from '../data/categories'
import options, { OptionType } from '../data/options'
import { SearchOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fluid: {
      width: '100%',
    },
  })
)

const CustomizedSelects = () => {
  const [keyword, setKeyword] = React.useState<string>('')
  const [type, setType] = React.useState<string>('#')
  const [category, setCategory] = React.useState<string>('#')
  const [option, setOption] = React.useState<string>('#')
  const [filteredCat, setFilteredCat] = React.useState<CategoryType[]>([])
  const [filteredOp, setFilteredOp] = React.useState<OptionType[]>([])

  React.useEffect(() => {
    setCategory('#')
    if (type === '#') {
      setFilteredCat([])
    } else {
      setFilteredCat(categories.filter((c) => c.typeId === type))
    }
  }, [type])

  React.useEffect(() => {
    setOption('#')
    if (category === '#') {
      setFilteredOp([])
    } else {
      setFilteredOp(
        options.filter((c) => c.categoryId === category.split(' ')[0])
      )
    }
  }, [category])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const catStrings = category.split(' ')
    let query = keyword.split(' ').join('+')
    query += keyword !== '' && category !== '#' ? '+' : ''
    query +=
      category === '#' ? '' : `${category.slice(catStrings[0].length + 1)}`
    query += ` ${option === '#' ? '' : option}`
    window.open(`https://www.google.com/search?q=${query}`, '_blank')
  }

  const classes = useStyles()
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        style={{ display: 'flex' }}
        container
        justify='center'
        alignItems='center'
        direction='row'
        spacing={4}
      >
        <Grid style={{ transition: 'all 0.3s ease' }} item xs={12}>
          <FormControl className={classes.fluid}>
            <TextField
              placeholder='Your Keyword'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} item>
          <Select
            className={classes.fluid}
            onChange={(e) => setType(e.target.value as string)}
            value={type}
          >
            <MenuItem value='#'>Select Type</MenuItem>
            {searchTypes.map((st) => (
              <MenuItem key={st.id} value={st.id}>
                {st.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={12} item>
          <Select
            onChange={(e) => setCategory(e.target.value as string)}
            className={classes.fluid}
            value={category}
          >
            <MenuItem value='#'>Select Category</MenuItem>
            {filteredCat.map((cat) => (
              <MenuItem key={cat.id} value={`${cat.id} ${cat.query}`}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={12} item>
          <Select
            onChange={(e) => setOption(e.target.value as string)}
            className={classes.fluid}
            value={option}
          >
            <MenuItem value='#'>Select Option</MenuItem>
            {filteredOp.map((op) => (
              <MenuItem key={op.id} value={op.query}>
                {op.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          style={{ display: 'flex' }}
          justify='center'
          alignItems='center'
          item
          xs={12}
        >
          <Button
            variant='contained'
            color='primary'
            type='submit'
            startIcon={<SearchOutlined />}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default CustomizedSelects
