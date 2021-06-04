function greeter(fname, lname = null) {
    if (lname) {
        return `Hello ${fname} ${lname}`
    }
    return `Welcome ${fname}`
}
module.exports = greeter