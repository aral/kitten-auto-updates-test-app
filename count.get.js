export default function ({ response }) {
  kitten.db.counter ??= { count: 0 }
  kitten.db.counter.count++
  response.end(String(kitten.db.counter.count))
}
