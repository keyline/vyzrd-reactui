
export const STORAGE_KEYS = {
    TOKEN: 'auth_token',
    USER: 'user_data',
    OTP: "otp_payload",
};

export const setToken = (token) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    return true;
};

export const getToken = () => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    if (!token) {
        return null;
    }
    return token;
};

export const removeToken = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
};

export const setUser = (user) => {
    if (!user) {
        return false;
    }
    const data = JSON.stringify(user);
    localStorage.setItem(STORAGE_KEYS.USER, data);
    return true;
};

export const getUser = () => {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    if (!data) {
        return null;
    }
    return JSON.parse(data);
};

export const removeUser = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
};

export const clearStorage = () => {
    localStorage.clear();
};


export const setOtpPayload = (data) => {
  localStorage.setItem(STORAGE_KEYS.OTP, JSON.stringify(data));
};

export const getOtpPayload = () => {
  const data = localStorage.getItem(STORAGE_KEYS.OTP);
  return data ? JSON.parse(data) : null;
};

export const removeOtpPayload = () => {
  localStorage.removeItem(STORAGE_KEYS.OTP);
};