const getBoostBarWidth = (boostAmount: number, maxwidth: number): number => {
    return (boostAmount / 100) * maxwidth
};

const getboostbarcircumference = (boostamount: number, maxCircumference: number): number => {
    return ((100-boostamount) / 100) *maxCircumference
};

export const BoostService = {
    getboostbarcircumference,
    getBoostBarWidth,
};