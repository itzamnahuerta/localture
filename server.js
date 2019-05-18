const passport = require('passport');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { authRoute} = require('./routes/authRoute');
const { userRoute } = require('./routes/userRoute');
const { loggedInRoute } = require('./routes/loggedInRoute');
const { authorized } = require('./auth/auth');


const PORT = process.env.PORT || 4567
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());

app.use('/auth', authRoute);
app.use('/app', authorized, loggedInRoute);
app.use('/users', userRoute)


app.get('/', async (req, res) => {
    try {
      res.send('localture')
    } catch (e) {
      res.send(e)
    }
  })

  app.listen(PORT, () => console.log(`running on port ${PORT}`))
