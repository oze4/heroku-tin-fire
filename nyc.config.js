module.exports = {
    include: ['src/**/*.ts'],
    extension: ['.ts'],
    require: ['ts-node/register'],
    reporter: ['text', 'html', 'lcov'],
    sourceMap: true,
    instrument: true,
};
