// Canvas API = a means for drawing graphics 
//              used for animations, games, data visualization

// Context = a painting within a picture frame

let canvas = document.getElementById('myCanvas') // frame
let context = canvas.getContext('2d') // brush

///draw lines
// context.strokeStyle = 'purple'
// context.lineWidth = 5
// context.beginPath()
// context.moveTo(0, 0) // placing the brush on the canvas/frame (starting position)
// context.lineTo(250, 250) // (final position)
// context.lineTo(250, 500)

// context.moveTo(250, 250) 
// context.lineTo(500, 0)
// context.stroke()





// triangulo
// context.beginPath()
// context.moveTo(250, 0)
// context.lineTo(0, 250)

// context.moveTo(0, 250)
// context.lineTo(500, 250)

// context.moveTo(500, 250)
// context.lineTo(250, 0)

// context.stroke()

// context.fillStyle = 'yellow'
// context.fill()


//Rectangle
// context.lineWidth = 5
// context.fillStyle = 'red'
// context.fillRect(0, 0, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(0, 0, 250, 250)

// context.lineWidth = 5
// context.fillStyle = 'green'
// context.fillRect(0, 250, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(0, 250, 250, 250)

// context.lineWidth = 5
// context.fillStyle = 'blue'
// context.fillRect(250, 250, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(250, 250, 250, 250)

// context.lineWidth = 5
// context.fillStyle = 'pink'
// context.fillRect(250, 0, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(250, 0, 250, 250)



//Circle
// (x, y r, sAngule, eAngule, counterclockwise)
// context.beginPath()
// context.arc(250, 250, 200, 0, 2 * Math.PI)
// context.strokeStyle = 'darkblue'
// context.lineWidth = 5
// context.fillStyle = 'lightblue'
// context.fill()
// context.stroke()




// Draw Text 
context.font = '50px MV Boli'
context.fillStyle = 'grey'
context.textAlign = 'center'
context.fillText('You win!', canvas.width / 2, canvas.height / 2)





