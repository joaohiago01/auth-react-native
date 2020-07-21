export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '155f654dsgargf54g54646s4a6as5f45611a5fgagjaig',
        user: {
          name: 'Hiago',
          email: 'joaohiago96@gmail.com',
        },
      });
    }, 1000);
  });
}
