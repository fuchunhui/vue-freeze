module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/vue-freeze/' : '/',
    devServer: {
        port: 8010
    }
};