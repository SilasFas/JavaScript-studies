// class = a blueprint for creating objects
//         define what properties and methods they have
//         use a constructor for unique properties

class Player_settings {
    score = 0

    pause() {
        console.log('You paused the game')
    }

    exit = () => console.log('You exited the game')

    // exit () {
    //     console.log('You paused the game')
    // }

    playing () {
        console.log(`You are still playing`)
    }
}

const Player1 = new Player_settings()
const Player2 = new Player_settings()

Player1.score += 1
console.log(Player1.score)

Player1.pause()
Player1.exit()


console.log(Player2.score)
Player1.pause()
Player1.playing()
