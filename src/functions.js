import React from 'react'

export const getTomorrow = () => {
    const d = new Date();
    const now_utc =  Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1,8, 0, 0);
    return new Date(now_utc);
};