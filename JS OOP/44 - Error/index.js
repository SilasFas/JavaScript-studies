try {
    //
    throw new Error('Deu um problema do código')
} catch (e) {
    console.log(e.name + ':' + e.message)
}
