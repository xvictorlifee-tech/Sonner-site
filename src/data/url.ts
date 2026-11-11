/** Normaliza o caminho da página: remove ".html", "/index" e a barra final. */
export function cleanPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');
  return path === '' ? '/' : path;
}
