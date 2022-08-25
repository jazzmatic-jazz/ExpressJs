const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User List')

})

router.get('/new', (req, res) => {
  // res.send('New user')
  res.render('users/new')
})

router.post('/', function (req, res) {
  const isValid = true
  if (isValid){
    users.push({firstName: req.body.firstName})
    res.redirect(`/users/${users.length - 1}`)
  }
  else{
    console.log('Error')
    res.render('users/new', {firstName: req.body.firstName})
  }
  
  res.send('Hello')
})

router.route('/:id').get((req, res) => {
  
    id = req.params.id
    console.log(req.user)
    res.send(`Get user Id ${id}`)

}).post((req, res) => {
    id = req.params.id
    res.send(`Update user Id ${id}`)

}).delete( (req, res) => {
    id = req.params.id
    res.send(`Delete user Id ${id}`)

})


// router.get('/:id', (req, res) => {
//     id = req.params.id
//     res.send(`Get user Id ${id}`)

// })
// router.put('/:id', (req, res) => {
//     id = req.params.id
//     res.send(`Update user Id ${id}`)

// })
// router.delete('/:id', (req, res) => {
//     id = req.params.id
//     res.send(`Delete user Id ${id}`)

// })

const users = [{name: "John"}, {name: "Doe"}]

router.param("id", (req, res, next, id)=>{
  // console.log(id)
  req.user = users[id]
  next()
})

module.exports = router