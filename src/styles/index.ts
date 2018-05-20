import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import styleVariables from 'styles/variables'

export default () => injectGlobal`
    ${styledNormalize}

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: ${styleVariables.font};
        color: ${styleVariables.primaryColor};
        overflow-y: scroll;
        background-color: ${styleVariables.backgroundColor};
        font-weight: 400;
    }
`
