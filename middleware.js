const resourceSearchMiddleware = {
    public_account: item => ({...item, email: 'superman@dc-comics.com'}),
}

module.exports = resourceSearchMiddleware;