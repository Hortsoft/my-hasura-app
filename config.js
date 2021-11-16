import { withData } from  'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
      uri: 'https://hortsoft.herokuapp.com/v1/graphql',
  })

}

export default withData(config)