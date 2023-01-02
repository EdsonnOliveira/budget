import { black, primary, secondary, warning } from "./colors";

export const shadow = {
    elevation: 10,
    boxShadow: `1px 2px 3px ${black}`,
    shadowOpacity: 0.25
}

export const shadowPrimary = {
    elevation: 10,
    boxShadow: `0px 3px 5px ${primary}`,
    shadowOpacity: 1
}

export const shadowSecondary = {
    elevation: 10,
    boxShadow: `0px 3px 5px ${secondary}`,
    shadowOpacity: 1
}

export const shadowWarning = {
    elevation: 10,
    boxShadow: `0px 3px 5px ${warning}`,
    shadowOpacity: 1
}