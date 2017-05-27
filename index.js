const _ = require('lodash')

module.exports = function(bp) {

  bp.middlewares.load()

  bp.hear({ platform: 'facebook',type: 'message', text: 'stop' }, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Thanks for playing, come back anytime. !! I win though :) Just start typing to play again')
  })

  //currently listening just to facebook messenger and repeat
  bp.hear({ platform: 'facebook',type: 'message', text: /.+/i }, (event, next) => {
    bp.messenger.sendText(event.user.id, event.text)
  })
  
}