import { createResponseData } from 'mock/common'
import type { MockHandler } from 'vite-plugin-mock-server'
import Mock from 'mockjs'

const mocks: MockHandler[] = [
  {
    pattern: '/api/user',
    handle: (req, res) => {
      const data = Mock.mock({
        'id': '@increment',
        'timestamp': +Mock.Random.date('T'),
        'author': '@cname',
        'reviewer': '@cname',
        'title': '@ctitle(5, 10)',
        'content_short': '@cparagraph',
        'forecast': '@float(0, 100, 2, 2)',
        'importance': '@integer(1, 3)',
        'type|1': ['CN', 'US', 'JP', 'EU'],
        'status|1': ['published', 'draft'],
        'display_time': '@datetime',
        'comment_disabled': true,
        'pageviews': '@integer(300, 5000)',
        'platforms': ['a-platform'],
      })
      res.setHeader('Content-Type', 'application/json')
      res.end(createResponseData(data))
    },
  },
]

export default mocks
