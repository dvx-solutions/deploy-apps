type Options = {
  fail?: boolean;
};

export function sleep(ms: number, options?: Options) {
  const { fail = false } = options ?? {};

  return new Promise((resolve, reject) => {
    if (fail) setTimeout(reject, ms);
    setTimeout(resolve, ms);
  });
}
