[参考React的error-boundaries文档](https://reactjs.org/docs/error-boundaries.html)

>    Error boundaries do not catch errors for:
> - Event handlers (learn more)
> - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
> - Server side rendering
> - Errors thrown in the error boundary itself (rather than its children)