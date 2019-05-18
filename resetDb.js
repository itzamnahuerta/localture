const { localtureDb } = require('./models')

const resetDb = async () => {
  try {
    await localtureDb.sync({ force: true })
    console.log('database successfully synced')
  } catch(e) {
    console.log(e)
  } finally {
    process.exit()
  }
}

resetDb()