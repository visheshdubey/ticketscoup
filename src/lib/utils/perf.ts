export const perf = (params?: { scope: string }) => {
    const st = Date.now();

    return () => {
        const et = Date.now();
        const d = et - st;

        if (!params) {
            console.log(`\n ⏲ `, ` ${d}ms`);

            return;
        }

        console.log(`\n ⏲ ${'- ' + params.scope + ':'}`, ` ${d}ms`);
    };
};
