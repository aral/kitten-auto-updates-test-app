kitten.db.counter ??= { count: 0 }

export default () => kitten.html`
  <h1>Counter</h1>
  <p id='count'>${kitten.db.counter.count}</p>
`
