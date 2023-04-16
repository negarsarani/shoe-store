export function getCurrentURL() {
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
      return [  host, hostname, href, origin, pathname, port, protocol, search]
}
