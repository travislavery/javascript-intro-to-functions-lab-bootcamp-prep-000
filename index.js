function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
<<<<<<< HEAD
  var loveGrandma = 'I love you, Grandma.'
  if (string === lowercase) {
    return "I can't hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === loveGrandma) {
=======
  if (string === lowercase) {
    var response = "I can't hear you!"
    return response
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === 'I love you Grandma.') {
>>>>>>> 03cb281f1ed3e80f066cb6c9e051d0ef7b4b5c48
    return "I love you, too."
  }
}