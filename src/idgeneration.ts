function generate() {
    const randomString = '123456789abcdefghijklmnopqrstuvwxyz';
    const length = 5;
    let deploymentId = ""
    for (let i = 0; i <= length; i++) {
        deploymentId += randomString[Math.floor(Math.random() * randomString.length)]
    }
    return deploymentId
}

module.exports = {
    generate
}