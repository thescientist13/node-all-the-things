function getGreeting(name?: string) {
  return `Hello ${name ?? "World"}!`;
}

export { getGreeting }