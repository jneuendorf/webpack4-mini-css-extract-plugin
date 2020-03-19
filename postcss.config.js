module.exports = ({file, options}) => {
    return {
        plugins: [
            require("autoprefixer")
            // ...(mode === "production" ? [require("autoprefixer")] : [])
        ],
        sourceMap: false,
    }
}
