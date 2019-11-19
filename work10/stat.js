function stat() {
    let str = document.getElementById('str').value
    let obj = str.split('').sort().reduce(
        (x, y) => (x[y]++ || (x[y] = 1), x), {}
        )
    console.log(obj)
    document.getElementById('result').innerText =JSON.stringify(obj)
}
