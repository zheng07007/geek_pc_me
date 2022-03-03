const TOKEN = 'TOKEN'

// 储存token
export function setToken(token) {
  return localStorage.setItem(TOKEN, token)
}

// 获取token
export function getToken() {
  return localStorage.getItem(TOKEN)
}

// 清除token
export function removeToken() {
  return localStorage.removeItem(TOKEN)
}
