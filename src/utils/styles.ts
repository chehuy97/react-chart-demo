import { css } from "styled-components"

export const colors = {
    primary: '#2E2E2E',
    navbarHover: '#BEBEBE'
}

export const zIndexValues = {
    modal: 1000,
    dropdown: 101,
    navLeft: 100,
}

export const sizes = {
    appNavBarLeftWidth: 12,

}

export const fontSize = {
    avatarSize: 25
}

export const mixin = {
    clickable: css`
        cursor: pointer;
        user-select: none;
    `
}