function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Koa = require('koa');

const app = new Koa();

app.use((() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        const start = new Date().getTime();
        yield next();
        const ms = new Date().getTime() - start;
        console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
        ctx.response.set('X-Response-Time', `${ms}ms`);
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());

app.use((() => {
    var _ref2 = _asyncToGenerator(function* (ctx, next) {
        yield next();
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, koa2!</h1>';
    });

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
})());

app.listen(3000);
console.log('app started at port 3000...');
